import BigNumber from 'bignumber.js';

export interface IItem {
    identifier: string,
    nonce: INonce,
    slot: ISlotname,
    name: string,
    description: string,
    thumbnailCID: string,
    amount: string
}

export interface IPenguin {
    identifier: string,
    name: string,
    nonce: INonce,
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

export interface INonce {
    valueOf(): number;
}

export interface ISlotname {
    valueOf(): string;
}