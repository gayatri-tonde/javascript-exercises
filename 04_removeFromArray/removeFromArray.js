const removeFromArray = function() {
    // The input array is the first argument, the rest are the values to remove
    const array = arguments[0];
    const valuesToRemove = Array.from(arguments).slice(1);
    
    // Use filter to remove the values from the array
    return array.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
