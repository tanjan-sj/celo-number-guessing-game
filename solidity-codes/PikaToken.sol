// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.5.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.5.0/access/Ownable.sol";

contract PikaToken is ERC20 {
    constructor() ERC20("PikaToken", "PKT") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}