import "@nomiclabs/hardhat-ethers"

import { ethers } from "hardhat"

const deployHello = async () => {
	const Hello = await ethers.getContractFactory("Hello")
	const hello = await Hello.deploy()
	await hello.deployed()

	console.log("Hello is deployed at :: ", hello.address)
	return hello
}

// @ts-ignore
const sayHello = async hello => {
	console.log("Say Hello :: ", await hello.sayHello())
}

deployHello().then(sayHello)
