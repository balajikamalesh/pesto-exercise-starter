import { betterStringLib } from './betterStringLib';

describe('String library Test', () => {
  test('reverse Test', () => {
    expect(betterStringLib.reverse('ab')).toBe('ba');
    expect(betterStringLib.reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
    expect(betterStringLib.reverse('mañana mañana')).toBe('anañam anañam');
  });
  test('equal Test', () => {
    expect(betterStringLib.equals('a', 'a')).toBe(true);
    expect(betterStringLib.equals('foo 𝌆 bar', 'foo 𝌆 bar')).toBe(true);
    expect(betterStringLib.equals('mañana', 'mañana')).toBe(true);
  });
});
