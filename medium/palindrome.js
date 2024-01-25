/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase()
  let temp=""
  let ans=""
  for(let i=0;i<str.length;i++){
    if(str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122){
      temp=temp+str[i];
      // console.log(ans)
    }
  }
  for(let i=str.length-1;i>=0;i--){
    if(str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122){
      ans=ans+str[i];
      // console.log(ans)
    }
  }
  console.log(temp)
  console.log(ans)
  
  return ans==temp;
}

module.exports = isPalindrome;
console.log(isPalindrome('Able, was I ere I saw Elba!'))
