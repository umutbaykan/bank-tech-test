const Log = require("../src/log");

describe("Log class", () => {
  let testDate;

  beforeEach(() => {
    testDate = new Date("2023-06-01");
  });

  test("is initiated with the date, credit (or) debit and balance settings", () => {
    const log = new Log(100, 0, 500, testDate);
    expect(log.credit).toEqual(100);
    expect(log.balance).toEqual(500);
    expect(log.debit).toEqual(0);
    expect(log.date).toEqual(testDate);
  });

  test("prints the recorded credit log in the right format", () => {
    const log = new Log(100, 0, 500, testDate);
    expect(log.print()).toEqual("01-06-2023 || 100.00 ||  || 500.00");
  });

  test("prints the recorded withdrawal log in the right format", () => {
    const log = new Log(0, 100, 500, testDate);
    expect(log.print()).toEqual("01-06-2023 ||  || 100.00 || 500.00");
  });

  test("rounds the value if the input is a float with more than 2 digits after comma", () => {
    const log = new Log(100.589, 0, 512.123, testDate);
    expect(log.print()).toEqual("01-06-2023 || 100.59 ||  || 512.12");
  });
});
