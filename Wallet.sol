pragma ton-solidity >= 0.67.0;
pragma AbiHeader expire;

contract Wallet {

    event TokenReceived(address indexed sender, uint256 indexed amount);
    event TokenPaid(address indexed receiver, uint128 indexed amount);

    constructor() {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
    }

    function receiveTokens() external payable {
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        emit TokenReceived(msg.sender, msg.value);
    }

    function sendValue(address dest, uint128 amount, bool bounce) public view {
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        dest.transfer(amount, bounce, 0);
        emit TokenPaid(dest, amount);
    }

    function getBalance() public returns(uint256){
        return address(this).balance;
    }
}
