const Account = require('../src/account')

describe('Account class', () => {

  let account;

  beforeEach(() => {
    account = new Account()
  })

  test('is initiated with an empty array of logs and a balance of 0', () => {
    const newAccount = new Account()
    expect(newAccount.logs).toEqual([])
    expect(newAccount.balance).toEqual(0)
  })

  describe('deposit method', () => {
    test('increases balance by deposit amount', () => {
      account.deposit(500)
      expect(account.balance).toEqual(500)
    });

    test('accepts float data type for input', () => {
      account.deposit(500.12)
      expect(account.balance).toEqual(500.12)
    });

    test('throws error if user tries to deposit an amount <= 0', () => {
      expect(() => account.deposit(-1)).toThrow('Invalid input')
    });

    test('throws error if user tries to input non-numeric value', () => {
      expect(() => account.deposit("somevalue")).toThrow('Invalid input')
      expect(() => account.deposit(true)).toThrow('Invalid input')
      expect(() => account.deposit([100])).toThrow('Invalid input')
      expect(() => account.deposit({})).toThrow('Invalid input')
    })

    test('adds a log object to the logs once operation is complete', () => {
      account.deposit(100)
      expect(account.logs.length).toEqual(1)
    })
  })

  describe('withdrawal method', () => {
    test('decreases balance by deposit amount', () => {
      const newAccount = new Account(500)
      newAccount.withdraw(100)
      expect(newAccount.balance).toEqual(400)
    });

    test('decreases balance by deposit amount with float inputs', () => {
      const newAccount = new Account(500.51)
      newAccount.withdraw(100.24)
      expect(newAccount.balance).toEqual(400.27)
    });

    test('throws an insufficent funds error if user does not have enough money', () => {
      const newAccount = new Account(500)
      expect(() => newAccount.withdraw(600)).toThrow('Insufficient funds')
    })

    test('throws error if user tries to input non-numeric value', () => {
      const newAccount = new Account(500)
      expect(() => newAccount.withdraw("somevalue")).toThrow('Invalid input')
      expect(() => newAccount.withdraw(true)).toThrow('Invalid input')
      expect(() => newAccount.withdraw([100])).toThrow('Invalid input')
      expect(() => newAccount.withdraw({})).toThrow('Invalid input')
    })

    test('adds a log object to the logs once operation is complete', () => {
      const newAccount = new Account(500)
      newAccount.withdraw(100)
      expect(newAccount.logs.length).toEqual(1)
    })
  });

  describe('deposit and withdrawal methods in sequence', () => {
    test('reflect the accurate balance of the account after transactions', () => {
      const newAccount = new Account()
      newAccount.deposit(100.25)
      newAccount.withdraw(60.45)
      expect(newAccount.balance).toEqual(39.8)
    })

    test('logs the correct number of transactions in account logs array', () => {
      const newAccount = new Account()
      newAccount.deposit(100.25)
      newAccount.withdraw(60.45)
      expect(newAccount.logs.length).toEqual(2)
    })
  })

  describe('parse input', () => {
    test('throws error if user tries to deposit an amount <= 0', () => {
      expect(() => account.parseInput(-1)).toThrow('Invalid input')
    });

    test('throws error if user tries to input string value', () => {
      expect(() => account.parseInput("somevalue")).toThrow('Invalid input')
    })

    test('throws error if user tries to input boolean value', () => {
      expect(() => account.parseInput(true)).toThrow('Invalid input')
    })

    test('throws error if user tries to input array value', () => {
      expect(() => account.parseInput([100])).toThrow('Invalid input')
    })

    test('throws error if user tries to input object value', () => {
      expect(() => account.parseInput({})).toThrow('Invalid input')
    })
  })

  describe('create log method', () => {
    test('creates a log object and pushes into the account logs array', () => {
      account.createLog(10, 0 , 20)
      account.createLog(10, 0 , 20)
      expect(account.logs.length).toEqual(2)
    })
  })
})