// Task 1: Deposit Function
function deposit(amount, balance) {
    // Check if deposit amount is greater than 0
    if (amount > 0) {
        // Calculate new balance by adding deposit to current balance
        let newBalance = balance + amount;
        console.log(`Deposited $${amount}. New balance: $${newBalance}`);
        return newBalance;  // Returns the new balance
    } else {
        console.log("Deposit amount must be greater than 0.");
        return balance;  // Returns the original balance if deposit is invalid
    }
}

// Task 2: Withdraw Function
function withdraw(amount, balance) {
    // Check if the withdrawal amount is greater than 0 and less than or equal to balance
    if (amount > 0 && amount <= balance) {
        // Calculate the new balance by subtracting withdrawal from current balance
        let newBalance = balance - amount;
        console.log(`Withdrew $${amount}. New balance: $${newBalance}`);
        return newBalance;
    } else if (amount > balance) {
        console.log("Insufficient funds. Please try again.");
        return balance;
    } 
}

// Task 3: Check Balance Function
function checkBalance(balance) {
    console.log(`Current balance: $${balance}`);
}


checkBalance(balance);      
