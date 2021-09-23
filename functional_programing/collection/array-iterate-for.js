const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(n => {
  if (n % 2 === 0) {
    console.log(`${n} is even`)
  }
})

const isEven = n => n % 2 === 0
arr.filter( n => isEven(n)).forEach(n => console.log(`${n} is even`))
