import { deepEqual } from "./deepEqual";

describe('deep equal Test', () => {
  test('deep equal Test', () => {
    const obj = { a: 5 };

    const obj2 = {};
    Object.defineProperty(obj2, 'a', { value: 5 });

    const obj3 = { a: 5, b: 6 };
    expect(deepEqual(obj, obj2)).toBe(true);
    expect(deepEqual(obj, obj2, { matchDescriptors: true })).toBe(false);
    expect(deepEqual(obj, obj3)).toBe(false);
  });
});
