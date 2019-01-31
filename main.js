let result = false

/*
  @param ${string} str
  
  Checks if the passed string is a palindrome
*/

const isPalindrome = (str) => (str.split('').reverse().join('') === str) ? result = true : result = false

isPalindrome('lol') // true
isPalindrome('thomas') // false
