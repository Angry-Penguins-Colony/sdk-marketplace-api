/// <reference types="node" />
import BigNumber from 'bignumber.js';
export interface IItem {
    identifier: string;
    nonce: INonce;
    slot: ISlotname;
    name: string;
    thumbnailCID: string;
    offers?: IOffer[];
}
export interface IOffer {
    price: BigNumber;
    listedBy: IAddress;
}
export interface IPenguin {
    identifier: string;
    name: string;
    nonce: INonce;
    score: number;
    purchaseDate: Date;
    thumbnailCID: string;
    equippedItems: {
        [key: string]: IItem;
    };
    offer?: IOffer | undefined;
}
export interface IAddress {
    hex(): string;
    bech32(): string;
    pubkey(): Buffer;
}
export interface INonce {
    valueOf(): number;
}
export interface ISlotname {
    valueOf(): string;
}
