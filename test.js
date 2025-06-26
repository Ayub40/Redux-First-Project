// 22-1 Basics of Functional Programming.
// Pure function
// Example --> 1
// const add = (a, b) => a + b;

// console.log(add(0, 1));
// console.log(add(1, 1));
// console.log(add(2, 1));

// Example --> 2
// Impure function
// let total = 0;
// const addTotal = (amount) => (total = total + amount);

// console.log(addTotal(4));

// Example --> 3

// const updateDate = () => {
//     new Date();
// }

// const randomNumber = (amount) => {
//     return amount + Math.random();
// };

// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));

// ===========================================================
// ===========================================================
// ===========================================================

//  22-2 Understanding mutation and ways to avoid it.
import { produce } from "immer";

const employee = {
    name: "Mir",
    address: { country: "Bangladesh", city: "Dhaka" },
};

// ------------------------------------
// const employee2 = employee;
// employee2.name = "Mezba";
// console.log(employee == employee2);

// const employee2 = {
//     ...employee,
//     name: "Mezba",
//     address: { ...employee.address, city: "Chittagong" },
// };

//  eta kora jabe na
// employee2.address.city = "Chittagong";     
// ------------------------------------


// Using Immar
const employee2 = produce(employee, (draft) => {
    draft.name = "Mezba";
    draft.address.city = "Chittagong";
});


// console.log(employee == employee2);
console.log(employee);
console.log(employee2);





