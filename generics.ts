// generics function

function func<T>(a: T) {
  console.log(a);
}

func<number>(10);
func<string>("hello");
func<boolean>(true);
func(20);

// generics with interface
interface IUser<T> {
  name: string;
  age: number;
  rollno: T;
}

function func2(a: IUser<number>) {
  console.log(a);
}

func2({ name: "John", age: 20, rollno: 101 });

// generics with class

class bottlemaker<T> {
  constructor(public bottle: T) {}
}

const b1 = new bottlemaker<number>(10);
const b2 = new bottlemaker<string>("hello");
// console.log(b1);
// console.log(b2);

//function return type is generic so we cannot assign any other type to it we have to assign the same type as the return type or convert that type to generic type
function func3<T>(a: T, b: string): T {
  return b as T;
  //return <T>b // both are same
  //return b; // cannot assign string to generic type T
}

func3<string>("10", "hello");
