import { INonce } from "../types/INonce";

export default class Nonce implements INonce {

    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    valueOf(): number {
        return this.value;
    }
}