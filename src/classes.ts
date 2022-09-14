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
}