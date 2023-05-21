class Account{
  constructor(date=new Date()) {
    this.logs = []
    this.date = date
    this.balance = 0
  }
}

module.exports = Account