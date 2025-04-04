import { formatDuration } from "./duration";

describe("TestFormating", () => {
  test("Format 33 to 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });
  test("Format 123 to 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  test("Format 500 to 8m20s", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  test("Format 3600 to 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  test("Format 3999 to 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
});

describe("TestWeirdCases", () => {
    test("Format 0 to 0s", () => {
      expect(formatDuration(0)).toBe("0s");
    });
    test("Format -5 to error", () => {
        expect(() => formatDuration(-5)).toThrow("Negative time is invalid");
    });
  });
  