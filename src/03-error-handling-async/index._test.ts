// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const test_data = 'test';
    const result = await resolveValue(test_data);
    expect(result).toBe(test_data);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    function expectError() {
      throwError('ups');
    }
    expect(expectError).toThrowError('ups');
  });

  test('should throw error with default message if message is not provided', () => {
    function expectError() {
      throwError();
    }
    expect(expectError).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
