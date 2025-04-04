import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
  test("Valid ISBN-13: 9781234567897", () => {
    expect(isValid("9781234567897")).toBe(true);
  });

  test("Valid ISBN-13: 9783161484100", () => {
    expect(isValid("9783161484100")).toBe(true);
  });

  test("Invalid ISBN-13 (incorrect checksum): 9781234567890", () => {
    expect(isValid("9781234567890")).toBe(false);
  });

  test("Invalid ISBN-13 (wrong length): 978123456789", () => {
    expect(isValid("978123456789")).toBe(false);
  });

  test("Invalid ISBN-13 (non-numeric): 978abc4567897", () => {
    expect(isValid("978abc4567897")).toBe(false);
  });

  test("Invalid ISBN-13 (too short): 1234567890", () => {
    expect(isValid("1234567890")).toBe(false);
  });
});
