const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([1, 2, 3]),1);
assertEqual(head(["no", "never", "yes"]),1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");