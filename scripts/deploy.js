 
const hre = require("hardhat");

const main = async ()=> {

  const TweeterDappFactory = await hre.ethers.getContractFactory("TwitterDapp");
  const TweeterDappInstance = await TweeterDappFactory.deploy();

  await TweeterDappInstance.deployed();

  console.log(
    `Transaction Contract deployed to ${TweeterDappInstance.address}`
  );
}

const runMain = async ()=> {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain()


// Deployado en 0x2813b2AeAFdb40EdD30deF6e13b6f12a68c267B9