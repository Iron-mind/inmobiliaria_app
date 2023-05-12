const username:string= 'iron-mind'


//muy común usar clases en angular

class Person {
  age:number;
  lastName?:string;

  constructor(age:number, lastName?:string){
    this.age = age;
    this.lastName = lastName;
  }
}

const person = new Person(30, 'Iron');
//without lastName
const person2 = new Person(30);

//class without asignation
class Person3 {
  constructor(public age:number, private key:number, public lastName?:string){}

  getkey(){
    return this.key;
  }
}

const person3 = new Person3(30, 2.7182, 'Mind');
