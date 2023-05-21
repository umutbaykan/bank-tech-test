const Account = require('../src/account')

describe('Account class', () => {

  let testDate;
  let account;

  beforeEach(() => {
    testDate = new Date('2023-06-01')
    account = new Account(testDate)
  })

  test('is initiated with an empty array of logs and a balance of 0', () => {
    const newAccount = new Account(testDate)
    expect(newAccount.logs).toEqual([])
    expect(newAccount.date).toEqual(testDate)
    expect(newAccount.balance).toEqual(0)
  })

  describe('deposit method', () => {
    test('increases balance by deposit amount', () => {
      account.deposit(500)
      expect(account.balance).toEqual(500)
    });

    test('throws error if user tries to deposit an amount <= 0', () => {
      expect(() => account.deposit(-1)).toThrow('Invalid input')
    });

    test('throws error if user tries to input non-numeric value', () => {
      expect(() => account.deposit("somevalue")).toThrow('Invalid input')
    })
  })

  describe('parse input', () => {
    test('throws error if user tries to deposit an amount <= 0', () => {
      expect(() => account.parseInput(-1)).toThrow('Invalid input')
    });

    test('throws error if user tries to input non-numeric value', () => {
      expect(() => account.parseInput("somevalue")).toThrow('Invalid input')
    })
  })
})