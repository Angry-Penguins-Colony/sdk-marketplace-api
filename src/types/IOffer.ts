import BigNumber from 'bignumber.js';
import { IAddress } from './IAddress';

export default interface IOffer {
    price: BigNumber,
    listedBy: IAddress
}