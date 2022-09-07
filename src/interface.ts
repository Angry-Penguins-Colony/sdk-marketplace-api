import BigNumber from 'bignumber.js';

export interface IItem {
    identifier: string,
    nonce: number,
    slot: string,
    name: string,
    description: string,
    thumbnailCID: string,
    amount: number
}

export interface IPenguin {
    identifier: string,
    name: string,
    nonce: number,
    score: number,
    purchaseDate: Date,
    thumbnailCID: string,
    equippedItems: { [key: string]: IItem; },
}

export interface IEgg {
    tier: "silver" | "gold" | "diamond",
    name: string,
    thumbnailCID: string,
}

export interface IAddress {
    hex(): string;
    bech32(): string;
    pubkey(): Buffer;
}