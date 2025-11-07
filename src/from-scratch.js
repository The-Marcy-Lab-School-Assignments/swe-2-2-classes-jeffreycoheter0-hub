class Rectangle {
  constructor(length, width) { // constructor is invoked when 
    this.length = length;      // 'new Class ()' syntax is used
    this.width = width
  }
  // METHODS
  getArea() {
    return this.length * this.width
  }

  getPerimeter() {
    return (this.length * 2) + (this.width * 2)
  }

  isSquare() {
    return this.length === this.width ? true : false;
  }
}

class Vehicle {
  passengers = []; // Can only be accessed in an instance inside of 
  // the class, not outside

  constructor(type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    color ? this.color = color : this.color = 'black';
  };

  paint(color) {
    return this.color = color
  };

  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) {
      return - 1
    }
    this.passengers.push(passenger);
    return this.passengers.length
  };
};

class PasswordManager {
  #password

  constructor(password) {
    this.#password = password;
  };

  checkPassword(attempt) {
    return attempt === this.#password ?
      true : false;
  };

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword
      return true
    }
    return false
  }
}

class TodoList {
  #toDoItems = [];

  constructor(title) {
    this.title = title;
  }

  addItem(description) {
    this.#toDoItems.push(description)
    return this.#toDoItems.length
  }

  removeItem(description) {
    if (this.#toDoItems.includes(description)) {
      this.#toDoItems.splice(this.#toDoItems.indexOf(description), 1)
      return description
    } else {
      return null
    }
  }

  getItems() {
    return [... this.#toDoItems]
  }
}

class BankAccount {
  #balance;
  static #totalBalance = 0;

  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    balance ? this.#balance = balance : this.#balance = 0;
    BankAccount.#totalBalance += this.#balance
  }

  deposit(amount) {
    this.#balance += amount
    BankAccount.#totalBalance += amount
    return `Your balance is $${this.#balance.toFixed(2)}`
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return `You do not have enough funds.`
    }
    this.#balance -= amount
    BankAccount.#totalBalance -= amount
    return `Your balance is $${this.#balance.toFixed(2)}.`
  }

  static getTotalHoldings() {
    return BankAccount.#totalBalance
  }

  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
