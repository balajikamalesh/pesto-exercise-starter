import { freqSort } from './freqSort';

describe('Template Test', () => {
  test('char array Test', () => {
    const array = ['a', 'b', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd', 'e', 'e', 'e', 'e', 'e'];
    expect(freqSort(array)).toEqual(['e', 'd', 'c', 'b', 'a']);
  });
  test('integer array Test', () => {
    const array = ['1', '2', '2', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '5'];
    expect(freqSort(array)).toEqual(['5', '4', '3', '2', '1']);
  });
});
