let name = "avio";
console.log("My name is " + name);
console.log("My name is " + (typeof name));


let num = 25;
console.log("This is " + num);
console.log("This is " + (typeof num));


let isBoolean = true;
console.log("Boolean " + isBoolean);
console.log("Boolean " + (typeof isBoolean));


let undef = undefined;
console.log("Undefined is   " + undef);
console.log("Undefined is   " + (typeof undef));


let mArray = [1, 5, 4, false, "Avio"];
console.log("My array is " + mArray);
console.log("Type of mArray" + (typeof mArray));


let std = {
    name: "Abhishek Das",
    roll: 54,
    section: "A"
}
console.table(std);
console.log("Std type " + (typeof std));



// Type conversion in JS:

let isNumber = 64;
console.log("This is a " + isNumber + " " + (typeof isNumber));
let newString = String(isNumber);
console.log("This is a " + newString + " " + (typeof newString));



let str_date = String(new Date());
console.log("Today is: " + str_date);
console.log("Type is " + (typeof str_date));



let date = new Date();
console.log("Today is: " + date);
console.log("Type is " + (typeof date));


let int = 5;
console.log(typeof int.toString())


let strNum = "4758";
console.log("Change to number " + strNum + " Type is " + (typeof Number(strNum)));


//to show decimal points: 

let dec = parseFloat('47.2548048845');
console.log(dec, typeof dec);
console.log(dec.toFixed(2), typeof dec);
console.log(dec.toFixed(4), typeof dec);
console.log(dec.toFixed(6), typeof dec);
console.log(dec.toFixed(10), typeof dec);
console.log(dec.toFixed(15), typeof dec);