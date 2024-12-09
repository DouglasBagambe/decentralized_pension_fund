import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MyProgram } from "../target/types/my_program";
import { expect } from "chai";

// Test setup for deploying the contract
describe("my_program", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MyProgram as Program<MyProgram>;

  let lockAccount: anchor.web3.PublicKey;
  let unlockTime: number;
  let lockedAmount: number;
  let owner: anchor.web3.Keypair;

  before(async () => {
    // Setup for deployment
    const [signer] = await anchor.web3.Keypair.generate();
    owner = signer;

    // Assume unlockTime and lockedAmount are set for the test
    unlockTime =
      (await anchor.getProvider().connection.getEpochInfo()).epoch +
      365 * 24 * 60 * 60; // 1 year in the future
    lockedAmount = 1000000000; // Example 1 GWEI

    const lockData = await program.methods
      .deployLock(unlockTime)
      .accounts({
        owner: signer.publicKey,
        // Add any other necessary accounts here
      })
      .rpc();

    lockAccount = lockData; // Store the lock account public key
  });

  it("Should set the right unlockTime", async () => {
    const lockInfo = await program.account.lock.fetch(lockAccount);
    expect(lockInfo.unlockTime).to.equal(unlockTime);
  });

  it("Should set the right owner", async () => {
    const lockInfo = await program.account.lock.fetch(lockAccount);
    expect(lockInfo.owner.toString()).to.equal(owner.publicKey.toString());
  });

  it("Should store the funds to lock", async () => {
    const lockInfo = await program.account.lock.fetch(lockAccount);
    expect(lockInfo.balance).to.equal(lockedAmount);
  });

  it("Should fail if the unlockTime is not in the future", async () => {
    const invalidUnlockTime =
      (await anchor.getProvider().connection.getEpochInfo()).epoch - 1000; // Past time
    await expect(
      program.methods.deployLock(invalidUnlockTime).rpc()
    ).to.be.revertedWith("Unlock time should be in the future");
  });

  describe("Withdrawals", () => {
    it("Should revert with the right error if called too soon", async () => {
      await expect(
        program.methods
          .withdraw()
          .accounts({ lock: lockAccount, owner: owner.publicKey })
          .rpc()
      ).to.be.revertedWith("You can't withdraw yet");
    });

    it("Should revert if called from another account", async () => {
      const otherAccount = anchor.web3.Keypair.generate();
      await expect(
        program.methods
          .withdraw()
          .accounts({ lock: lockAccount, owner: otherAccount.publicKey })
          .rpc()
      ).to.be.revertedWith("You aren't the owner");
    });

    it("Should succeed if the unlockTime has arrived and the owner calls it", async () => {
      // Simulate the passage of time to the unlockTime
      await anchor
        .getProvider()
        .connection.confirmTransaction(
          await anchor.web3.sendAndConfirmTransaction(
            anchor.getProvider().connection,
            new anchor.web3.Transaction(),
            []
          )
        );
      await expect(
        program.methods
          .withdraw()
          .accounts({ lock: lockAccount, owner: owner.publicKey })
          .rpc()
      ).to.not.be.reverted;
    });
  });
});
