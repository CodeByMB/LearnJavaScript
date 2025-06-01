// ------------------------------------------------------------------//
//------------------------Fundamentals part 1------------------------//
// ------------------------------------------------------------------//

// Values and Variables
    // Variables are always written in camelCase
    // a variable can not start with a number.
    // No special chars like '&' sign
    // When a constant var can be written in capital letters. like PI

    var variableName = 'var variable'; //Mutable
    // Explain var: We should avoid using var completely.

    let variableName = 'let variable'; //Mutable
    // Explain let: The standard for creating variables.

    const variableName = 'const variable'; //inmuttable
    // Explain const: A const var should never and can never be changed.


// Data types
    // numbers
    // strings
    // booleans
    // bigint

//Basic operators
    const ageMaikel = 2025 - 1992;
    console.log(ageMaikel);


// Challange 1:
//Write your code below. Good luck! 🙂 

    let massMark = 78;
    let heightMark = 1.84;
    let massJohn = 92;
    let heightJohn = 1.88;

    let resultMark = massMark / (heightMark * heightMark);
    let resultJohn = massJohn / (heightJohn * heightJohn);

    console.log(Math.round(resultMark));
    console.log(Math.round(resultJohn));

    if (resultMark > 25){
        console.log('You fat Mark')
    } else {
        console.log('healthy boooyyyyy Mark')
    }

    if (resultJohn > 25){
        console.log('You fat Johny buy')
    } else {
        console.log('Healthy johny boyyy')
    }

//Strings and template literals
    const firstName = 'Maikel'
    const job = 'Developer'
    const birthYear = 1992;
    const year = 2025;

    const maikel = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
    console.log(maikel)

    // This is a template literal, this makes it easier to add your variables within the text using the `` instead of ''.
    // Then to make use of a variable you have to type ${varName}
    const maikelNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;
    console.log(maikelNew);

    //TIP: You can use `` standard when writing strings, in case you need to add a variable later.

    //Multi line string OLD:
    console.log('String with \n\
        multiple \n\
        lines');

    //Multi line string NEW:
    console.log(`String with
        multiple
        lines.`);

// if / else statements
        //
        const age = 19;
        const isOldEnough = age >= 18;

        if (isOldEnough){
            console.log(`You're old enough 🚙`);
        } else {
            const yearsLeft = 18 - age;
            console.log(`You're not old enough  👶🏻 just ${yearsLeft} left tp go.`);
        }

    // Icons can be trigger by using command + control + space 🍎


//Challange 2:
    const massMark = 78;
    const heightMark = 1.69;
    const massJohn = 92;
    const heightJohn = 1.95;

    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    //console.log(BMIMark, BMIJohn);

    /* Write your code below. Good luck! 🙂 */
    if(BMIMark > BMIJohn){
        console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
    } else {
        console.log(`John's BMI ${BMIJohn} is higher than Mark's!`);
    }

//Type Conversion and Coercion
    //Converting strings to numbers: (Number(inputYear))
    //Converting numbers to string: (String(33))
    const inputYear = `1992`;
    console.log(Number(inputYear));
    console.log(inputYear + 18);

    //Coercion the + sign in the string will make the numbers between automatically a string
    console.log('I am ' + 33 + ' years old.');
    //Coercion the - / * signs in the string will make the strings numbers.
    console.log('23' - '10' * 3 / 2);//output will be 10

    //tricky one:
    let n = '1' + 1; //Make it string 11
    n = n - 1; // Makes it 11 int - 1
    console.log(n) //output: 10

//Truthy Falsy values
// 5 Falsy values: 0, '', undefined, null, NaN
// truthy values:

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean('Maikel'));

const money = 0;
if(money > 50) {
    console.log(`Don't spend it all.`);
} else if (money < 50){
    console.log(`You should get a job`);
} else {
    console.log(`Bye`)
}

let yourName = prompt('Your name :')


// CHALLANGE 3:
/* Write your code below. Good luck! 🙂 */

let scoreDolphins = [96, 108, 89];
let sumDolphins = 0;

for (let score of scoreDolphins) {
  sumDolphins = sumDolphins + score;
}

const averageDolphins = sumDolphins / scoreDolphins.length;

let scoreKoalas = [88, 91, 110];
let sumKoalas = 0;

for (let score of scoreKoalas) {
    sumKoalas = sumKoalas + score;
}

const avarageKoalas = sumKoalas / scoreKoalas.length;

if(averageDolphins > avarageKoalas){
    console.log(`Dolphins win the trophy`);
} else if (avarageKoalas > averageDolphins) {
    console.log(`Koalas win the trophy`);
} else {
    console.log(`Both win the trophy`);
}


// Switch statement:
const day = `monday`;

switch(day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`write code examples`);
        break;
    case `friday`:
        console.log(`write more coce cause its fun`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Learn now coding`);
        break;
    default:
        console.log(`You got more days in a week?`);
}

// ------------------------------------------------------------------//
//------------------------Fundamentals part 2------------------------//
// ------------------------------------------------------------------//

    //Activating Strict mode
    //