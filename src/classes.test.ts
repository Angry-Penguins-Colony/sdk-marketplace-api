import Attributes from "./classes"

test("fromEndpointArgument", () => {
    const actual = Attributes.fromEndpointArgument("Background:Background 6;Beak:Beak Silver;Clothes:Clothes Hawaii Shirt Blue;Eyes:Eyes Hanging;Hat:Hat Headscarf Pirate APC;Weapon:Weapon Bow");
    const expected = new Attributes({
        "background": "Background 6",
        "beak": "Beak Silver",
        "clothes": "Clothes Hawaii Shirt Blue",
        "eyes": "Eyes Hanging",
        "hat": "Hat Headscarf Pirate APC",
        "weapon": "Weapon Bow"
    });

    expect(actual).toEqual(expected);
});

test("toEndpointArgument", () => {
    const actual = new Attributes({
        "background": "Background 6",
        "beak": "Beak Silver",
        "clothes": "Clothes Hawaii Shirt Blue",
        "eyes": "Eyes Hanging",
        "hat": "Hat Headscarf Pirate APC",
        "weapon": "Weapon Bow"
    }).toEndpointArgument();
    const expected = "Background:Background 6;Beak:Beak Silver;Clothes:Clothes Hawaii Shirt Blue;Eyes:Eyes Hanging;Hat:Hat Headscarf Pirate APC;Weapon:Weapon Bow";

    expect(actual).toEqual(expected);
});