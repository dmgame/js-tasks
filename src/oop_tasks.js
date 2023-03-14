// 1
class Book {
  constructor(title, author, bookPublishtYear){
    this.title = title;
    this.author = author;
    this.bookPublishtYear = bookPublishtYear;
  }
  getBookInfo() {
    return `${this.title} by ${this.author}, published in ${this.bookPublishtYear}`;
  }
}

const currentBook = new Book('The Catcher in the Rye', 'J.D.Salinger', 1951);
console.log(currentBook);
let info = currentBook.getBookInfo();
console.log(info);

// 2
class Car {
    constructor(vehicleMake, modelOfCar, yearOfManufacture, colorOfCar) {
        this.vehicleMake = vehicleMake;
        this.modelOfCar = modelOfCar;
        this.yearOfManufacture = yearOfManufacture;
        this.colorOfCar = colorOfCar;
    }
    static giveNotificationOfMove() {
        return `The car is now running`;
    }
    static giveNotificationOfStop() {
        return `The car is now stopped`;
    }
    static showAmountOfMiles(amountOfMiles) {
      return `The car has driven ${amountOfMiles} miles. Total mileage is now ${amountOfMiles}.`;
    }
}

const myCar = ('Toyota', 'Corolla', 2010, 'silver');
 let myCarStaticMethodCall = Car.giveNotificationOfMove();
 console.log(myCarStaticMethodCall);
 myCarStaticMethodCall = Car.showAmountOfMiles(100);
 console.log(myCarStaticMethodCall);
 myCarStaticMethodCall = Car.giveNotificationOfStop();
 console.log(myCarStaticMethodCall);

 // 3
class Animal {
    constructor(nameOfAnimal, kindOfAnimal) {
        this.nameOfAnimal = nameOfAnimal;
        this.kindOfAnimal = kindOfAnimal;
    }
    getNameInfo(){
        return `${this.nameOfAnimal} is a ${this.kindOfAnimal}`;
    }
}

class Dog extends Animal {
    constructor(name, kind, soundOfAnimal) {
        super(name, kind);
        this.soundOfAnimal = soundOfAnimal;
    }
    getNameInfo() {
        return super.getNameInfo()
    }
    getSoundOfDog() {
        return `${this.soundOfAnimal}!`;
    }
}

class Cat extends Animal {
    constructor(name, kind, soundOfAnimal){
        super(name, kind, soundOfAnimal);
        this.soundOfAnimal = soundOfAnimal;
    }
    getNameInfo(){
        return super.getNameInfo();
    }
    getSoundOfCat(){
        return `${this.soundOfAnimal}!`;
    }
}

const myDog = new Dog('Fido', 'dog','Woof');
let animalInfo = myDog.getNameInfo();
console.log(animalInfo);
animalInfo = myDog.getSoundOfDog();
console.log(animalInfo);

const myCat = new Cat('Morty', 'cat','Meow');
animalInfo = myCat.getNameInfo();
console.log(animalInfo);
animalInfo = myCat.getSoundOfCat();
console.log(animalInfo);

// 4
class User {
    constructor(userName, userAge, userEmail) {
        this.userName = userName;
        this.userAge = userAge;
        this.userEmail = userEmail;
    }
    getInfoAboutUser(){
        return `${this.userName} is ${this.userAge} years old and their email adress is ${this.userEmail}`;
    }
}

class Student extends User {
    constructor(userName, userAge, userEmail, userMajor) {
        super(userName, userAge, userEmail);
        this.userMajor = userMajor;
    }
    getInfoAboutUser(){
        return super.getInfoAboutUser();
    }
    getMajorOfStudent(){
        return `${this.userName} is majoiring in ${this.userMajor}`;
    }
}

class Teacher extends User {
    constructor(userName, userAge, userEmail, userSubject) {
        super(userName, userAge, userEmail);
        this.userSubject = userSubject;
    }
    getInfoAboutUser(){
        super.getInfoAboutUser();
    }
    getInfoAboutSubject(){
        return `${this.userName} teaches ${this.userSubject}`;
    }
}

const userInfo =  new User('John Doe', 20, 'blablabla@gmail.com', 'Computer Science');
let callUserMethods = userInfo.getInfoAboutUser();
console.log(callUserMethods);

