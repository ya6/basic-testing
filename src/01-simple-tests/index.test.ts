// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    //arrange
    const sut = simpleCalculator;
    const rawInput = { a: 1, b: 2, action: Action.Add };
    const expected = 3;
    //act
    const result = sut(rawInput);
    //assert
    expect(result).toBe(expected);
  });

  test('should substract two numbers', () => {
    const _rawInput = { a: 5, b: 3, action: Action.Subtract };
    expect(simpleCalculator(_rawInput)).toBe(2);
  });

  test('should multiply two numbers', () => {
    const _rawInput = { a: 5, b: 3, action: Action.Multiply };
    expect(simpleCalculator(_rawInput)).toBe(15);
  });

  test('should divide two numbers', () => {
    const _rawInput = { a: 6, b: 3, action: Action.Divide };
    expect(simpleCalculator(_rawInput)).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const _rawInput = { a: 2, b: 3, action: Action.Exponentiate };
    expect(simpleCalculator(_rawInput)).toBe(8);
  });
  //??
  test('should return null for invalid action', () => {
    const _rawInput = { a: 6, b: 3, action: 'inv' };
    expect(simpleCalculator(_rawInput)).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const _rawInput_1 = { a: 'a', b: 3, action: Action.Add };
    const _rawInput_2 = { a: '3', b: 'b', action: Action.Add };
    expect(simpleCalculator(_rawInput_1)).toBe(null);
    expect(simpleCalculator(_rawInput_2)).toBe(null);
  });
});

//fail('Not emplemented!'); and add fail (fail)=>
// expect(true).toBe(false);
