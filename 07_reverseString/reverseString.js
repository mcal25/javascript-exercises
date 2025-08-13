const reverseString = function(str) {
    let arr = str.split('');
    arr = arr.reverse();
    let reversedStr = arr.join('');
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
