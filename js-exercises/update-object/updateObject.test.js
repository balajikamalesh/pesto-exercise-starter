import { updateObject } from "./updateObject";

describe("updateObject", () => {
  test('replace the given char in the given index', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(-2, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-3, '_', ['a', 'b', 'c'])).toEqual(['_', 'b', 'c']);
    expect(() => { updateObject(-4, '_', ['a', 'b', 'c']) }).toThrow();
    expect(() => { updateObject(4, '_', ['a', 'b', 'c']) }).toThrow();
  });
});
