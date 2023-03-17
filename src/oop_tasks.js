// 1
class Book {
  constructor (title, author, publishYear) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
  }
  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.publishYear}`;
  };
}

const bookData = new Book ('The Catcher in the Rye', 'J.D.Salinger', 1951)
const info = bookData.getInfo();
console.log(info);

// 2
class Car {
  constructor (vehicleMake, model, yearOfManufacture, color) {
    this.vehicleMake = vehicleMake;
    this.modelOfCar = model;
    this.yearOfManufacture = yearOfManufacture;
    this.colorOfCar = color;
  }
  start () {
    return `The car is now running`;
  }
  stop () {
    return `The car is now stopped`;
  }
  drive (amountOfMiles) {
    return `The car has driven ${amountOfMiles} miles. Total mileage is now ${amountOfMiles}.`;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2010, 'silver');
 let myCarMethodCall = myCar.start();
 console.log(myCarMethodCall);
 myCarMethodCall = myCar.drive(100);
 console.log(myCarMethodCall);
 myCarMethodCall = myCar.stop();
 console.log(myCarMethodCall);

 // 3
class Animal {
  constructor (name, kind) {
    this.name = name;
    this.kind= kind;
  }
  getInfo() {
    return `${this.name} is a ${this.kind}`;
  }
}

class Dog extends Animal {
  constructor(name, kind) {
    super(name, kind);
  }
  getInfo() {
    return super.getInfo()
  }
  bark() {
    return 'Woof';
  }
}

class Cat extends Animal {
  constructor (name, kind) {
    super(name, kind);
  }
  getInfo(){
    return super.getInfo();
  }
  meow(){
    return 'Meow!';
  }
}

const myDog = new Dog('Fido', 'dog');
let animalInfo = myDog.getInfo();
console.log(animalInfo);
animalInfo = myDog.bark();
console.log(animalInfo);

const myCat = new Cat('Morty', 'cat');
animalInfo = myCat.getInfo();
console.log(animalInfo);
animalInfo = myCat.meow();
console.log(animalInfo);

// 4
class User {
  constructor (name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getInfo() {
    return `${this.name} is ${this.age} years old and their email adress is ${this.email}`;
  }
}

class Student extends User {
  constructor(name, age, email, major) {
    super(name, age, email);
    this.major = major;
  }
  getInfo(){
    return super.getInfo();
  }
  getMajor(){
    return `${this.name} is majoiring in ${this.major}`;
  }
}

class Teacher extends User {
  constructor(name, age, email, subject) {
    super(name, age, email);
    this.subject = subject;
  }
  getInfo(){
    super.getInfo();
  }
  getSubject(){
    return `${this.name} teaches ${this.subject}`;
  }
}

const userInfo =  new User('John Doe', 20, 'blablabla@gmail.com', 'Computer Science');
let callUserMethods = userInfo.getInfo();
console.log(callUserMethods);

const myStudent = new Student('John Doe', 20, 'blablabla@gmail.com', 'Computer Science');
callUserMethods = myStudent.getMajor();
console.log(callUserMethods);


const myTeacher = new Teacher('Proffesor Jhonson', 45, 'blablabla@gmail.com', 'English language');
callUserMethods = myTeacher.getSubject();
console.log(callUserMethods);

// 5
class Phone {
  constructor(model, brand, price, color, isTurnedOn) {
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.isTurnedOn = isTurnedOn;
  }
  turnOn() {
    return `The phone now is turn on!`;
  }
  turnOff() {
    return `The phone now is turn off!`;
  }
}

class Smartphone extends Phone {
  constructor(model, brand, price, color, apps = [], isTurnedOn) {
    super(model, brand, price, color, isTurnedOn);
    this.apps = apps;
  }
  turnOn() {
    return  super.turnOn();
  }
  turnOff(){
    return super.turnOff();
  }
  openApp() {
    if(this.isTurnedOn === true && this.apps.length) {
        return `Please wait. We open ${this.apps}`
    }
    else{
      return `Please turn on smartphone!`
    }
  }
}

const mySmartphone = new Smartphone('Iphone 13', 'Apple', 799, 'white', ['Camera'], false);
let resultOfCallMethod = mySmartphone.turnOn();
console.log(resultOfCallMethod);
resultOfCallMethod = mySmartphone.turnOff();
console.log(resultOfCallMethod);

resultOfCallMethod = mySmartphone.openApp();
console.log(resultOfCallMethod);

//6
class ToDoList {
  constructor() {
    this.tasksList = []
  }

  addTask({ title, body }) {
    const newTask = this.createTask({ title, body })
    this.tasksList.push(newTask)
  }

  createTask({ title, body }) {
    const id = this.tasksList.length + 1
    return { id, title, body };
  }
  deleteTask(id) {
    const index = this.tasksList.findIndex((task) => task.id === id)
    if (index === -1) return this.tasksList;
    this.tasksList.splice(index, 1);
    return this.tasksList;
  }
  getTasks() {
    return this.tasksList
  }
}

class PersonalToDoList extends ToDoList {
  static priorities = {
    Low: 'Low',
    Mid: 'Middle',
    High: 'High'
  }
  constructor() {
    super()
  }
  addTask({ title, body, priority = PersonalToDoList.priorities.Low, deadline }) {
    const basicTask = super.createTask({ title, body })
    this.tasksList.push({ ...basicTask, priority, deadline })
    return this.tasksList
  }
  setTaskPriority(id, priority) {
    const index = this.tasksList.findIndex((task) => task.id === id)
    if (index === -1) return this.tasksList
    this.tasksList[index]['priority'] = priority
  }
  setTaskDeadline(id, deadline) {
    const index = this.tasksList.findIndex((task) => task.id === id)
    if (index === -1) return this.tasksList
    this.tasksList[index]['deadline'] = deadline
  }
}

const personalList = new PersonalToDoList()
personalList.addTask({ title: 'Some', priority: PersonalToDoList.priorities.High })