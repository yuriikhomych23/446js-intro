const greetings = 'Hello JavaScript';
alert(greetings);

let userName;
userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = parseFloat(prompt('Entry your age'));
alert('Your age is ' + userAge);

const nextAge = addOne(userAge); //відноситься до функції
alert('Next year you will be ' + nextAge);

if (Number.isNaN(userAge)) {
    alert ('Wrong age');
} else if (userAge >= 18) {
    alert('You are adult');
} else {
    alert('You are too young');
}

function addOne(input) {
    const result = input + 1;
    return result;
}