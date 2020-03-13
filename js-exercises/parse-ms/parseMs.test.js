import { parseMs } from "./parseMs";

describe("parseMs", () => {
  test('should check the least common multiple of 2 numbers', () => {
    expect(parseMs(1337000001)).toStrictEqual({
      days: 15, 
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0
    });
    expect(parseMs(1337000000)).toStrictEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });
    expect(() => { parseMs('sdf324wfdsfsf'); }).toThrow();
  });
});
