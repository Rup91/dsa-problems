const arr = [1,2,3,4,5,6];
const subArrLength = 3;
let subArrSum = 0;
const result = [];

for (let i = 0; i < arr.length; i++) {
    const innerLoopLength = (i+subArrLength)
    if ((innerLoopLength <= arr.length)) {
        for(let j=i; j<innerLoopLength; j++) {
            subArrSum = subArrSum + arr[j];
        }
        result.push(subArrSum);
        subArrSum = 0;
    }
}

console.log('Max Sum', Math.max(...result))