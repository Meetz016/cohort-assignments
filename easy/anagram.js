/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr = new Array(26).fill(0);
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  if(str1.length!=str2.length){
    return false;
  }
  let n=str1.length;
  for(const ch of str1){
    arr[ch.charCodeAt(0)-97]++;
  }
  for(const ch of str2){
    arr[ch.charCodeAt(0)-97]--;
  }
  for(const i of arr){
    if(i!=0){
      return false;
    }
  }
  return true
}

module.exports = isAnagram; 