const multiply = (n, m) => n * m
console.log(multiply(2, 4))

const withMultiple = n => m => n * m
console.log(withMultiple(2)(4))

const  triple = withMultiple(3)
console.log(triple(4))
console.log(triple(1))
