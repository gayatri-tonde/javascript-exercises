const sumAll = function (start, end) {
    let sum = 0;
    if (start >= 0 && end >= 0 && typeof start === "number" && typeof end === "number" && start % 1 === 0 && end % 1 === 0) {
        if (start < end) {
            for (i = start; i <= end; i++) {
                sum += i;
            }
        }
        else if (start > end) {
            for (i = end; i <= start; i++) {
                sum += i;
            }
        }
    } 
    else {
        return "ERROR";
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
