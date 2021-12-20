
// --------Email Pattern-----------

let gmail = 'sairajaftab769@gmail.com';
let gPattern = /^[a-z0-9-_]*@[a-z0-9-_]*\.[a-z]{2,6}$/;
console.log(gPattern.test(gmail));


// -----------User Name Pattern-----------

let userName = 'sairaj-aftab1234';
let unPattern = /^[a-z0-9-_]{3,25}$/;
console.log(unPattern.test(userName));


// ------Bangladeshi Phone Number-----------

let number = '01881591572';
let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
console.log(pattern.test(number));


// -----------Password Pattern-------------


let pass = 'sffd89$@./12@$';
let paWpa = /[a-zA-Z0-9@$\.-_+/]{6,}/;
console.log(paWpa.test(pass));


// ------------Zip Code Pattern-------------


let zipCode = '4701';
let zipPattern = /^[0-9]{4}$/;
console.log(zipPattern.test(zipCode));