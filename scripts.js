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

// Define new variable to assign reducer to
// Call reduce to populate the object with the keys from the names array and values from the provinces array
const namesAndProvinces = names.reduce((accumulator, currentName, index) => {
  accumulator[currentName] = provinces[index]
  return accumulator
}, {});

// Console.log resulting object
console.log(namesAndProvinces);


// ADVANCED EXERCISES

// 1.
// Define function to console log items
function printProductNames(product) {
  console.log(product)
};

// Use forEach method to iterate over products and log the names
products.forEach((currentValue) => {
  printProductNames(currentValue.product)
});


// 2. 
// Create array of filtered products where products only get added if they are 5 characters long or less
const filteredProductsByLength = products.filter((currentValue) => {
  return currentValue.product.length <= 5
});

// Console log the resulting array
console.log(filteredProductsByLength);


// 3.
// Create an array with only valid prices within
const filteredProductsByPrice = products.filter((currentValue) => {
  return parseFloat(currentValue.price);
})

// Run reducer method to calculate total price
const totalPrice = filteredProductsByPrice.reduce((total, currentValue) => {
  return total += parseFloat(currentValue.price);
}, 0)

// Console log the total price
console.log(totalPrice);


//4. 
// Define a variable to hold the concatenated string
// Run reducer method to grab current name and add it to an empty string, being stored as a total
const productNamesCombined = products.reduce((total, currentName) => {
  return total += currentName.product
}, "");

// Console log the resulting concatenated string
console.log(productNamesCombined);


//5. 
// Define two variables to store max and min price objects within

// Run reducer method on previously filtered price array, checking if current price value is higher than max,
// Where initial value is defined as the first object within the array
const maxPrice = filteredProductsByPrice.reduce((max, currentValue) => {
  return parseFloat(max.price) > parseFloat(currentValue.price) ? max : currentValue;
}, filteredProductsByPrice[0]);

// Run reducer method on previously filtered price array, checking if current price value is lower than max,
// Where initial value is defined as the first object within the array
const minPrice = filteredProductsByPrice.reduce((min, currentValue) => {
  return parseFloat(min.price) < parseFloat(currentValue.price) ? min : currentValue;
}, filteredProductsByPrice[0]);

// Console log string containing highest and lowest prices
console.log(`Highest: ${parseFloat(maxPrice.price)}. Lowest: ${parseFloat(minPrice.price)}.`);


//6.
// Define reducer method to take accumulator and currentValue
// use object entries to get array of keys and values
// create new object with new names of keys, and old values
// push object to accumulator array
// return the accumulator to be used for next iteration
const newProductObject = products.reduce((accumulator, currentValue) => {
  const productEntries = Object.entries(currentValue);

  const renamedObject = {
    name: productEntries[0][1],
    cost: productEntries[1][1],
  };

  accumulator.push(renamedObject);

  return accumulator;
}, []);

// Console log the new object
console.log(newProductObject);
