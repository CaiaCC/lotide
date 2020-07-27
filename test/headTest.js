const assertEqual = require("../assertEqual");

const head = require('../head.js');

assertEqual(head(["Lighthouse Lab"]), "Bootcamp");
assertEqual(head(["Boot camp", "Bootcamp"]), "Bootcamp");
assertEqual(head(["Bootcamp", "Lighthouse Lab", "Caia"]), "Bootcamp");
assertEqual(head([3, 0 ,"hi"]), 1);
assertEqual(head([1, 0.3]), 1);
assertEqual(head([]), 1);
assertEqual(head([1]), 1);

