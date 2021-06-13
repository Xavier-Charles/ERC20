const Char721 = artifacts.require("Char721");

module.exports = async function (deployer, network, accounts) {
  // Deploy Char721
  await deployer.deploy(Char721);
  const char721 = await Char721.deployed();
};
