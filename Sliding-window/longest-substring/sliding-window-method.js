/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 * Input: s = "abcabcbb"
 * Output: 3
 */

const lengthOfSubString = (s) => {
    if(s.length < 2) return s.length
    let rightPointer = 0;
    let leftPointer = 0;
    let maxLength = 0;
    let set = new Set();

    while(rightPointer < s.length) {
        const str = s[rightPointer];
        if(!set.has(str)) {
            set.add(str);
            maxLength = Math.max(maxLength, set.size);
            rightPointer++;
        } else {
            set.delete(s[leftPointer]);
            leftPointer++;
        }
    }
    return maxLength;

}

console.log('Max length', lengthOfSubString('bbbbbbb'));
console.log('Max length', lengthOfSubString('abcabcbb'));
console.log('Max length', lengthOfSubString('pqrstwsts'));