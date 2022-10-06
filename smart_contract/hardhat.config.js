// https://eth-goerli.g.alchemy.com/v2/fW7FdCkjXCiaQb28w-Jf3Dt2bPGdk2i6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/fW7FdCkjXCiaQb28w-Jf3Dt2bPGdk2i6',
      accounts: [ '39b5202db864e0a88f17e615fedd7f04931b75d10dbee578667538d2b31bb748'  ]
    }
  }
}