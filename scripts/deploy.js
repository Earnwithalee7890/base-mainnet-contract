async function main() {
  const Contract = await ethers.getContractFactory("SimpleCounter");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();
  console.log("🚀 Contract deployed at:", contract.target);
}

main().catch(console.error);
