/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

for (var i=0; i<10; i++){
	var number = Math.round (Math.random() * 100);
	arr1.push(number);
}

console.log(arr1);


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

console.log(arr1.shift());
console.log("My entire array looked like this" + " " + arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

console.log(arr1.pop());
console.log("Now my array looks like this" + " " + arr1);

//Question: how many elements does arr1 have at this moment?

console.log("Now my array has " + arr1.length + " elements.");

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];

arr1.forEach (function(element,b,c) {
	arr2.unshift(element);
});

console.log("The reverse array looks like this " + arr2);



//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function isEven (value) {
	return value % 2 == 0
};

var arr3 = arr1.filter(isEven);

console.log("The even values are " + arr3);

/*Question: 

1. Why was this code only working for i<8 and not i<arr1.length?  

//for (var i=0; i<8 ; i++){
//	var reverse = arr1.shift();
//	arr2.unshift(reverse);
//	}
//console.log(arr2);
*/










