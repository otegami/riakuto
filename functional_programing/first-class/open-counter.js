// let count  = 0
// const increment = () => count += 1

// const counter = () => {
//   let count = 0
//   const increment = () => count += 1
//   return increment
// }

const counter = (count = 0) => (add = 1) => count += add
