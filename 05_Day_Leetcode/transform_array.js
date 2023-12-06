/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(fn(arr[i], i));
    }
    return new_arr;
};
