class Account{
  constructor(date=new Date()) {
    this.logs = []
    this.date = date
    this.balance = 0
  }

  deposit = (amount) => {
    if (amount <= 0) {
      throw new Error('Invalid input')
    }
    this.balance += amount
  }
}

module.exports = Account