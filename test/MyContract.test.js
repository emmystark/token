const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
    it("Should set the correct initial values", async function () {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("TestName", 42);
        await myContract.deployed();

        expect(await myContract.name()).to.equal("TestName");
        expect(await myContract.getValue()).to.equal(42);
    });

    it("Should update the value correctly", async function () {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("TestName", 42);
        await myContract.deployed();

        await myContract.setValue(100);
        expect(await myContract.getValue()).to.equal(100);
    });
});