class Log {
  constructor(date, credit, debit, balance) {
    this.date = date
    this.credit = credit
    this.debit = debit
    this.balance = balance
  }

  print = () => {
    return `${this.formattedDate()} || `+
    `${this.credit !== 0 ? this.credit.toFixed(2) : ""} || `+
    `${this.debit !== 0 ? this.debit.toFixed(2) : ""} || `+
    `${this.balance.toFixed(2)}`
  }

  formattedDate = () => {
    const isoDate = this.date.toISOString().slice(0,10)
    return `${isoDate.slice(8)}-${isoDate.slice(5,7)}-${isoDate.slice(0,4)}`
  }
}

module.exports = Log