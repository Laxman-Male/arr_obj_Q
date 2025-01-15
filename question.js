const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999, discount: 15 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699, discount: 10 },
    { id: 3, name: "T-shirt", category: "Clothing", price: 25, discount: 5 },
    { id: 4, name: "Headphones", category: "Electronics", price: 150, discount: 20 },
    { id: 5, name: "Book", category: "Books", price: 20, discount: 0 },
    { id: 6, name: "Shoes", category: "Clothing", price: 75, discount: 10 },
    { id: 7, name: "Washing Machine", category: "Home Appliances", price: 500, discount: 30 },
    { id: 8, name: "Refrigerator", category: "Home Appliances", price: 800, discount: 25 },
    { id: 9, name: "Smartwatch", category: "Electronics", price: 199, discount: 10 },
    { id: 10, name: "Blender", category: "Home Appliances", price: 100, discount: 15 }
  ];
  
  
//   Easy
//   1. Print all the product names.
//   2. Create a list of categories for all products.
//   3. Find all products with a discount of 10% or more.
//   4. List all products in the "Electronics" category.
//   5. Create an array of products with only their names and prices.
//   Medium
//   1. Find all products where the price is greater than $100 and less than $800.
//   2. Generate an array of product names and final prices (price after discount).
//   3. Find all products from the "Clothing" category with discounts greater than 5%.
//   4. Identify all products that have no discount and display their names.
//   5. Create a new array with names of products whose original price is a multiple of $100.
//   Hard
//   1. List all products in the "Home Appliances" category and calculate their final price after applying the discount.
//   2. Find all products where the final price is less than $200 and display their names.
//   3. Identify all products whose names contain the letter "e" and have a discount of at least 15%.
//   4. Create a list of products from "Books" or "Electronics," showing only their names and final prices.
//   5. Find all products priced over $300 and with a discount greater than 15%, and display their names and categories.



// 1. 
// Print all the product names.
products.map(pro=>pro.name)

//   2.
//  Create a list of categories for all products.
products.map(pro=>pro.category)

//   3. 
// Find all products with a discount of 10% or more.
products.filter(pro=>pro.discount >=10)

//   4.
//  List all products in the "Electronics" category.
products.filter(pro=>pro.category==='Electronics')

//   5.
//  Create an array of products with only their names and prices.
let arr1=products.map(pro=>pro.name);
let arr2=products.map(pro=>pro.price);
let finalArray=arr1.concat(arr2);