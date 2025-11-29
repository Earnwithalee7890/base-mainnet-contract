const hre = require("hardhat");

async function main() {
    // Address of the deployed contract on Base Sepolia
    const contractAddress = "0x2B42a80A03d6b17C0d9dE0732bA4E30b68aeeF4E";

    console.log(`Interact with contract at: ${contractAddress}`);

    const counter = await hre.ethers.getContractAt("SimpleCounter", contractAddress);

    // 1. Read current count
    let currentCount = await counter.count();
    console.log(`Current Count: ${currentCount}`);

    // 2. Increment count
    console.log("Incrementing count... (waiting for confirmation)");
    const tx = await counter.increment();
    await tx.wait();
    console.log(`Transaction confirmed: ${tx.hash}`);

    // 3. Read new count
    currentCount = await counter.count();
    console.log(`New Count: ${currentCount}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
