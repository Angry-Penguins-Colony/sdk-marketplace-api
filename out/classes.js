"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nonce = exports.Slotname = void 0;
class Slotname {
    constructor(slotname) {
        this.slotname = slotname;
    }
    valueOf() {
        return this.slotname;
    }
}
exports.Slotname = Slotname;
class Nonce {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
}
exports.Nonce = Nonce;
