// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Char721 is ERC721 {
    constructor() ERC721("Char721", "CHAR721"){}
}