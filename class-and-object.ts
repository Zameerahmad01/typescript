class person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}

const person1 = new person("John", 20, "john@gmail.com");
const person2 = new person("Jane", 21, "jane@gmail.com");

// console.log(person1.getDetails());
// console.log(person2.getDetails());

class bottleMaker {
  constructor(
    public name: string,
    public color: string,
    public price?: number
  ) {
    this.name = name + " bottle";
  }

  getDetails() {
    return `name is ${this.name}, color is ${this.color}, price is ${this.price}`;
  }
}

const bottle1 = new bottleMaker("Coca Cola", "Black", 100);
const bottle2 = new bottleMaker("Pepsi", "White");

// console.log(bottle1);
// console.log(bottle2);

// console.log(bottle1.getDetails());
// console.log(bottle2.getDetails());

// private, protected, public
// private: only accessible within the class
// protected: accessible within the class and subclasses
// public: accessible everywhere

class bottleMake {
  constructor(public name: string, public price: number) {}
}
class metalBottleMaker extends bottleMake {
  brand: string;
  constructor(name: string, price: number, brand: string) {
    super(name, price);
    this.brand = brand;
  }

  getDetails() {
    return `name is ${this.name}, price is ${this.price}, brand is ${this.brand}`;
  }
}

const p1 = new metalBottleMaker("Coca Cola", 100, "Coke");

// console.log(p1.getDetails());

// getter and setter
// getter: to get the value
// setter: to set the value
class men {
  _name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this.age = age;
    this.email = email;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const m1 = new men("John", 20, "john@gmail.com");
const m2 = new men("Jane", 21, "jane@gmail.com");

m1.name = "Doe";
// console.log(m1.name);
// console.log(m2.name);

// static keyword

class shery {
  static Name: string = "shery";
  static getName() {
    return this.Name;
  }
}

console.log(shery.Name);
console.log(shery.getName());
