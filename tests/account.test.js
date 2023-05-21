const Account = require('../src/account')

describe('Account class', () => {

  let testDate;

  beforeEach(() => {
    testDate = new Date('2023-06-01')
  })

  test('is initiated with an empty array of logs and a balance of 0', () => {
    const account = new Account(testDate)
    expect(account.logs).toEqual([])
    expect(account.date).toEqual(testDate)
    expect(account.balance).toEqual(0)
  })
})