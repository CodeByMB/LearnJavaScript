// ------------------------------------------------------------------//
//------------------------Fundamentals part 2------------------------//
// ------------------------------------------------------------------//

    //------------------------//
    // Activating strict mode //
    //------------------------//
    //What does it do: It makes sure we can write JavaScript securely.
    //Strict mode makes it easier to avoid accidental errors/bugs in our code
    //It needs to be the first line of code in the file.
    //1. Strict mode forbids us to use certain things.
    //2. It will show visible errors where normally js would fail silently.

    //Example: In this example it will not show an error when 'use strict' is turned off.
    //But also the code will not show anything.
    //When it's turned on it will actually say that there is a referenceError.
    //Note the hasDriverLicense on row 21 is forgetting the S from the official variable.
    'use strict';

    // let hasDriversLicense = false;
    // const passTest = true;

    // if(passTest) hasDriverLicense = true;
    // if(hasDriversLicense) console.log(`I can drive :D`)
    
    //strict mode prevents using the var names underneath since they are reserved.
    // const interface = `Audio`;
    // const private = 534;

    //------------------------//
    //        Functions       //
    //------------------------//
    //Functions are code that we can keep using over and over again.
    //They can also receive and return data to the application.
    
    // function logger(name, age){
    //     console.log(`My name is ${name}, and I'm ${age} years old.`);
    // }

    // // //calling, running, invoking the function
    // logger("Maikel", 33);
    // logger("Kees", 55);

    // //funciton nameOfFunc    Parameters
    // function fruitProcessor(apples, oranges) {
    //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    //     return juice;
    // }

    // //Because of the return in the function we will have to store what's returned
    // //In a variable so we can use that data elsewhere.
    // //Without storing it in the variable it will only return how many apples and oranges.
    // const appleJuice = fruitProcessor(5, 0);
    // console.log(appleJuice);

    // const appleOrangeJuice = fruitProcessor(2, 4);
    // console.log(appleOrangeJuice);

    //Function Declaration
    // function calcAge1(birthYear) {
    //     return 2025 - birthYear;
    // }

    // const age1 = calcAge1(1992);
    // console.log(age1);

    // //Function Expressions: (AKA Anonymous function)
    // //You will store the function in a variable.
    // const calcAge2 = function (birthYear){
    //     return 2025 - birthYear;
    // }

    // const age2 = calcAge2(1992);
    // console.log(age2);

    // //We can call funtion declarations before they are defined.
    // //You can't do that with Function expressions.

    // //What to use ? It's a personal preference. We will discorver that later ;)

    // //------------------------//
    // //     Arrow Functions    //
    // //------------------------//

    // const calcAge3 = birthYear => 2025 - birthYear;
    // const age3 = calcAge3(1992);
    // console.log(age3);

    // const yearsUntilRetirement = (birthYear, firstName) => {
    //     const age = 2025 - birthYear;
    //     const retirement = 68 - age;
    //     //return retirement;
    //     return `${firstName} retires in ${retirement} years.`
    // }

    // console.log(yearsUntilRetirement(1992, "Maikel"));

    //------------------------//
    //    Calling Functions   //
    //------------------------//
    //How to call functions inside other function.

    // function cutFruitPieces(fruit) {
    //     return fruit * 4;
    // }
    
    // function fruitProcessor(apples, oranges) {
    //     const applePieces = cutFruitPieces(apples);
    //     const orangePieces = cutFruitPieces(oranges);

    //     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    //     return juice;
    // }

    // console.log(fruitProcessor(2, 3));



    //------------------------//
    //       Challenge 1      //
    //------------------------//

    //Home made
    // function calcAvarage(scores) {
    //     let sum = 0;
    //     for (let score of scores){
    //         sum += score;
    //     }
    //     return sum / scores.length;
        
    // }

    // let scoreDolphins = [44, 23, 71]
    // let scoreKoalas = [65, 54, 49]

    // const avarageDolphins = calcAvarage(scoreDolphins);
    // const avarageKoalas = calcAvarage(scoreKoalas);

    // function checkWinner(avarageDolphins, avarageKoalas){
    //     if(avarageDolphins > avarageKoalas){
    //         console.log(`Dolphins win the trophy`)
    //     } else if (avarageKoalas > avarageDolphins){
    //         console.log(`Koalas win the trophy`)
    //     } else {
    //         console.log(`Both win`)
    //     }
    // }

    // checkWinner(avarageDolphins, avarageKoalas);
    
    // //Jonas code:
    // const calcAverage = (a, b, c) => (a + b + c) / 3;
    // console.log(calcAverage(3, 4, 5));
    
    // let scoreDolphins = calcAverage(44, 23, 71);
    // let scoreKoalas = calcAverage(65, 54, 49);
    // console.log(scoreDolphins, scoreKoalas);
    
    // const checkWinner = function (avgDolphins, avgKoalas) {
    // if (avgDolphins >= 2 * avgKoalas) {
    //     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    // } else if (avgKoalas >= 2 * avgDolphins) {
    //     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    // } else {
    //     console.log('No team wins...');
    // }
    // };
    
    // checkWinner(scoreDolphins, scoreKoalas);

    //------------------------//
    //         Arrays         //
    //------------------------//

    //Use Arrays for structured data.

    // //To much work put it in an array!
    // const friend1 = 'Michael';
    // const friend2 = 'Steven';
    // const friend3 = 'Peter';

    // //Arrays:
    // //More common to use the brackets. then example 2
    // const friends = ['Michael', 'Steven', 'Peter'];
    // console.log(friends);

    // //Example 2:
    // //const years = new Array(1991, 1984, 2008, 2020);

    // console.log(friends[0]);

    // //get number of amount in array
    // console.log(friends.length);

    // console.log(friends[friends.length - 1]);

    // //You can modify a const variable like this example underneath.
    // friends[2] = 'Jay'
    // console.log(friends);

    // //This will not work because we can't reassign a const variable.
    // //friends = ['Bob', 'Alice']; 

    // const d = new Date();
    // let year = d.getFullYear();
    // const firstName = 'Maikel';
    // const lastName = 'Beernink';
    // const birthYear = 1992;
    // const age = year - birthYear;
    // const job = 'Full stack developer';


    // const maikel = [firstName, lastName, age, job, friends];

    // console.log(maikel)

    // //exercise:
    // const calcAge = function (birthYear) {
    //     return year - birthYear;
    // }

    // const years = [1990, 1967, 2002, 2010, 2018];
    
    // const age1 = calcAge(years[0]);
    // const age2 = calcAge(years[1]);
    // const age3 = calcAge(years[years.length - 1]);
    // console.log(age1, age2, age3);

    // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
    // console.log(ages);
    // const friends = ['Michael', 'Steven', 'Peter'];

    // //Add elements
    // const newLength = friends.push('Jay');

    // console.log(friends);
    // console.log(newLength);

    // friends.unshift('John');
    // console.log(friends);

    // //remove elements
    // //Pop removes the last element in the array.
    // const popped = friends.pop();
    // console.log(popped);
    // console.log(friends);

    // //remove first element from the array:
    // friends.shift();
    // console.log(friends);

    // //In which position is the element in the array
    // console.log(friends.indexOf('Steven'));

    // //Return true if the element is in the array or else false
    // console.log(friends.includes('Steven'));
    // console.log(friends.includes('Henk'));

    // if(friends.includes('Peter')){
    //     console.log('You have a friend called peter');
    // }

    //------------------------//
    //       Challenge 2      //
    //------------------------//

    //My code
    // const bills = [125, 555, 44];
    // function calcTip(bill){
    //     if (bill >= 50 && bill <= 300) {
    //         return bill * 0.15;
    //     } else {
    //         return bill * 0.20;
    //     }
    // }
    // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    // console.log(tips);
    // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    // console.log(total);

    //Jonas code:
    // const calcTip = function(bill) {
    //     return bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.20;
    // }

    // const bills = [125, 555, 44];
    // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    // console.log(bills, tips);
    // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    // console.log(totals);

    //------------------------//
    //         Objects        //
    //------------------------//

    //Key: value pair,
    //Use object for more unstructed data.

    // const maikel = {
    //     firstName: 'Maikel',
    //     lastName: 'Beernink',
    //     age: 2025 - 1992,
    //     job: 'Full stack developer',
    //     friends: ['Michael', 'Peter', 'Steven']
    // };

    //Dot vs Bracket Notation

    // const maikel = {
    //     firstName: 'Maikel',
    //     lastName: 'Beernink',
    //     age: 2025 - 1992,
    //     job: 'Full stack developer',
    //     friends: ['Michael', 'Peter', 'Steven', 'Nita']
    // };
    
    //The DOT notation:
    // console.log(maikel.lastName);

    //The Bracket notation:
    // console.log(maikel['lastName']);

    // const nameKey = 'Name';

    // console.log(maikel['first' + nameKey]);
    // console.log(maikel[`last${nameKey}`]);

    //when to use:
    //Dot: Always unless ...
    //Bracket: Only when you need something like below:
    //const interestedIn = prompt(`What do you want to know about Maikel? Choost between firstName, lastName, age, job and friends.`);
    
    // if(maikel[interestedIn]) {
    //     console.log(maikel[interestedIn]);
    // } else {
    //     console.log(`Dont have that information!`)
    // }

    // maikel.location = 'Rotterdam';
    // maikel['twitter'] = '@CodeByMB';
    // console.log(maikel);

    //challenge:
    // "maikel has 3 friends and his best friend is called Michael"

    // console.log(maikel.firstName, `has ${maikel.friends.length} friends, and his best friend is called `, maikel.friends[0]);

    //Object methods

    // const maikel = {
    //     firstName: 'Maikel',
    //     lastName: 'Beernink',
    //     birthYear: 1992,
    //     job: 'Full stack developer',
    //     friends: ['Michael', 'Peter', 'Steven', 'Nita'],
    //     hasDriversLicense: true,

        //V1
        // calcAge: function(birthYear){
        //     return 2025 - birthYear;
        // }

        //V2
        // calcAge: function(){
        //     console.log('This is this: ', this);
        //     return 2025 - this.birthYear;
        // }

        //V3
    //     calcAge: function(){
    //         this.age = 2025 - this.birthYear;
    //         return this.age;
    //     },

    //     getSummary: function(){
    //         return (`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`)
    //     }
    // };

    // console.log(maikel.calcAge());
    // console.log(maikel.age);
    // console.log(maikel.age);

    //challenge
    // "Maikel is a 33-years old programmer. and he has a drivers license."
    // console.log(maikel.getSummary());


    //------------------------//
    //       Challenge 3      //
    //------------------------//


    //My code:
    // const mark = {
    //     fullName: 'Mark Miller',
    //     mass: 78, // kg
    //     height: 1.69, // meters

    //     calcBMI: function() {
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     }
    // };

    // const john = {
    //     fullName: 'John Smith',
    //     mass: 92, // kg
    //     height: 1.95, // meters

    //     calcBMI: function() {
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     }
    // };

    // mark.calcBMI(); // Calculates Mark's BMI
    // john.calcBMI(); // Calculates John's BMI

    // Debugging: Check the calculated values (optional, for your console)
    // console.log(`Mark's calculated BMI: ${mark.bmi}`); // Should be ~27.3
    // console.log(`John's calculated BMI: ${john.bmi}`); // Should be ~24.2

    // if (mark.bmi > john.bmi) {
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
    // } else if (john.bmi > mark.bmi) { // This condition will be false with the given data
    //     console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
    // } else { // This condition will also be false
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is equal to ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
    // }

    
    //Jonas code:
    // const mark = {
    //     fullName: 'Mark Miller',
    //     mass: 78, //kg
    //     height: 1.69, //Meter

    //     calcBMI: function() {
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     }
    // };
    // const john = {
    //     fullName: 'John Smith',
    //     mass: 92, //kg
    //     height: 1.95, //Meter

    //     calcBMI: function() {
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     }
    // };

    // mark.calcBMI();
    // john.calcBMI();
    // console.log(mark.bmi)
    // console.log(john.bmi)

    // if(mark.bmi > john.bmi) {
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
    // } else if (john.bmi > mark.bmi){
    //     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
    // }

    //------------------------//
    //      The for loop      //
    //------------------------//

    // console.log('Lifting weights repetition 1');
    // console.log('Lifting weights repetition 2');
    // console.log('Lifting weights repetition 3');
    // console.log('Lifting weights repetition 4');
    // console.log('Lifting weights repetition 5');

    // for (let rep = 1; rep <= 10; rep++){
    //     console.log(`Lifting weights repitition ${rep}`);
    // }

    //Looping through an array
    // const maikel = [
    //     'Maikel',
    //     'Beernink',
    //     2025 - 1992,
    //     'Full stack developer',
    //     ['Michael', 'Peter', 'Steven']
    // ];

    // const types = [];

    // for(let i = 0; i < maikel.length; i++){
    //     console.log(maikel[i], typeof maikel[i]);
    //     //types[i] = typeof maikel[i];
    //     types.push(typeof maikel[i]);
    // }

    // console.log(types);

    // const years = [1991, 2007, 1969, 2020];
    // let ages = [];

    // For ages.push(2025 - years[i]); the years[i] part is that it picks every individual element from the array.
    //If you only use years it would pick the whole array which is in this case not a number! NaN
    // for(let i = 0; i < years.length; i++){
    //     ages.push(2025 - years[i]);
    // }

    // console.log(ages);

    //continue and break
    //with continue you can exit the current itteration
    // for(let i = 0; i < maikel.length; i++){
    //     //This will only log strings to the console.
    //     if(typeof maikel[i] !== 'string') continue;
    //     console.log(maikel[i], typeof maikel[i]);
    // }

    //Break
    // for(let i = 0; i < maikel.length; i++){
    //This will only log strings to the console.
    //     if(typeof maikel[i] === 'number') break;

    //     console.log(maikel[i], typeof maikel[i]);
    // }

    //Loop backwards
    // const maikel = [
    //     'Maikel',
    //     'Beernink',
    //     2025 - 1992,
    //     'Full stack developer',
    //     ['Michael', 'Peter', 'Steven']
    // ];

    // for(let i = maikel.length - 1; i >= 0; i--){
    //     console.log(maikel[i]); 
    // }

    // //A loop within a loop (LOOP CEPTION)
    // for (let exercise = 1; exercise <= 3; exercise++){
    //     console.log(`-------- Starting exercise ${exercise} --------`)

    //     for(let rep = 1; rep <= 5; rep++){
    //         console.log(`Exercise ${exercise} Lifting weights rep ${rep}`);
    //     }
    // }

    //------------------------//
    //     The while loop     //
    //------------------------//

    // let rep = 1;
    // while (rep <= 10) {
    //     console.log(`Lifting wights repetition ${rep}`);
    //     rep++;
    // }

    // let dice = Math.trunc(Math.random() * 6) + 1;

    // while(dice !== 6){
    //     console.log(`Rolling: ${dice}`)
    //     dice = Math.trunc(Math.random() * 6) + 1;
    //     if (dice === 6) console.log(`Loop is about the end..`)
    // }

    //Challange 3
    // const calcTip = function (bill) {
    //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    // }

    // /* Write your code below. Good luck! 🙂 */
    // let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
    // let tips = []
    // let totals = []

    // for (let bill = 0; bill <  bills.length; bill++ ) {
    //     calcTip(bill);

    // }

    // console.log(totals)

    // const calcTip = function (bill) {
    //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    // }

    // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52] ;
    // const tips = [];
    // const totals = [];

    // for (let i = 0; i < bills.length; i++){
    //     const tip = calcTip(bills[i]);
    //     tips.push(tip);
    //     totals.push(tip + bills[i]);
    // }

    // console.log()