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

    }
}   

