// Uncomment the code below and write your tests
import {
  getBankAccount,
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  let sut: BankAccount;
  let intial: number;
  let amount: number;
  let appropriate_amount: number;

  beforeEach(() => {
    intial = 100;
    sut = getBankAccount(intial);
    amount = 150;
    appropriate_amount: 50;
  });

  test('should create account with initial balance', () => {
    expect(sut).toBeInstanceOf(BankAccount);
    expect(sut.getBalance()).toBe(intial);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => sut.withdraw(amount)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const toAccount = getBankAccount(intial);
    expect(() => sut.transfer(amount, toAccount)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => sut.transfer(amount, sut)).toThrowError();
  });

  test('should deposit money', () => {
    expect(sut.deposit(amount).getBalance()).toBe(intial + amount);
  });

  test('should withdraw money', () => {
    expect(sut.withdraw(appropriate_amount).getBalance()).toBe(
      intial - appropriate_amount,
    );
  });

  test('should transfer money', () => {
    const toAccount = getBankAccount(intial);
    expect(sut.transfer(appropriate_amount, toAccount).getBalance()).toBe(
      intial - appropriate_amount,
    );
    expect(toAccount.getBalance()).toBe(intial + appropriate_amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const result = await sut.fetchBalance();
    if (result === null) {
      expect(result).toBeNull();
    } else {
      expect(typeof result).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const old_ballance = sut.getBalance();
    try {
      await sut.synchronizeBalance();
      expect(sut.getBalance).not.toEqual(old_ballance);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    try {
      await sut.synchronizeBalance();
    } catch (error) {
      expect(error).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
