
class BankAccount{
    #balance
    constructor(account_no,account_holder,balance)
    {
        
        this.account_no = account_no,
        this.account_holder = account_holder,
        this.#balance = balance
    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(newBalance)
    {
        this.#balance = newBalance
        return this.#balance
    }
    deposit(deposit_amount){
        const newBalance = this.#balance+deposit_amount;
        this.#balance = newBalance;
    }
    withdraw(withdraw_amount){
        const newBalance = this.#balance - withdraw_amount;
        this.#balance = newBalance;
    }
    displayBalance(){
        console.log("Account Balance : ",this.#balance)
    }
}

class SavingAccount extends BankAccount{
  
    constructor(account_no,account_holder,balance)
    {
        super(account_no,account_holder,balance)
        
    }

    addInterest(){
        const balance = this.getBalance()
        const afterintertestBalance = balance+(0.04 * balance)

        this.setBalance(afterintertestBalance) 
    }
    withdraw(withdraw_amount){
        if(withdraw_amount>=500)
        {
            withdraw_amount = withdraw_amount + 50;
        }
        const balance = this.getBalance()
        const newBalance = balance - withdraw_amount;
        this.setBalance(newBalance);
    }
}


const bankAccountHolder1 = new BankAccount(100001245,"Eshan Sharma",2000);
const savingAccountHolder1 = new SavingAccount(100001245,"Eshan Sharma",2000);

console.log(savingAccountHolder1);
console.log("Starting..............................................")
savingAccountHolder1.displayBalance()
console.log("\n")
savingAccountHolder1.withdraw(200)
console.log("After first withdraw")
savingAccountHolder1.displayBalance()
console.log("\n")
savingAccountHolder1.deposit(500);
console.log("After first Deposit")
savingAccountHolder1.displayBalance()
console.log("\n")
savingAccountHolder1.withdraw(600)
console.log("After first withdraw with Penalty of 50 rupees on withdrawing more than 500")
savingAccountHolder1.displayBalance()
console.log("\n")
savingAccountHolder1.addInterest()
console.log("After interest addition")
savingAccountHolder1.displayBalance()


console.log(savingAccountHolder1);
console.log("Ending..................................................")
savingAccountHolder1.displayBalance()

console.log("Declared Balance as a private variable",savingAccountHolder1.balance)

console.log("\n")
console.log("//////////////////////////////////////////////////////")
console.log("\n")

console.log(bankAccountHolder1);
console.log("Starting..............................................")
bankAccountHolder1.displayBalance()
console.log("\n")
bankAccountHolder1.withdraw(200)
console.log("After first withdraw")
bankAccountHolder1.displayBalance()
console.log("\n")
bankAccountHolder1.deposit(500);
console.log("After first Deposit")
bankAccountHolder1.displayBalance()
console.log("\n")
bankAccountHolder1.withdraw(600)
console.log("After  withdraw No penalty as it uses its own withdraw function")
bankAccountHolder1.displayBalance()
console.log("\n")

console.log(bankAccountHolder1);
console.log("Ending..................................................")
bankAccountHolder1.displayBalance()

console.log("Declared Balance as a private variable",bankAccountHolder1.balance)
