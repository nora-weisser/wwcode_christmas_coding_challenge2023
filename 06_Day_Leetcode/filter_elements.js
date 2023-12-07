/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      let value = fn(arr[i], i);
      if (value) {
        if (value !== 0) {
          new_arr.push(arr[i]);
        }
      }
    }
    return new_arr;
    
};
