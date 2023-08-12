/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let words = str.split(" ");  // spliting the string sentence into an array
  let newStr = "";  // creating an empty string
  for (let i = 0; i < words.length; i++) {
    newStr += words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase() + " ";   // creating new required string
  }
  return newStr.substring(0, newStr.length-1); // returning string after removing last space.
}

console.log(titleCase("I'm a little tea pot"));
