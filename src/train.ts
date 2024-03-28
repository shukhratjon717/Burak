interface sumMaker {
  str: string
} 
function summer(str: string): sumMaker {
  const step1 = Number(str.slice(0,1))
  const step2 = Number(str.slice(2))
  const step3 = step1 + step2
  return {str: step3.toString()}
}

console.log(summer("1+3"))



// interface propertyMaker{
//   value: boolean
//   key: boolean
// }

// function propertyFinder(obj: object, str: string): propertyMaker  {
//   if(Object.keys(obj).includes(str)) {
//     return {"key": true, "value": false}
//   } else if(Object.values(obj).includes(str)) {
//     return {"value": true, "key": false}
//   } else {
//     return {'value': false, "key": false}
//   }
// }
// console.log(propertyFinder({name: "BMW", model: "M3"}, "year"));







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
