// BankAccount Class
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  // Check balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  // List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Create instance
const myAccount = new BankAccount();

/* ---------------- REQUIRED TEST DATA ---------------- */

// At least 2 deposits
myAccount.deposit(100);
myAccount.deposit(50);

// At least 2 withdrawals
myAccount.withdraw(20);
myAccount.withdraw(10);

// Extra transaction to reach 5 total
myAccount.deposit(30);