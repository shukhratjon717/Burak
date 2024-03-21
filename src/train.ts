interface Summary {
  arr: any[];
  sum: number;
}
function summer(arr: any[]): Summary {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (typeof arr[i] === 'object' && 'son' in arr[i]) {
      sum += arr[i].son;
    }
  }
  return {
    arr: arr,
    sum: sum
  };

}
console.log(summer([10, "10", { son: 10 }, true, 35]));


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
