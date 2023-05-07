class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hour: number): string {
    return `${this.name} will sleep for ${hour}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Mizba", 29, "Barishal");
student1.makeSleep(20);

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} classes.`;
  }
}

const teacher1 = new Teacher("Mamma mia", 29, "Dhaka", "Master");
console.log(teacher1.takeClasses(1.3));
