import { extractNumber } from "../Deal";

test("Extract the number from a string", () => {
  expect(extractNumber("Pokébown promotion à 7.50 euros")).toBe("7.50");
});
test("Return the string if there is no number", () => {
  expect(extractNumber("Pokébown promotion")).toBe("Pokébown promotion");
});
