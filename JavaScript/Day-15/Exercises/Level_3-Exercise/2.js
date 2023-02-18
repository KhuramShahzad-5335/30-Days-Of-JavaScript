//=====================             2.
//  Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


class PersonAccount{
    constructor(
        firstName,
        lastName,
        incomes,
        expenses,
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        incomes = new Map();
        expenses = new Map();
    }

    // methods are defined here.
    totalIncome(){
        //code goes here
    }

    totalExpenses(){
        //code goes here
    }

    addIncome(){
        //code goes here
    }

    addExpenses(){
        //code goes here
    }

    accountInfo(){
        //code goes here
    }

    accountbalance(){
        //code goes here
    }
}

const personInfo1 = new PersonAccount('Khuram', 'Shahzad');

console.log(personInfo1);

// There is huge amount of code so i just generalized the structure and retured the result you can do rest yourself :` (





// this is the implementation by the ai
class PersonAccount2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = new Map();
      this.expenses = new Map();
    }
  
    // Add income to the incomes set
    addIncome(amount, description) {
      this.incomes.set(amount, description);
    }
  
    // Add expense to the expenses set
    addExpense(amount, description) {
      this.expenses.set(amount, description);
    }
  
    // Calculate total income
    get totalIncome() {
      let total = 0;
      for (let income of this.incomes.keys()) {
        total += income;
      }
      return total;
    }
  
    // Calculate total expense
    get totalExpense() {
      let total = 0;
      for (let expense of this.expenses.keys()) {
        total += expense;
      }
      return total;
    }
  
    // Calculate account balance
    get accountBalance() {
      return this.totalIncome - this.totalExpense;
    }
  
    // Return account information
    get accountInfo() {
      return `${this.firstName} ${this.lastName}'s Account\n` +
             `Total Income: ${this.totalIncome}\n` +
             `Total Expense: ${this.totalExpense}\n` +
             `Account Balance: ${this.accountBalance}`;
    }
  }

const example = new PersonAccount2('Khuram', 'Shahzad');

console.log(example);

console.log(example.addExpense(5000, 'dont know'));
console.log(example.accountInfo);
console.log(example.totalExpense);