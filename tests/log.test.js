const Log = require('../src/log')

describe ('Log class', () => {
  
  let testDate;

  beforeEach(() => {
    testDate = new Date('2023-06-01')
  })
  
  test('is initiated with the date, credit (or) debit and balance settings', () => {
    log = new Log(testDate, 100, 0, 500)
    expect(log.credit).toEqual(100)
    expect(log.debit).toEqual(0)
    expect(log.balance).toEqual(500)
    expect(log.date).toEqual(testDate)
  })

  test('prints the recorded log in the right format', () => {
    log = new Log(testDate, 100, 0, 500)
    expect(log.print()).toEqual("01-06-2023 || 100 || 0 || 500")
  })
})