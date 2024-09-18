let a: number = 20;
let b: string = "hello";
let c: boolean = true;

console.log(a);

// Tuple
let arr: [string, number] = ["hello", 10];
console.log(arr);

// Enum
enum userRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
  SUPER_ADMIN = "SUPER_ADMIN",
}

console.log(userRole.ADMIN);

// interfaces and type alias

interface User {
  name: string;
  age: number;
  role: userRole;
  gender?: string;
}

function getUser(obj: User) {
  console.log(obj);
}

getUser({
  name: "Jane",
  age: 25,
  role: userRole.USER,
});
getUser({
  name: "Jon",
  age: 20,
  role: userRole.USER,
  gender: "female",
});

// interface extends

interface user {
  name: string;
  email: string;
  password: string;
}

interface Admin extends user {
  admin: boolean;
}

const admin = (obj: Admin) => {
  console.log(obj);
};

admin({
  name: "Doe",
  email: "doe@gmail.com",
  password: "654321",
  admin: false,
});

// type alias

type value = number | string | boolean;

let d: value = 10;
let e: value = "hello";
let f: value = true;

function getValues(params: value) {
  console.log(params);
}

getValues(d);
getValues(e);
getValues(f);

// intersection type

type UserType = {
  name: string;
  email: string;
};

type AdminType = UserType & {
  getDetails(user: string): void;
};

function abc(a: AdminType) {
  console.log(a.getDetails("Doe"));
}
