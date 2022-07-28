import IItem from './IItem';
import { INonce } from './INonce';
import IOffer from './IOffer';

export default interface IPenguin {
    identifier: string,
    name: string,
    nonce: INonce,
    score: number,
    purchaseDate: Date,
    thumbnailCID: string,
    equippedItems: { [key: string]: IItem; },
    offer?: IOffer | undefined
}