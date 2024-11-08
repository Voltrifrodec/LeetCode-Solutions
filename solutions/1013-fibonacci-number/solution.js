/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let arr = [0,1];

    for(let i = 2; i <= n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    
    return arr[n];
    
};
