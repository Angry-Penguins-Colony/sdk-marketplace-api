import { INonce } from './INonce';
import IOffer from './IOffer';
import Slotname from './Slotname';

export default interface IItem {
    identifier: string,
    nonce: INonce,
    slot: Slotname,
    name: string,
    thumbnailCID: string,
    offers?: IOffer[],
}