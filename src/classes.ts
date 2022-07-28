import { ISlotname, INonce } from "./interface";

export class Slotname implements ISlotname {

    private readonly slotname: string;

    constructor(slotname: string) {
        this.slotname = slotname;
    }

    public valueOf(): string {
        return this.slotname;
    }
}

export class Nonce implements INonce {

    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    valueOf(): number {
        return this.value;
    }
}