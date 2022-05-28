//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint32 counter;

    //event
    event CounterInc(uint32 counter);

    function count () public {
        counter++;
        emit CounterInc(counter);
    }

    function getCounter () view public returns (uint32) {
        return counter;
    }
}