import "@nomiclabs/hardhat-ethers"

import { ethers } from "hardhat"

const deployCounter = async () => {
	const Counter = await ethers.getContractFactory("Counter")
	const counter = await Counter.deploy()
	await counter.deployed()

	console.log("counter address :: ", counter.address)

	return counter
}

// @ts-ignore
const count = async count => {
	console.log("counter :: ", await count.getCounter())
}

deployCounter().then(count)
