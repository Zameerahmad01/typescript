// type guards and typescript utility types
// type narrowing
//typeof
function add(arg: number | string) {
  if (typeof arg === "number") {
    return arg.toFixed(2);
  } else if (typeof arg === "string") {
    return arg.toUpperCase();
  } else throw new Error("Invalid argument");
}

console.log(add(10));
console.log(add("hello"));

//instanceof
class dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log("woof");
  }
}

class cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  meow() {
    console.log("meow");
  }
}

function getAnimal(animal: dog | cat) {
  if (animal instanceof dog) {
    animal.bark();
  } else if (animal instanceof cat) {
    animal.meow();
  }
}

getAnimal(new dog("buddy"));
getAnimal(new cat("whiskers"));
