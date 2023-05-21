const Log = require('../src/log')

describe ('Log class', () => {
  
  let testDate;

  beforeEach(() => {
    testDate = new Date('2023-06-01')
  })
  
  test('is initiated with the date, credit (or) debit and balance settings', () => {
    log = new Log(testDate, 100, 0, 500)
    logObject = {balance: 500, credit: 100, date: testDate, debit: 0}
    expect(log).toEqual(logObject)
  })
})