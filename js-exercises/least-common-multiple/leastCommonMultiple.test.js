import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {
  test('should check the least common multiple of 2 numbers', () => {
    expect(leastCommonMultiple(1, 2)).toBe(2);
    expect(leastCommonMultiple(5, 7)).toBe(35);
    expect(leastCommonMultiple(6, 21)).toBe(42);
    expect(leastCommonMultiple(15, 20)).toBe(60);
    expect(() => { leastCommonMultiple('a', 'b'); }).toThrow();
    expect(() => { leastCommonMultiple(1, 2, 3); }).toThrow();
  });
});
