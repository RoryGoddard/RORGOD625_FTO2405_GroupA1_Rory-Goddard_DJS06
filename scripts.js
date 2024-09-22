// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//EXERCISE 1

// Console log all names
names.forEach(name => console.log(name));

// Console log all provinces
provinces.forEach(province => console.log(province));

// Console log names with provinces
names.forEach((element, index) => {
  console.log(`${element} (${provinces[index]})`);
});


// EXERCISE 2

// Create array of all uppercase provinces
const uppercaseProvinces = provinces.map((element) => {
  return element.toUpperCase();
});

// Log new array to console
console.log(uppercaseProvinces);


// EXERCISE 3

// Create new array with length of each name
const lengthOfNames = names.map((element) => {
  return element.length
});

// Console log the new array 
console.log(lengthOfNames);


// EXERCISE 4

// Call sort function on provinces array to sort alphabetically
const provincesAlphabetical = provinces.sort();

// Console log the new sorted array
console.log(provincesAlphabetical);


// EXERCISE 5

// Filter the provinces containing the word "Cape"
const provincesWithoutCape = provinces.filter((element) => {
  if (!element.includes("Cape")) {
    return element
  }
});

// Log the count of the remaining provinces
console.log(provincesWithoutCape.length);


// EXERCISE 6

// Function which will split inputted name into an array of its characters, checking if any are "s"
const hasLetterS = (name) => {
  const characters = name.toLowerCase().split('');
  return characters.some((char) => char === 's');
};

// Use map to iterate over names calling the hasLetterS function on each name, turning it into an array and checking for "s"
const hasLetterSArray = names.map((name) => {
  return hasLetterS(name)
});

// Console log the resulting array
console.log(hasLetterSArray);


// EXERCISE 7


