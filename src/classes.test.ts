import { Attributes } from "./classes"

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

describe("from", () => {
    test("empty", () => {
        expect(new Attributes().equals(new Attributes())).toBeTruthy();
    });

    test("equals (with a different order)", () => {
        const a = new Attributes({
            "background": "Background 6",
            "beak": "Beak Silver",
        });

        const b = new Attributes({
            "beak": "Beak Silver",
            "background": "Background 6",
        });

        expect(a.equals(b)).toBeTruthy();
    });

    test("not equals with a different length", () => {
        const a = new Attributes({
            "background": "Background 6",
            "beak": "Beak Silver",
        });

        const b = new Attributes({
            "background": "Background 6",
        });

        expect(a.equals(b)).toBeFalsy();
    });

    test("not equals with a different item", () => {
        const a = new Attributes({
            "background": "Background 6",
            "beak": "Beak Silver",
        });

        const b = new Attributes({
            "background": "Background 6",
            "beak": "Beak Gold",
        });

        expect(a.equals(b)).toBeFalsy();
    });

    test("not equals with a different slot", () => {
        const a = new Attributes({
            "background": "Background 6",
            "beak": "Beak Silver",
        });

        const b = new Attributes({
            "background": "Background 6",
            "hat": "Beak Silver",
        });

        expect(a.equals(b)).toBeFalsy();
    });
});

describe("toApiParameters", () => {
    test("empty", () => {
        expect(new Attributes().toApiParameters()).toEqual("");
    })

    test("one", () => {
        expect(new Attributes({
            "background": "Background 6",
        }).toApiParameters()).toEqual("background=Background%206");
    });

    test("two", () => {
        expect(new Attributes({
            "background": "Background 6",
            "beak": "Beak Silver",
        }).toApiParameters()).toEqual("background=Background%206&beak=Beak%20Silver");
    });
})