import "@nomiclabs/hardhat-ethers"
import { expect } from "chai"

import { ethers } from "hardhat"

describe("Counter", function () {
	it("must return counter", async function () {
		const Counter = await ethers.getContractFactory("Counter")
		console.log("Counter Byte Code :: ", Counter.bytecode)
		const counter = await Counter.deploy()
		await counter.deployed()

		// expect
	})
})
