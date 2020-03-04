// Write your own test cases.
import { forEach, filter, map, reduce } from './arrayUtils';

describe('array methods', () => {
  test('array forEach', () => {
    let testArray = [1, 2, 3, 4];
    
    const log = jest.fn() ;
    global.console = { log } ;
    forEach(testArray, function(element){
      console.log(element);
    })

    expect(log).toHaveBeenCalledWith(4);
  });

  test('array map', () => {
    let testArray = [1, 2, 3, 4];
    let mappedArray = map(testArray,function(element){
      return 2*element;
    })
    expect(mappedArray).toEqual([2, 4, 6, 8]);
  });

  test('array filter', () => {
    let testArray = [1, 2, 3, 4];
    let filteredArray = filter(testArray,function(element){
      return element%2 == 0;
    })
    expect(filteredArray).toEqual([2, 4]);
  });

  test('array reduce', () => {
    let testArray = [1, 2, 3, 4];
    let reducedValue = reduce(testArray,function(initialValue,element){
      return initialValue + element;
    },0)
    expect(reducedValue).toBe(10);
  });
  
});