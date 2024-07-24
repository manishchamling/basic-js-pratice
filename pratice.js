// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// step 1.
// const reverser = (num) => {
//   const text = String(num);
//   const len = text.length;
//   let newnum = "";
//   for (let i = len - 1; i >= 0; i--) {
//     newnum += text[i];
//   }
//   return newnum;
// };
// const result = reverser("32243");

//step 2.
// const reverseNew = (num) => {
//   const text = String(num);
//   const splitData = text.split("");
//   const reverseData = splitData.reverse();
//   const joinedData = reverseData.join("");
//   return joinedData;
// };

// step 3.
//function chanining
// const reversernew2 = (num) => {
//   split("").revers().join("");
//   reversernew2(32243);
// };
/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5 */
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowels("The quick brown fox");

//Es6
const countvow = (str) => {
  let count = 0;
  for (char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
  return count;
};
const string = prompt("Enter the character or word ");
const result = string;
countvow(result);
