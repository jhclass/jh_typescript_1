"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Block 이 형성안된다.
//hash가 없어서
//hash는 prevHash, height , data 값을 이용한 고유한값이다.
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
    }
}
