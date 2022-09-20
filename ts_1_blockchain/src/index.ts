import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash:string;
    height:number;
    data: string;
}
//Block 이 형성안된다.
//hash가 없어서
//hash는 prevHash, height , data 값을 이용한 고유한값이다.

class Block implements BlockShape {
    public hash : string;
    constructor(
        public prevHash:string,
        public height:number,
        public data:string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");

    }
}  

class Blockchain {
    private blocks: Block []
    constructor(){
        this.blocks = [];
    };
    private getPrevHash() {
        if (this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string) {
        const block = new Block(this.getPrevHash(), this.blocks.length+1,data);
        this.blocks.push(block);
    }
    public getBlocks(){
        //return this.blocks;
        return [...this.blocks]; // 배열안에 있는 데이터를 가진 새로운 배열을 리턴해주자
    }
}

const blockchain = new Blockchain();
blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("Fourth Block");

console.log(blockchain.getBlocks()); //모든 블록체인소환



