export default class Attributes {

    private _map = new Map<string, string>();

    constructor(entries?: { [key: string]: string }) {
        if (entries) {
            for (const key in entries) {
                this.set(key, entries[key]);
            }
        }
    }

    public get(slot: string): string | undefined {
        return this._map.get(slot.toLowerCase());
    }

    public set(slot: string, item: string) {
        this._map.set(slot.toLowerCase(), item);
    }

    public static fromEndpointArgument(str: string) {

        const entries = str.split(";")
            .map(entry => entry.split(":"));

        const map: { [key: string]: string } = {};

        for (const [slot, item] of entries) {
            map[slot] = item;
        }

        return new Attributes(map);
    }

    public toEndpointArgument() {

        const entries = Array.from(this._map.entries());

        return entries
            .map(([slot, item]) => `${capitalizeSlot(slot)}:${item}`).join(";");

        function capitalizeSlot(slot: string) {
            return slot.charAt(0).toUpperCase() + slot.slice(1);
        }
    }

    public equals(other: Attributes): boolean {

        return compareMaps(other._map, this._map);
    }
}

// https://stackoverflow.com/questions/35948335/how-can-i-check-if-two-map-objects-are-equal
function compareMaps<K, V>(map1: Map<K, V>, map2: Map<K, V>) {
    var testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (var [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}