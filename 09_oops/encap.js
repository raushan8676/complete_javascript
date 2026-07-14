class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getBalance());