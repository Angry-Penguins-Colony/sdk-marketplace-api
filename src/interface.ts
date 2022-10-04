import { ElementType, RenderStatus } from './type';

type Price = string;


/**
 * A element that can be either an item or a penguin
 */
export interface IGenericElement {
    id: string;
    type: ElementType;

    name: string;
    thumbnail: string;

    collection: string;
    nonce: number;

    floorPrice?: number;
    items?: IItem[];
    amount?: number;
    owner?: string;
}

export interface IItem {
    /**
     * The id in the database before the item is minted
     */
    id: string,
    /**
     * The collection + nonce; eg. HAT-a1a1a1-01
     */
    identifier: string,
    nonce: number,
    slot: string,
    name: string,
    description: string,
    thumbnailCID: string,
    renderCID: string,
    amount?: number
}

export interface IPenguin {
    /**
     * Penguin #{id}
     */
    id: string,
    /**
     * The collection + nonce; eg. HAT-a1a1a1-01
     */
    identifier: string,
    name: string,
    nonce: number,
    score: number,
    purchaseDate: Date,
    thumbnailCID: string,
    equippedItems: { [key: string]: IItem; },
    /**
     * Bech32
     */
    owner: string,
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

export interface IAttributesStatus {
    cid?: string;
    renderStatus: RenderStatus;
}

export interface IActivity {
    txHash: string;
    price: Price;
    seller: string;
    buyer: string;
    date: number;
}

export interface IOffer {

    id: number;
    price: Price;
    collection: string;
    nonce: number;
    seller: string;
}

export interface IMarketData {
    floorPrice: Price;
    totalVolume: string;
    averagePrice: Price;
    totalListed: number;
}