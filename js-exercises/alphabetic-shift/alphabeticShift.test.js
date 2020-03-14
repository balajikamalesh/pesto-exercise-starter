import { alphabeticShift } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  it('returns a shifted string', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism'))
      .toEqual('Qtfvepqtfvepizqpqbsbuizspjejtn');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Antidisestablishmentarianism'))
      .toEqual('Boujejtftubcmjtinfoubsjbojtn');

    expect(alphabeticShift('supercalifragilisticexpialidocious'))
      .toEqual('tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt');

    expect(alphabeticShift('supercalifragzlisticexpialidocious'))
      .toEqual('tvqfsdbmjgsbhamjtujdfyqjbmjepdjpvt');

    expect(alphabeticShift('AntidisestZblishmentarianism'))
      .toEqual('BoujejtftuAcmjtinfoubsjbojtn');
  });

  it('throw cases', () => {
    expect(() => { alphabeticShift({}) }).toThrow();
    expect(() => { alphabeticShift(true) }).toThrow();
    expect(() => { alphabeticShift([null, false]) }).toThrow();
  });
});
