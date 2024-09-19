// type assertion
let z: any = 10;
z as string;
// <string>z;
// <number>z;

// type casting
let x = Number("10");
console.log(x);

//non null assertion
let y: string | null = "Hello";
y!.length;
