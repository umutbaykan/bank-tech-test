const Log = require('./log')

class Account{
  constructor(date=new Date()) {
    this.logs = []
    this.date = date
    this.balance = 0
  }

  deposit = (amount) => {
    this.balance += this.parseInput(amount)
  }

  parseInput = (input) => {
    if (input <= 0 || isNaN(input)) {
      throw new Error('Invalid input')
    }
    return input
  }
}

module.exports = Account