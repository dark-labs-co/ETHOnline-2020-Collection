/*
	The following is an extremely basic example of a solidity contract.
	It takes a string upon creation and then repeats it when greet() is called.
*/

pragma solidity >=0.4.0 <0.7.0;

/// @title Greeter
/// @author Cyrus Adkisson
// The contract definition. A constructor of the same name will be automatically called on contract creation.
contract IncramentContract {
    address payable creator;
    uint256 iteration;

    mapping(address => bool) public buyers;

    function Incrementer() public {
        // creator = msg.sender;
        iteration = 0;
    }

    function increment() public payable {
        // require(msg.sender == creator);
        iteration = iteration + 1;
        // buyTokens();
    }

    function transferTok(address payable p1) public payable {
        p1.transfer(1);
        // buyers[msg.sender] = true;
    }

    function getIteration() public view returns (uint256) {
        return iteration;
    }

    /**********
     Standard kill() function to recover funds 
    **********/

    function kill() public {
        if (msg.sender == creator) selfdestruct(creator); // kills this contract and sends remaining funds back to creator
    }
}
