Bank Tech Test
---
This is a simple application running on node that enables users to record their transactions on their account. It can print out the balance and the logs of transactions made on the account. It also checks user input for invalid inputs and does not allow withdrawal of funds that are greater than the account balance.

Installation
--
```terminal
git clone https://github.com/umutbaykan/bank-tech-test.git
cd bank-tech-test
npm install
node 
# node should be run in your root directory. if you run it in another location
# remember to amend the require path of the account file
```

To run tests
```terminal
npm run test
```

Usage
--
This application can be run via node in the terminal. Once node is initiated:
```node
const Account = require('./src/account')

// This will create an account object.
account = new Account()

// All accounts initiate with a balance of 0, but if you want to create a 
// new account with an existing balance you can pass it as a variable
// Note that accounts cannot be created with a negative balance
account = new Account(500)
```
Once your account object is created, you can invoke these methods on it:

- Deposit

Pass in the amount you want to deposit as a variable to the method. Only accepts positive numeric numbers and will throw errors otherwise.
```node
account.deposit(100)
```
- Withdraw

Pass in the amount you would like to withdraw as a variable to the method. Only accepts positive numeric numbers and will throw errors otherwise. Also, if you try to withdraw more than your existing balance, it will throw an insufficient funds error
```node
account.withdraw(100)
```
- Create Statement

Will prepare a formatted array of recorded transactions that you made. The logs will appear in reverse order, meaning that the latest transaction will appear first. Format will follow the same as the requirements outlined in the brief. Will return an empty array if there are no logs of transactions. This method can be merged into print statement if needed. 
```node
account.deposit(100)
account.withdraw(50)
account.createStatement()
// This will return:
[
  '21-05-2023 ||  || 50.00 || 50.00'
  '21-05-2023 || 100.00 ||  || 100.00'
]
```
- Print Statement

Will print the statements made on the account line by line in the format set out by the brief in the console. It will print at the beginning of the list as well. Will print only the header if there are no statements made.
```node
account.deposit(100)
account.withdraw(50)
account.printStatement()
```
On the terminal, this will print out (note that dates will change based on when you are using the program):
```terminal
date || credit || debit || balance
21-05-2023 ||  || 50.00 || 50.00
21-05-2023 || 100.00 ||  || 100.00
```
Logic
--
The application has two classes, one for account and one for logs which record transactions made on the account.

Log objects store the amount of the transaction, the balance of the account after the transaction as well as the date the transaction was made. They differ between debit and credit transactions by the order of variables that are passed into them. Log objects also reformat the logs to appear correctly on the terminal when printed.

Account class holds all the logs and account balance inside it and also contains the logic for making transactions. When account methods of deposit and withdraw are invoked, they create log objects to record transactions. Accounts can be initiated with a preexisting balance amount (has to be positive, account cannot start with debt), although these account will not record when the initial deposit was made. 

Account class can return the logs as an array or print them in the terminal for the user to see. These operations reverse the order of transactions, meaning the latest transactions appear first in both the array and console.

TODO / Alternative Methods
--
One thing that can be added further down the line is a user class which could store multiple accounts and the personal information of the user themselves. This would enable users to have multiple accounts with different logs. This was not implemented as there was no such requirement in the brief.

Printing and preparing statements can also be moved from the account class into a separate class which could handle all the user interface / printing methods. However as the tech test had a very small scope, this approach was not taken at this stage. If printing and formatting is handled by another class, another alternative would be to remove all log objects and store all transcation as JS objects inside the account.

Currently there is a strict dependency between Log and Account classes (although both have been tested independently using mocks). Account class can be modified to work with another class if required, however this approach was not required in the brief so it was not implemented.