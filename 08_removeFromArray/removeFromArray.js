/*Implement a function that takes an array and some other arguments then removes the other arguments from that array:

let arr = ['cat', 'dog', 'tiger', 'wolf'];


!! "stuff" is not handed to me as an array

pseudocode:
- for each "thing" I am handed after the initial arr, store it in a new arr2
- use filter on the arr1 to get rid of any elements if they are contained in arr2


*/

const removeFromArray = function(arr, ...stuff) {
    const result =  arr.filter((item) => !stuff.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
