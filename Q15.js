"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Sana", "Sara", "Sadaf", "Shugufta"];
let wontCome = guestList[0];
console.log(wontCome, "cant come");
guestList.splice(0, 1, "Samreen");
guestList.forEach(guest => console.log(`Salam,${guest},I would like to invite you at dinner`));
