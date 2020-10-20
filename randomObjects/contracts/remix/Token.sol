// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyToken is ERC20, ERC20Detailed, ERC20Mintable,ERC20Capped {
    constructor () ERC20Detailed("unq", "MIN",180) ERC20Capped(1000);
    addMinter(0xB8db097380315E85BcD327af435341AC5149A6c2)

    pause()
    unpause()
    paused()

    addPauser(0xB8db097380315E85BcD327af435341AC5149A6c2)

    function foo(address buyer) external{
        IERC20().transfer(buyer,1);
    }
}
