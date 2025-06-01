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

    //To much work put it in an array!
    const friend1 = 'Michael';
    const friend2 = 'Steven';
    const friend3 = 'Peter';

    //Arrays:
    //More common to use the brackets. then example 2
    const friends = ['Michael', 'Steven', 'Peter'];
    console.log(friends);

    //Example 2:
    const years = new Array(1991, 1984, 2008, 2020);

    console.log(friends[0]);

    //get number of amount in array
    console.log(friends.length);

    console.log(friends[friends.length - 1]);

    friends[2] = 'Jay'