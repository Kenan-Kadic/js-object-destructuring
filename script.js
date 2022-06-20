'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({starterIndex, mainIndex, time, address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
     will be delivered to ${address} at ${time}`);
  },

};
// HOW TO CALL A FUNCTION and PASS IN AN OBJECT OF OPTIONS ---
// This might allow you to add items to the accessed web api

  restaurant.orderDelivery({
    time: '22.30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,

  })

// OBJECT DESTRUCTURING ---

//this destructuring is done with {}

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
// this creates 3 new variables
// this is useful for API fetches



// YOU CAN GIVE VARIABLES NEW NAMES ---
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags)


// YOU CAN SET DEFAULT VALUES ---

// const {menu = [], starterMenu: starters = []} = restaurant;


// YOU CAN MUTATE VARIABLES - GIVE THEM NEW VALUES

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14 };
// // look at how the next line is in parentheses
// ({a, b} = obj);
// console.log(a, b);


// HOW DO YOU ACCESS NESTED OBJECTS THROUGH DESTRUCTURING?

// const {fri: {open, close}} = openingHours;
// console.log(open, close);


// YOU CAN GIVE NEW VARIABLE NAMES TO OPEN AND CLOSE IF YOU WANT

// const {fri: {open: newVariableOpen, close: newVariableClose}} = openingHours;
// console.log(newVariableOpen, newVariableClose);

