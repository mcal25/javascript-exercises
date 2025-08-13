const repeatString = function(str, n) {
    if (n < 0) return 'ERROR';
    let val = '';
    for (let i = 0; i < n; i++) {
        val = val.concat(str);
    }
    return val;
};

// Do not edit below this line
module.exports = repeatString;
