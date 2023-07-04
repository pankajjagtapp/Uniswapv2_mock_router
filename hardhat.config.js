require("@nomiclabs/hardhat-waffle");
// require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    // goerli: {
    //   url: `https://eth-goerli.g.alchemy.com/v2/bKAcOsXTqHEINi8v0vhhgUIgRO3MyNPO`,
    //   accounts: ['1aa00af2249c90ddef8565fb073e682e361699fd802b46b2efc867198ffbc71c']
    // },
    hardhat: {
      allowUnlimitedContractSize: true,
      // chainId: 0
    },
    // bsctestnet: {
    //   url: 'https://data-seed-prebsc-2-s2.binance.org:8545/',
    //   // url: 'https://bsc.getblock.io/testnet/?api_key=d403c2b8-b4ec-4262-a3f6-dbf41ec3f7e8',
    //   // url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    //   // url: 'https://testnet:7565yFyAhq62txj7jz%y%JG2*6%n52@apis-sj.ankr.com/2182b395b1c942db86304c7729eb61d4/e3de1a44c64a0d87fe1b034d57f5061a/binance/full/test' ,
    //   accounts: ["6eb265f611c61c20deb99d6b0d4025ef4199814687465820509f0dc36cd63f09"],
    //   // gasPrice: 500000000
    // },
    // etherscan: {
    //   // apiKey: "4GRINZQPUA9WGGVPXV8I7N6IIIITPXAHNN", // Your Etherscan API key
    //   apiKey: "9UXDPDRZ664CZ3AQCU2NEAAEUG2FYNJ84A", // Your BSCscan API key
    // },

  },
  gasReporter: {
    currency: 'CHF',
    gasPrice: 21
  },
  // networks: {
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [GOERLI_PRIVATE_KEY]
    // }
  // }
  // defaultNetwork: 'localhost',
  // networks: {
  //   localhost: {
  //     forking: {
  //       url: "https://eth-mainnet.alchemyapi.io/v2/<your key here>",
  //       blockNumber: 15023890,
  //     },
  //   },
  // },
};
