import "@nomiclabs/hardhat-ethers"

import { ethers } from "hardhat"
import { expect } from "chai"

describe("Hello", function () {
	it("should say hi!", async function () {
		//1. setup
		//2. deploy contract
		//3.call our function to test

		const Hello = await ethers.getContractFactory("Hello")
		const hello = await Hello.deploy()
		await hello.deployed()

		expect(await hello.sayHello()).to.equal("Hello World!!!")
	})
})
