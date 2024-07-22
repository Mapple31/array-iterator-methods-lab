const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  const travelMethods = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 }
  ];
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  /*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/

//let veryOldInventors = []

// Complete the exercise in the space below:

const veryOldInventors = inventors.filter((inventor) => {
// select inventors, who were born between 1500-1599 
// access the inventor year property 
console.log(inventor.year)
let check = inventor.year
// check if inventor year property is greater then or equal to 1500
// then check if inventor year property is less then or equal to 1599
    return (check>=1500 && check<= 1599);
})

// Check your work:
console.log('Exercise 1 my result: ', veryOldInventors)
console.log(
  'Exercise 1 correct result: ',
  [
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
  ]
)

/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

//let inventorNames = []

// Complete the exercise in the space below:
/*
select only the first and last names of the inventors
**access the index? no index just .notation
print the names so that they look like the example
**make a string? did not in fact need a string
*/

const inventorNames = inventors.map((inventor) => {
   // console.log(inventor.first, inventor.last)
    return ({ first: inventor.first,  last: inventor.last })
})

// Check your work:
console.log('Exercise 2 my result: ', inventorNames)
console.log(
  'Exercise 2 correct result: ',
  [
    { first: 'Albert', last: 'Einstein' },
    { first: 'Isaac', last: 'Newton' },
    { first: 'Galileo', last: 'Galilei' },
    { first: 'Marie', last: 'Curie' },
    { first: 'Johannes', last: 'Kepler' },
    { first: 'Nicolaus', last: 'Copernicus' },
    { first: 'Max', last: 'Planck' },
    { first: 'Katherine', last: 'Blodgett' },
    { first: 'Ada', last: 'Lovelace' },
    { first: 'Sarah E.', last: 'Goode' },
    { first: 'Lise', last: 'Meitner' },
    { first: 'Hanna', last: 'Hammarström' }
  ]
)

/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/

//let sortedByBirthYear = []

// Complete the exercise in the space below:

//list the inventors by date of birth from the earliest date to the latest
//need to access investors year of birth
//re-order them into a new list (array sortedByBirthYear)
let birthYear = inventor.year
console.log(inventor.year)

const sortedByBirthYear = inventors.sort((birthYear) => {

})


// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear)
console.log(
  'Exercise 3 correct result: ',
  [
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
  ]
)
