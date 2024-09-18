function abcd(): string {
  console.log("hello my name is function");
  return "hello my name is function";
}

// console.log(abcd());

// function with callback

function abc(value: string, callback: (arg: string) => void) {
  console.log(value);
  callback("hello my name is callback");
}

// abc("hello", (arg: string) => {
//   console.log(arg);
// });

// optional parameters

function func1(a: number, b?: number) {
  console.log(a, b);
}

// func1(10);
// func1(10, 20);

// default parameters

function func2(a: number, b: string = "not define") {
  console.log(a, b);
}

// func2(10);
// func2(10, "define");

// rest parameters

function func3(a: number, ...b: string[]) {
  console.log(a, b);
  console.log(b[2]);
  return b.forEach((value) => {
    console.log(value + "rest operator");
  });
}

// func3(10, "hello", "world", "this", "is", "rest", "parameters");

// function overloading
// Overload signatures
function func4(x: string): void;
function func4(x: number): void;
function func4(x: string, y: number): void;

// Single function implementation
function func4(x: string | number, y?: number): void {
  if (typeof x === "string" && typeof y === "number") {
    console.log(`String: ${x}, Number: ${y}`);
  } else if (typeof x === "string") {
    console.log(`Single string: ${x}`);
  } else if (typeof x === "number") {
    console.log(`Single number: ${x}`);
  }
}

// func4("hello", 10);
// func4(10);
// func4("hello");
