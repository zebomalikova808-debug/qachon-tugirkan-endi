// Data Type 2 xil

// 1. Primitive  Data Type

// 1) String

// let firstName = "ALi";

// console.log(typeof firstName);

// 2) Number

// let son = 100;
// console.log(typeof son);

// 3) Boolean

// let isStudent = false;

// console.log(isStudent);

// 4) Null

// let ism = prompt("ismingizni kiriting");

// 5) undefined

// let a;

// console.log(a);

// 6) BigInt

// let num = 1200101340013001200n;

// 7) Symbol

// let sym = Symbol();

// 2. Non-Primitive Data Type

// const cars = [ typeof "nexia", "matiz", "tiko", "cobalt"];
// console.log (typeof cars)

// const odam = {
//   ism: "Shermat",
//   yosh: 26,
//   tuman: "Sergeli",
// };


// let a = 100;

// let b = true;

// console.log(a / b)

// let str = "salom"

// console.log(typeof Number(str))
// console.log(typeof Boolean(str))


let ism = prompt("Streang typedagi ma'lumot kiriting");
let Number = prompt("Number typedagi ma'lumot kiriting");
let True = prompt("Boolean typedagi ma'lumot kiriting");

confirm("Siz kiritgan hamma ma'lumotlar to'g'ri ekanligiga ishonchingiz komilmi?");

alert(`Siz kiritgan ${ism} so'zi string typega tegishli edi.
Siz kiritgan ${Number} soni number typega tegishli.
Siz kiritgan ${True} so'zi boolean typega tegishli.`);