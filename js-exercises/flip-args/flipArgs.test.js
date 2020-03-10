// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  test('flips the given arguments', () => {
    const foo = x => x.map((element) => element+2);
    let flipped = flipArgs(foo);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d2', 'c2', 'b2', 'a2']);
  });

  test('flips the given arguments', () => {
    const foo = x => x.map((element) => element+2);
    let flipped = flipArgs(foo);
    expect(flipped(1, 2, 3, 4)).toEqual([6, 5, 4, 3]);
  });
});