const myStudent = new Student('John Doe', 20, 'blablabla@gmail.com', 'Computer Science');
callUserMethods = myStudent.getMajorOfStudent();
console.log(callUserMethods);


const myTeacher = new Teacher('Proffesor Jhonson', 45, 'blablabla@gmail.com', 'English language');
callUserMethods = myTeacher.getInfoAboutSubject();
console.log(callUserMethods);

// 5
class Phone {
    constructor(modelOfPhone, brendOfPhone, phonePrice, phoneColor, isTurnedOff) {
        this.modelOfPhone = modelOfPhone;
        this.brendOfPhone = brendOfPhone;
        this.phonePrice = phonePrice;
        this.phoneColor = phoneColor;
        this.isTurnedOff = isTurnedOff;
    }
    getInfoAboutTurnOn() {
        return `The phone now is turn on!`;
    }
    getInfoAboutTurnOff() {
        if(this.isTurnedOff){
            return `Please turn on the phone first`
        }
        else {
            return `Smartphone is still works`;
        }
    }
}

class Smartphone extends Phone {
    constructor(modelOfPhone, brendOfPhone, phonePrice, phoneColor, isTurnedOff, apps = []) {
        super(modelOfPhone, brendOfPhone, phonePrice, phoneColor, isTurnedOff);
        this.apps = apps;
    }
    getInfoAboutTurnOn() {
        return  super.getInfoAboutTurnOn();
    }
    getInfoAboutTurnOff(){
        return super.getInfoAboutTurnOff();
    }
    openApp() {
        if(this.isTurnedOff){
            return sgetInfoAboutTurnOff();
        }
        if(this.apps.length) {
            return `Please wait. We open ${this.apps}`
        }
    }
}

const mySmartphone = new Smartphone('Iphone 13', 'Apple', 799, 'white', true, ['Camera']);
let resultOfCallMethod = mySmartphone.getInfoAboutTurnOn();
console.log(resultOfCallMethod);
resultOfCallMethod = mySmartphone.getInfoAboutTurnOff();
console.log(resultOfCallMethod);
resultOfCallMethod = mySmartphone.openApp();
console.log(resultOfCallMethod);

//6

// let toDoList = {};

let arrayOfAllTasks = [];

let index_of_task;

 

class ToDo {
  constructor(taskTitle, dueDateOfTask, taskCategory, taskId) {
    this.taskTitle = taskTitle;
    this.dueDateOfTask = dueDateOfTask;
    this.taskCategory = taskCategory;
    this.taskId = taskId;
  }
  ['addTask'](){
     arrayOfAllTasks.push(
        {
          '_id': this.taskId,
          'title':this.taskTitle,
          'due data':this.dueDateOfTask,
          'category': this.taskCategory,
        })
        return  arrayOfAllTasks;
   }
  ['deleteTask'](id_of_task){
    arrayOfAllTasks.forEach((elem, index, arr) => {
       if (id_of_task === elem._id){
            arr.splice(index, 1)
          }
          return arrayOfAllTasks
          })                                                                                                        
        }
   ['getTaskList'](currentTaskList){
    return console.log(currentTaskList);
   }
}

let proba = new ToDo('to do dish', '23/05/01', 'culinary', '45467');
proba.addTask();
proba = new ToDo('to do homework', '23/05/07', 'culinary', '45469');
proba.addTask()
proba = new ToDo('to do js task', '23/05/09', 'js', '45470');
proba.addTask()
proba.getTaskList(arrayOfAllTasks)
proba.deleteTask('45470');
proba.getTaskList(arrayOfAllTasks)

class PersonalToDoList extends ToDo {
  constructor(taskTitle, dueDateOfTask, taskCategory, taskId, taskPriority, taskDeadline) {
    super(taskTitle, dueDateOfTask, taskCategory, taskId);
    this.taskPriority = taskPriority;
    this.taskDeadline = taskDeadline;
  }
  set priorSet(prior){
    this.taskPriority = prior
  }
}

let personalToDoList = new PersonalToDoList('to do nothing', '23/05/09', 'culinary', '45470', 'hight', '24/05/09');
personalToDoList.addTask()
personalToDoList.brand()
personalToDoList.getTaskList(arrayOfAllTasks)