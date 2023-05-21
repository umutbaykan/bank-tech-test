const Log = require('./log')

class Account{
  constructor(date=new Date(), balance=0) {
    this.logs = []
    this.date = date
    this.balance = balance
  }

  deposit = (amount) => {
    this.balance += this.parseInput(amount)
    this.createLog()
  }

  createLog = (date, credit, debit, balance) => {
    const log = new Log(date, credit, debit, balance)
    this.logs.push(log)
  }

  parseInput = (input) => {
    if (input <= 0 || Array.isArray(input) || typeof input === 'boolean' || isNaN(input)) {
      throw new Error('Invalid input')
    }
    return input
  }
}

module.exports = Account