//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
    string text;

    constructor() {
        text = "Hello World!!!";
    }
    
    function sayHello () view public returns (string memory) {
        return text;
    }
}
