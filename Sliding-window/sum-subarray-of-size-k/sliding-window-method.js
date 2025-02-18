/**
 * Find the maximum sum of the sub-array of size K
 * Where Array Size 7
 * Assume arr = [2, 5, 1, 8, 2, 9, 1]
 * window size k = 3
 */

const arr = [2, 5, 1, 8, 2, 9, 1];
const k = 3;
let sum = 0;
for (let i = 0; i < k; i++) {
    sum += arr[i];
}

let currentSum = sum;
let maxSum = currentSum;
for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i-k]
    maxSum = Math.max(maxSum, currentSum)
}

console.log('Max Sum', maxSum)