const hre = require("hardhat");

async function main() {
    const numberOfDeployments = 10;
    console.log(`Starting batch deployment of ${numberOfDeployments} contracts...`);

    const deployedAddresses = [];

    for (let i = 1; i <= numberOfDeployments; i++) {
        try {
            console.log(`\nDeploying contract ${i}/${numberOfDeployments}...`);

            const Contract = await hre.ethers.getContractFactory("SimpleCounter");
            const contract = await Contract.deploy();

            // Wait for deployment transaction to be mined
            await contract.waitForDeployment();

            const address = contract.target;
            console.log(`✅ Contract ${i} deployed at: ${address}`);
            deployedAddresses.push(address);

            // Optional: Add a small delay to be safe
            await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (error) {
            console.error(`❌ Failed to deploy contract ${i}:`, error);
        }
    }

    console.log("\n--- Deployment Summary ---");
    console.log("Deployed Contracts:");
    deployedAddresses.forEach((addr, index) => {
        console.log(`${index + 1}. ${addr}`);
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
