use anchor_lang::prelude::*;

declare_id!("9RgSJpdM33i5cYgmxrz5esVUeECaM5hRiRLEeHoiA2fM");

#[program]
pub mod lock_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, unlock_time: i64) -> Result<()> {
        let lock_account = &mut ctx.accounts.lock_account;
        let clock = Clock::get()?;
        require!(unlock_time > clock.unix_timestamp, CustomError::InvalidUnlockTime);

        lock_account.unlock_time = unlock_time;
        lock_account.owner = ctx.accounts.owner.key();
        lock_account.balance = 0;

        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        let lock_account = &mut ctx.accounts.lock_account;
        lock_account.balance += amount;
        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>) -> Result<()> {
        let lock_account = &mut ctx.accounts.lock_account;
        let clock = Clock::get()?;

        require!(clock.unix_timestamp >= lock_account.unlock_time, CustomError::CannotWithdrawYet);
        require!(ctx.accounts.owner.key() == lock_account.owner, CustomError::NotOwner);

        **ctx.accounts.owner.to_account_info().try_borrow_mut_lamports()? += lock_account.balance;
        lock_account.balance = 0;

        emit!(WithdrawalEvent {
            amount: lock_account.balance,
            when: clock.unix_timestamp,
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = owner, space = 8 + 32 + 8 + 8)]
    pub lock_account: Account<'info, LockAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut)]
    pub lock_account: Account<'info, LockAccount>,
    #[account(mut)]
    pub depositor: Signer<'info>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut, close = owner)]
    pub lock_account: Account<'info, LockAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
}

#[account]
pub struct LockAccount {
    pub owner: Pubkey,
    pub unlock_time: i64,
    pub balance: u64,
}

#[event]
pub struct WithdrawalEvent {
    pub amount: u64,
    pub when: i64,
}

#[error_code]
pub enum CustomError {
    #[msg("Unlock time should be in the future.")]
    InvalidUnlockTime,
    #[msg("You can't withdraw yet.")]
    CannotWithdrawYet,
    #[msg("You aren't the owner.")]
    NotOwner,
}
