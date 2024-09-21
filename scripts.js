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
uppercaseProvinces = provinces.map((element) => {
  return element.toUpperCase();
});

// Log new array to console
console.log(uppercaseProvinces);

// EXERCISE 3
