// map,filter,find , some , every, includes ,  indexOf, findIndex

// map

const personArray = [
    {
        name: 'Person 0',
        age: 45,
        country: 'USA'
    },
    {
        name: 'Person 1',
        age: 30,
        country: 'USA'
    },
    {
        name: 'Person 2',
        age: 40,
        country: 'Russia'
    },
    {
        name: 'Person 3',
        age: 50,
        country: 'India'
    }

]

const getAllNames = personArray.map((person, index) => {
    console.log(person, index);
    return `${person.name} age is ${person.age}`;
})

console.log(getAllNames);

let getPersonFromUsa = personArray.find((singlePerson, index) => {
    return singlePerson.country === 'USA';
})

console.log(getPersonFromUsa); // only get person 0 but not get person 1


// so that's why we use filter

let getAllPersonsFromUSA = personArray.filter((singlePerson, index) => {
    return singlePerson.country === 'USA';
});

console.log(getAllPersonsFromUSA);

// some check the any of the object satiesfies the condition or not

let checkSomeArrayMethodWithExample = personArray.some((singlePerson) => {
    return singlePerson.age > 40;
})

console.log(checkSomeArrayMethodWithExample);//true


// every check all the person age is greater than 40 or not --> false 

// every check all the objects of the array satiesfies the condition or not

let checkEveryArrayMethodWithExample = personArray.every((singlePerson) => {
    return singlePerson.age > 40;
})

console.log(checkEveryArrayMethodWithExample);


// includes

const fruitsArray = ['apple', 'banana', 'mango', 'orange'];

console.log(fruitsArray.includes('apple')); // true

// indexOf

console.log(fruitsArray.indexOf('banana')); // 1

console.log(fruitsArray.indexOf('sangam'));


// findIndex

let getIndexofPersonWhoIsFromRussia = personArray.findIndex((singlePerson)=>{
    return singlePerson.country === 'Russia';
})

console.log(getIndexofPersonWhoIsFromRussia);