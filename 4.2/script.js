/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order
var arr2 = [];

function reverseArray(arr){
    arr.forEach (function(element,b,c) {
	arr2.unshift(element);
});
    return (arr2);
}

console.log(reverseArray([1,2,3,4,5])); //should log [5,4,3,2,1]


/*Questions: 

1. How to define a variable inside the function? */