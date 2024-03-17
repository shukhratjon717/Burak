interface palindrome {
  str: string;
}
function palindromeCheck(str: string) {
  let step1 = str.split("").reverse().join("");
  if (step1 === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck("helleh"));

interface SquareMaker {
  Number: number;
  Square: number;
}

/* 
Traditional FrontEnd Development (FD) => BSSR = SSR (Admin) => EJS
Modern FrontEnd development (FD)      => SPA( Single Page Application) (USER's appications) => REACT
*/

/* Cookies: 
request: join,
self destroy

*/

/* Validaton
FrontEnd validation
Backend validation
Database validation

*/
