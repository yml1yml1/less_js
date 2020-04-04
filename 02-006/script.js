'use struct';

var number = 5;
var string = "Привет";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log("rrr"*9);

let something;
console.log(something);

let person = {
    name: "Юра",
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person["name"]);

let arr = ['plum.pmg','orange.jpeg','apple.bmp'];
console.log(arr[2]);
console.log(arr[0]);


const obj1 = {
    name: 'alex'
};

const arr1 = [1,3,5,6];

let ans = +prompt('Есть ли вам 18?','Да');
console.log(ans);
console.log(typeof(ans));
