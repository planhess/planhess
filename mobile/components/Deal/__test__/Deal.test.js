import { extractNumber } from "../Deal";

const dealDescription = "Pokebown promotion";
test("Extract the number from a string", () => {
  expect(extractNumber(`${dealDescription} à 7.50 euros`)).toBe("7.50");
});
test("Return the string if there is no number", () => {
  expect(extractNumber(`${dealDescription}`)).toBe(`${dealDescription}`);
});
