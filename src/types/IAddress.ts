export interface IAddress {
    hex(): string;
    bech32(): string;
    pubkey(): Buffer;
}
