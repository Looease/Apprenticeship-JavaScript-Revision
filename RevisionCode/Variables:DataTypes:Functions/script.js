// function button() {
//     alert("hello")
// }


//DOB - dates and generating age. 
// function Person(firstName, lastName, dob, origin) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//     this.origin = origin;
//   }
  
//   const personOne = new Person(
//       "Eagle",
//       "jeff", 
//       new Date(1993, 02, 01),
//       "spain"
//       );
  
//   const personTwo = new Person(
//       "matt",
//       "johns",
//       new Date(1992, 03, 07),
//       "uk"
//   );
  
//   const personThree = new Person(
//     "emma",
//     "tosr",
//     new Date(1988, 06, 21),
//     "france"
//   );
//   const personFour = new Person("jame", "tosr", new Date(1988, 06, 21), "USA");
  
//   ageOfPerson = (person) => {
//     //get current date
//     const currentDate = new Date();
//     //get the year of this date
  
//     const yearDate = currentDate.getFullYear();
  
//     const dateToNumber = person.dob.getFullYear();
  
//     const result = yearDate - dateToNumber;
  
//     return result;
//   };
  
//   console.log(ageOfPerson(personTwo));
  
//   dateFormat = (person) => {
//     console.log(person.origin);
//     if (person.origin == "USA") {
//       return person.dob.toLocaleDateString("en-us");
//     }
//     return person.dob.toLocaleDateString();
//   };
  
//   console.log(dateFormat(personThree));

// Math - generate random numbers 
// var nums = [];
// for(var i = 0; i < 10; i++){
//     nums.push(Math.random()*10);
// }
// for(number of nums){
//     console.log(Math.round(number));
//     console.log(Math.ceil(number));
//     console.log(Math.floor(number));
//     console.log(Math.abs(number));
//     console.log(Math.pow(number, 2));
//     console.log(Math.sqrt(number));
// }
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

//Create a function called welcome and welcomeObject which takes a name as a string parameter and returns the string "Hello <name>;"

// function welcome(name) {
//     return `Hello ${name}!`;
//   }
//   console.log(welcome('Alan'));
//   function welcomeObject(person) {
//     person.welcomeMessage = `Hello ${person.name}!`;
//   }
//   bob = {
//     name: 'Bob'
//   };
//   welcomeObject(bob);
//   console.log(bob.welcomeMessage);
//For
//Loop Excercises - For and While and For-of
// for(i = 1; i < 11; i++){
//     if (i == 5){continue;}
//     else if (i == 7){break;} 
//     console.log(i);
// };
//While
// let i = -1;
// while (i < 10){
//     i++;
//     if (i == 5){
//         continue;
//     }
//     else if (i == 8) {
//         break;     
//     }
//     console.log(i);
// };
 //Switch
//  var userMenuChoice = 3;

// switch (userMenuChoice) {
//   case 1:
//     openGameOptions();
//     break;
//   case 2:
//     startGame();
//     break;
//   case 3:
//     console.log("This isn't fine");
//   case 4:
//     console.log('User entered option ' + userMenuChoice);
//     console.log('And a second line of code');
//     break;
//   case 5:
//     quitGame();
//     break;
//   default:
//     console.log('Invalid user input');
//     break;
// }

