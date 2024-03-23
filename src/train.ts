interface ArrayMaker{
  str: Object
}

function objectToArray(obj:Record<string, number>): ArrayMaker {
  // const step1 = Object.keys(obj)
  // console.log(step1)
  // const step2 = Object.values(obj)
  // console.log(step2)
  const step3 = Object.entries(obj)
  console.log(step3)
  return {str: obj}
}

console.log(objectToArray({a: 10, b: 20}))







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
