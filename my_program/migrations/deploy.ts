import * as anchor from "@coral-xyz/anchor";

module.exports = async function (provider: anchor.AnchorProvider) {
  // Configure the client to use the provided provider.
  anchor.setProvider(provider);

  // Program ID (Replace with the actual deployed program ID)
  const programId = new anchor.web3.PublicKey(
    "9RgSJpdM33i5cYgmxrz5esVUeECaM5hRiRLEeHoiA2fM"
  );

  // Load the program using the IDL
  const idl = await anchor.Program.fetchIdl(programId, provider);
  const program = new anchor.Program(idl!, programId, provider);

  // Add deployment logic here
  console.log("Program deployment script ready to be executed.");
};
