class Log {
  constructor(date, credit, debit, balance) {
    this.date = date
    this.credit = credit
    this.debit = debit
    this.balance = balance
  }

  print = () => {
    return `${this.formattedDate()} || ${this.credit} || ${this.debit} || ${this.balance}`
  }

  formattedDate = () => {
    const isoDate = this.date.toISOString().slice(0,10)
    return `${isoDate.slice(8)}-${isoDate.slice(5,7)}-${isoDate.slice(0,4)}`
  }
}

module.exports = Log