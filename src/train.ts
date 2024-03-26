interface propertyMaker{
  value: boolean
  key: boolean
}

function propertyFinder(obj: object, str: string): propertyMaker  {
  if(Object.keys(obj).includes(str)) {
    return {"key": true, "value": false}
  } else if(Object.values(obj).includes(str)) {
    return {"value": true, "key": false}
  } else {
    return {'value': false, "key": false}
  }
}
console.log(propertyFinder({name: "BMW", model: "M3"}, "year"));







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
