// const greeter= target => {
//   const sayHello = () => {
//     console.log(`Hi, ${target}!`)
//   }

//   return sayHello
// }

const greeter= target => () => console.log(`Hi, ${target}!`)
const greet = greeter('Step Jun')
greet()
