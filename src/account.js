const Log = require('./log')

class Account{
  constructor(balance=0) {
    this.logs = []
    this.balance = balance
  }

  deposit = (amount) => {
    this.balance += this.parseInput(amount)
    this.createLog(amount, 0, this.balance)
  }

  withdraw = (amount) => {
    const filteredInput = this.parseInput(amount)
    if (filteredInput > this.balance) {
      throw new Error('Insufficient funds')
    } else {
    this.balance -= filteredInput }
    this.createLog(0, amount, this.balance)
  }

  createLog = (credit, debit, balance) => {
    const log = new Log(credit, debit, balance)
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