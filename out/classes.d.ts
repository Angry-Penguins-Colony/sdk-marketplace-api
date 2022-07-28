import { ISlotname, INonce } from "./interface";
export declare class Slotname implements ISlotname {
    private readonly slotname;
    constructor(slotname: string);
    valueOf(): string;
}
export declare class Nonce implements INonce {
    private readonly value;
    constructor(value: number);
    valueOf(): number;
}
