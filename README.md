There is a user class which has an account. Users can have multiple accounts

An account has log objects

Every log has a date, method of operation and a remaining balance after

Once a transaction happens, the account creates a log object and stores it within

log class has the printing responsibilities

log.print
Jason.account.printStatements

Log object
--
log.date
log.credit
log.debit
log.balance
log.print

Account object
--
constructor(date); 
balance = 0
logs = []
date = date

header: date || credit || debit || balance

this.account.logs.print --> prints accounts

methods 
--
account.debit
account.credit
account.balance
account.print 

user objects
--
username 
account 