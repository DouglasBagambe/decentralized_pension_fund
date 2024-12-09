use anchor_lang::prelude::*;

declare_id!("9RgSJpdM33i5cYgmxrz5esVUeECaM5hRiRLEeHoiA2fM");

#[program]
pub mod savings_goals {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, initial_supply: u64) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        token_account.owner = ctx.accounts.owner.key();
        token_account.supply = initial_supply;
        Ok(())
    }

    pub fn mint(ctx: Context<Mint>, to: Pubkey, amount: u64) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        require!(ctx.accounts.owner.key() == token_account.owner, CustomError::Unauthorized);
        token_account.supply += amount;
        emit!(MintEvent {
            to,
            amount,
        });
        Ok(())
    }

    pub fn create_savings_goal(ctx: Context<CreateGoal>, target_amount: u64, deadline: i64) -> Result<()> {
        let goal = &mut ctx.accounts.goal;
        require!(target_amount > 0, CustomError::InvalidAmount);
        require!(deadline > Clock::get()?.unix_timestamp, CustomError::InvalidDeadline);

        goal.id = ctx.accounts.goal_counter.id;
        goal.user = ctx.accounts.user.key();
        goal.target_amount = target_amount;
        goal.deadline = deadline;
        goal.balance = 0;

        emit!(GoalCreatedEvent {
            goal_id: goal.id,
            user: goal.user,
            target_amount,
            deadline,
        });
        Ok(())
    }

    pub fn contribute(ctx: Context<Contribute>, amount: u64) -> Result<()> {
        let goal = &mut ctx.accounts.goal;
        require!(amount > 0, CustomError::InvalidAmount);
        require!(Clock::get()?.unix_timestamp <= goal.deadline, CustomError::GoalDeadlinePassed);

        goal.balance += amount;

        emit!(ContributionEvent {
            goal_id: goal.id,
            user: ctx.accounts.user.key(),
            amount,
        });

        if goal.balance >= goal.target_amount {
            emit!(GoalAchievedEvent {
                goal_id: goal.id,
                user: ctx.accounts.user.key(),
            });
        }

        Ok(())
    }

    pub fn get_progress(ctx: Context<GetProgress>) -> Result<GoalProgress> {
        let goal = &ctx.accounts.goal;
        Ok(GoalProgress {
            target_amount: goal.target_amount,
            balance: goal.balance,
            deadline: goal.deadline,
            id: goal.id,
        })
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = owner, space = 8 + 64)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Mint<'info> {
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
}

#[derive(Accounts)]
pub struct CreateGoal<'info> {
    #[account(init, payer = user, space = 8 + 128)]
    pub goal: Account<'info, Goal>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    #[account(mut)]
    pub goal_counter: Account<'info, GoalCounter>,
}

#[derive(Accounts)]
pub struct Contribute<'info> {
    #[account(mut)]
    pub goal: Account<'info, Goal>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct GetProgress<'info> {
    #[account(mut)]
    pub goal: Account<'info, Goal>,
}

#[account]
pub struct TokenAccount {
    pub owner: Pubkey,
    pub supply: u64,
}

#[account]
pub struct Goal {
    pub id: u64,
    pub user: Pubkey,
    pub target_amount: u64,
    pub deadline: i64,
    pub balance: u64,
}

#[account]
pub struct GoalCounter {
    pub id: u64,
}

#[event]
pub struct MintEvent {
    pub to: Pubkey,
    pub amount: u64,
}

#[event]
pub struct GoalCreatedEvent {
    pub goal_id: u64,
    pub user: Pubkey,
    pub target_amount: u64,
    pub deadline: i64,
}

#[event]
pub struct ContributionEvent {
    pub goal_id: u64,
    pub user: Pubkey,
    pub amount: u64,
}

#[event]
pub struct GoalAchievedEvent {
    pub goal_id: u64,
    pub user: Pubkey,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct GoalProgress {
    pub target_amount: u64,
    pub balance: u64,
    pub deadline: i64,
    pub id: u64,
}

#[error_code]
pub enum CustomError {
    #[msg("Unauthorized access.")]
    Unauthorized,
    #[msg("Invalid amount.")]
    InvalidAmount,
    #[msg("Invalid deadline.")]
    InvalidDeadline,
    #[msg("Goal deadline has passed.")]
    GoalDeadlinePassed,
}
