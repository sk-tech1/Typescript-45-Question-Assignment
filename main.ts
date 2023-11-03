// Personal Message
let rehanBangash: string = "Eric";
console.log(`Hello ${rehanBangash}, would you like to learn some Python today?`);

// Name Cases
let nameString: string = "John Doe";
console.log(nameString.toLowerCase());
console.log(nameString.toUpperCase());

// Famous Quote
let quote: string = 'A person who never made a mistake never tried anything new.';
let author: string = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// Famous Quote 2
let famousPerson: string = 'Abraham Lincoln';
let message: string = `${famousPerson} once said, "Whatever you are, be a good one."`;
console.log(message);

// Stripping Names
let personNameWithSpaces: string = "\t\n John Doe \t\n";
console.log(personNameWithSpaces.trim());

// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Adding Comments
// Program 1
// This program greets a person whose name is stored in a variable.
let friendName: string = "Alice";
console.log(`Hello, ${friendName}!`);

// Program 2
// This program performs some basic arithmetic operations and prints the results.
console.log(4 + 4); // addition
console.log(10 - 2); // subtraction

// Names
let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));

// Greetings
names.forEach(name => console.log(`Hello, ${name}!`));

// Your Own Array
let transportationModes: string[] = ["car", "motorcycle", "bicycle"];
transportationModes.forEach(mode => console.log(`I would like to own a ${mode}.`));

// Guest List
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// Changing Guest List
let cannotCome = guestList.pop();
console.log(`${cannotCome} can't make it to dinner.`);
guestList.push("Charles Darwin");
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// More Guests
console.log("I found a bigger dinner table!");
guestList.unshift("Nikola Tesla");
guestList.splice(2, 0, "Galileo Galilei");
guestList.push("Ada Lovelace");
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// Shrinking Guest List
console.log("I'm sorry, but I can only invite two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
guestList = [];
console.log(guestList);

// Seeing the World
let placesToVisit: string[] = ["Paris", "Tokyo", "Bali", "New York", "Rome"];
console.log(placesToVisit.slice().sort());
console.log(placesToVisit.slice().sort().reverse());
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.sort();
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log(placesToVisit);

// Dinner Guests
console.log(`I am inviting ${guestList.length} people to dinner.`);

// Arrays and Objects
let mountains: string[] = ['Everest', 'K2', 'Kangchenjunga'];
console.log(mountains);

// Conditional Tests
let car: string = 'subaru';
console.log(car == 'subaru');

// More Conditional Tests
// Equality and Inequality with strings
console.log('apple' === 'apple');
console.log("'banana' !== 'orange'");

// Lower case function
console.log('apple'.toLowerCase() === 'apple');

// Numerical tests
console.log(5 > 3);
console.log(10 < 5);
console.log(8 >= 8);
console.log(4 <= 2);

// And and or operators
console.log(true && false);
console.log(true || false);

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana"));

// Test whether an item is not in an array
console.log(!fruits.includes("orange"));

// Alien Colors #1
let alienColor: string = 'green';
if (alienColor == 'green') {
    console.log('You just earned 5 points!');
}

// Alien Colors #2
if (alienColor == 'green') {
    console.log('You just earned 5 points for shooting the alien!');
} else {
    console.log('You just earned 10 points!');
}

// Alien Colors #3
if (alienColor == 'green') {
    console.log('You just earned 5 points!');
} else if (alienColor == 'yellow') {
    console.log('You just earned 10 points!');
} else if (alienColor == 'red') {
    console.log('You just earned 15 points!');
}

// Stages of Life
let age: number = 25;
if (age < 2) {
    console.log('The person is a baby.');
} else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
} else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
} else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
} else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
} else {
    console.log('The person is an elder.');
}

// Favorite Fruit
let favoriteFruits: string[] = ["apple", "banana", "cherry"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}

// Hello Admin
let usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David"];
usernames.forEach(username => {
    if (username.toLowerCase() == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Checking Usernames
let currentUsers: string[] = ["John", "Jane", "DOE", "admin", "admin1"];
let newUsers: string[] = ["john", "alice", "jane", "susan", "mike"];

for (let newUser of newUsers) {
    let isUsed = currentUsers.find(user => user.toLowerCase() === newUser.toLowerCase());
    if (isUsed) {
        console.log(`Sorry, ${newUser} will need to enter a new username.`);
    } else {
        console.log(`The username ${newUser} is available.`);
    }
}

// Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

// Pizzas
let pizzaNames: string[] = ["Pepperoni", "Margherita", "Hawaiian"];
for (let pizza of pizzaNames) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Animals
let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("All of these animals are mammals.");

// T-Shirt
function makeShirt(size: string, text: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message is "${text}".`);
}
makeShirt("large");
makeShirt("medium");
makeShirt("small", "I love JavaScript");

// Large Shirts
function makeShirtDefault(size: string = "large", text: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message is "${text}".`);
}
makeShirtDefault();
makeShirtDefault("medium");
makeShirtDefault("small", "I love JavaScript");

// Cities
function describeCity(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi");
describeCity("Lahore", "Pakistan");
describeCity("New York", "USA");

// City Names
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Tokyo", "Japan"));

// Album
function makeAlbum(artist: string, title: string, tracks?: number): Record<string, string | number> {
    let album: Record<string, string | number> = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(makeAlbum("Linkin Park", "Meteora"));
console.log(makeAlbum("Eminem", "The Marshall Mathers LP", 15));

// Magicians
let magicians: string[] = ["Harry Houdini", "David Blaine", "David Copperfield"];

function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicians);

// Great Magicians
function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
let greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);

// Unchanged Magicians
let unchangedMagicians = magicians.slice();
showMagicians(unchangedMagicians);
showMagicians(greatMagicians);

// Sandwiches
function makeSandwich(...items: string[]) {
    console.log("You ordered a sandwich with:");
    for (let item of items) {
        console.log(item);
    }
}
makeSandwich("lettuce", "tomato", "cheese");
makeSandwich("chicken", "mayonnaise");
makeSandwich("peanut butter", "jelly", "banana");

// Cars
function carInfo(manufacturer: string, model: string, ...options: string[]) {
    let car: Record<string, string | string[]> = {
        manufacturer: manufacturer,
        model: model,
        options: options,
    };
    return car;
}
console.log(carInfo("Toyota", "Corolla", "automatic transmission", "sunroof"));
