// ` operator allows using expressions in a string.

//multiline support
let greeting = `Hello
World`;

//${expression}
console.log(`${greeting} for all`);

//tagged template strings
let firstName = 'Mucahit', lastName = 'inel';

/*
in this example:
strings is ['Hello ', ' ', '!']
values is ['Mucahit', 'inel']
*/
function upValues(strings, ...values) {
    let result = strings[0];
    values.forEach((value, index) => {
        result += value.toUpperCase() + strings[index + 1];
    });
    return result;
}

console.log(upValues `Hello ${firstName} ${lastName}!`);