const Log = require("./log");

class Account {
  constructor(balance = 0) {
    this.logs = [];
    if (balance === 0) {
      this.balance = 0;
    } else {
      this.balance = this.parseInput(balance);
    }
  }

  deposit = (amount) => {
    this.balance += this.parseInput(amount);
    this.createLog(amount, 0, this.balance);
  };

  withdraw = (amount) => {
    const filteredInput = this.parseInput(amount);
    if (filteredInput > this.balance) {
      throw new Error("Insufficient funds");
    } else {
      this.balance -= filteredInput;
    }
    this.createLog(0, amount, this.balance);
  };

  createLog = (credit, debit, balance) => {
    const log = new Log(credit, debit, balance);
    this.logs.push(log);
  };

  createStatement = () => {
    const printOutput = ["date || credit || debit || balance"];
    this.logs.forEach((log) => printOutput.push(log.print()));
    return printOutput;
  };

  printStatement = () => {
    console.log(this.createStatement().forEach((line) => console.log(line)));
  };

  parseInput = (input) => {
    if (
      input <= 0 ||
      Array.isArray(input) ||
      typeof input === "boolean" ||
      isNaN(input)
    ) {
      throw new Error("Invalid input");
    }
    return input;
  };
}

module.exports = Account;
