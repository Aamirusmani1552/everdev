pragma ton-solidity >= 0.67.0;
pragma AbiHeader expire;

contract App {
    uint32 public timestamp;

    constructor() {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();

        timestamp = block.timestamp;
    }

    function renderHelloWorld () public pure returns (string) {
        return 'helloWorld';
    }

    function touch() external {
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        timestamp = block.timestamp;
    }

    function sendValue(address dest, uint128 amount, bool bounce) public view {
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        dest.transfer(amount, bounce, 0);
    }
}
