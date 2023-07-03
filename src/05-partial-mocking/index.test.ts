// Uncomment the code below and write your tests
// import { mockOne, mockTwo, mockThree } from './index';
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  return {
    ...originalModule,
    mockOne: jest.fn().mockReturnValue(undefined),
    mockTwo: jest.fn().mockReturnValue(undefined),
    mockThree: jest.fn().mockReturnValue(undefined),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mockOne();
    mockTwo();
    mockThree();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    unmockedFunction();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
