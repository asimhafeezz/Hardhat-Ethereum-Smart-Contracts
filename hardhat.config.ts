import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.10",
	networks: {
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/OBr9_gjaEaUlO5PWvBOoV5FUQwEZdTur`,
			accounts: [
				`4b306be46bf994f032269fc10a8d4d46af726af10816858c56611154d9a11d78`,
			],
		},
	},
}
