const Log = require('./log')

class Account{
  constructor(balance=0) {
    this.logs = []
    this.date = date
    this.balance = balance
  }

  deposit = (amount) => {
    this.balance += this.parseInput(amount)
    this.createLog(this.date, amount, 0, this.balance)
  }

  withdraw = (amount) => {
    const filteredInput = this.parseInput(amount)
    if (filteredInput > this.balance) {
      throw new Error('Insufficient funds')
    } else {
    this.balance -= filteredInput }
    this.createLog(this.date, 0, amount, this.balance)
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