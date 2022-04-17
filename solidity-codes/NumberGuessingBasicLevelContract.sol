// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./PikaToken.sol";

contract NumberGuessingBasicLevel{
    address public admin;
    uint8 private targetNumber;
    PikaToken private token;

    constructor(address pikaTokenAddress){
        admin = msg.sender;
        token = PikaToken(pikaTokenAddress);
    }

    modifier onlyAdmin(){
        require(msg.sender == admin, "Only admin can call");
        _;
    }

    function setNumber(uint8 _targetNumber) public onlyAdmin{
        targetNumber = _targetNumber;
    }

    // function getNumber() public view onlyAdmin returns(string memory){
    //     return targetNumber;
    // }

    // function mintToken(address receiverAddress) public payable onlyAdmin{
    //     token.mint(receiverAddress, 10);
    // }

    function guessTheNumber(uint8 _targetNumber) public payable returns(string memory){
        require(msg.sender != admin, "Admin can not guess the basic level number");
        require(targetNumber == _targetNumber, "Did not guess the correct number");

        token.mint(msg.sender, 10);

        return "success";
    }
}