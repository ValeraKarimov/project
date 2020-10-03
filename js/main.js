// const myModule = require('./main');
// const myModuleInstance = new myModule();
// myModuleInstance.hello();
// myModuleInstance.goodbye();

export let one = 1;

let two = 2;

export {two};

export default function sayHi() {
  console.log('Hello');
}