const Account = require("../src/account");

describe("Account class", () => {
  let today;

  beforeAll(() => {
    today = new Date().toISOString().slice(0, 10);
    formattedDay = `${today.slice(8)}-${today.slice(5, 7)}-${today.slice(
      0,
      4
    )}`;
  });

  test("logs the deposit log into the array of logs", () => {
    const account = new Account();
    account.deposit(500);
    expect(account.logs[0].balance).toEqual(500);
    expect(account.logs[0].credit).toEqual(500);
    expect(account.logs[0].debit).toEqual(0);
    expect(account.logs[0].date.toISOString().slice(0, 10)).toEqual(today);
  });

  test("logs the withdraw log into the array of logs", () => {
    const account = new Account(500);
    account.withdraw(300);
    expect(account.logs[0].balance).toEqual(200);
    expect(account.logs[0].credit).toEqual(0);
    expect(account.logs[0].debit).toEqual(300);
    expect(account.logs[0].date.toISOString().slice(0, 10)).toEqual(today);
  });

  test("logs multiple transactions on the same account", () => {
    const account = new Account();
    account.deposit(250);
    account.withdraw(200);
    expect(account.logs.length).toEqual(2);
    expect(account.balance).toEqual(50);
  });

  test("prints the logs in the right format", () => {
    const account = new Account();
    account.deposit(250);
    account.withdraw(200);
    expect(account.createStatement()).toEqual([
      "date || credit || debit || balance",
      "21-05-2023 || 250.00 ||  || 250.00",
      "21-05-2023 ||  || 200.00 || 50.00",
    ]);
  });

  test("logs the statements on the terminal", () => {
    const account = new Account();
    account.deposit(250);
    account.withdraw(200);

    const consoleLogs = [];
    const originalConsoleLog = console.log;
    console.log = (message) => {
      consoleLogs.push(message);
    };

    account.printStatement();
    expect(consoleLogs).toEqual([
      "date || credit || debit || balance",
      "21-05-2023 || 250.00 ||  || 250.00",
      "21-05-2023 ||  || 200.00 || 50.00",
    ]);
    console.log = originalConsoleLog;
  });
});
