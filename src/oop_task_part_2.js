// 1
class BankAccount {
  #balance
  #owner

  constructor (owner) {
    this.#balance = 0
    this.#owner = owner
  }

  #validateTransaction (transaction) {
    if (transaction > this.#balance) {
      return 'Transaction is bigger than balance in account!'
    } else {
      return 'Operation is succesfull!'
    }
  }

  geValidateTransaction (transaction) {
    return this.#validateTransaction(transaction)
  }

  deposit (amount_of_money) {
    this.#balance += amount_of_money
    return this.#balance
  }

  withdraw (amount_of_money) {
    this.#balance -= amount_of_money
    return this.#balance
  }

  getBalance () {
    return `${this.#balance}`
  }
}

const account = new BankAccount('Иван Петров')
console.log(account)
console.log(account.getBalance()) // 0
account.deposit(1000)
console.log(account.getBalance()) // 1000
account.withdraw(500)
console.log(account.getBalance())
console.log(account.validateTransaction(20000)) // 500

// 2
class Animal {
  constructor (sound) {
    this.sound = sound
  }

  makeSound () {
    return this.sound
  }
};

class AnimalFactory {
  createAnimal (type) {
    if (type === 'cat') { return new Animal('Meow') }
    if (type === 'dog') { return new Animal('Woof!') }
  }
};

const factory = new AnimalFactory()
const cat = factory.createAnimal('cat')
const dog = factory.createAnimal('dog')
console.log(cat.makeSound()) // Мяу
console.log(dog.makeSound()) // Гав
