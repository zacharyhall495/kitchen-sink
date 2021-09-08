let name = 'Zach';


const states = 50;

// computing sum of 5 + 4
let a = 5
let b = 4
let sum = (a + b)
console.log(sum)



function sayHello() {
   alert ("Hello World!");
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
     alert ("Sorry" + " " + name + ", you aren't old enough to view this page");
    } 
}

let Charles = {
    name: "Charles",
    age: 21
};
let Abby = {
    name: "Abby",
    age: 27
};
let James = {
    name: "James",
    age: 18
};
let John = {
    name: "John",
    age: 17
};

checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

let vegetables = ["broccoli", "cauliflower", "celery"]
for (let i = 0; i < 3; i++) {
    console.log(vegetables[i]);
};

let pet = {
    name: "Debo",
    breed: "Bull-Dog",
};

console.log(pet.name);
console.log(pet.breed);

let friends = [
    {
        name: "Jason",
        age: 30,
    },

    {
        name: "Daniel",
        age: 33
    },

    {
        name: "Blake",
        age: 28,
    },

    {
        name: "Ty",
        age: 30,
    },

    {
        name: "Will",
        age: 27,
    },

];

for (let i = 0; i < friends.length; i++) {
    checkAge (friends[i].name, friends[i].age);
    
};

function getLength(string) {
    return string.length
};

let length = getLength('Hello World');

if (length % 2 == 0) { 
 console.log("The World is an Even Place!")
} else { 
 console.log("The World is and Odd Place!")
};









