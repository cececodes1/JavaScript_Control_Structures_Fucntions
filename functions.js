// Task 1
function deposit(amount, balance) {
     // check is deposit is greater than 0
    if (amount > 0) {
     // calculate new balance by adding deposit to current balance
        let newBalance = balance + amount;
        console.log('Deposited $${amount}')
    }
}

// Task 2
function withdraw(amount, balance) {
    // Check if withdrawal amount is greater than 0 and less than or equal to balance

    if (amount > 0 && amount <= balance) {
    // Calculate new balance by subtracting withdrawal amount from current balance
        let newBalance = balance - amount;
        console.log(`Withdrew $${amount}. New balance: $${newBalance}`);
        return newBalance;
    } else {
        console.log("Insufficient funds. Please try again.");
        return balance;
    }
}

// Task 3: displays current balance

function checkBalance(balance) {
    console.log(`Current balance: $${balance}`);
  }
