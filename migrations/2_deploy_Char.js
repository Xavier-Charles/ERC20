const Char = artifacts.require("Char");

module.exports = async function (deployer, network, accounts) {
  // Deploy Char
  await deployer.deploy(Char);
  const char = await Char.deployed();
};
