/*

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


exect(sumAll(-10, 4)).toEqual('ERROR');
expect(sumAll(2.5, 4)).toEqual('ERROR');
expect(sumAll(10, "90")).toEqual('ERROR');
expect(sumAll(10, [90, 1])).toEqual('ERROR');
*/

const sumAll = function(int1, int2) {
    if ((int1 < 0 || int2 < 0) || (!Number.isInteger(int1) || !Number.isInteger(int2))) {
        return 'ERROR';
    }
    let low = int1 > int2 ? int2 : int1;
    let high = int1 > int2 ? int1 : int2;
    let arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(i);
    }
    
    return  arr.reduce((a, b) => a + b, 0);
};

// Do not edit below this line
module.exports = sumAll;
