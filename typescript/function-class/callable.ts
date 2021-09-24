const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2]
// toArray(8, 3) => ok
// toArray('foo', 'bar') => ok
// toArray('foo', 3) => not ok
// toArray(5, 'bar') => not ok

const toArrayVariably = <T>(...args: T[]): T[] => [...args]
toArrayVariably(1, 2, 3, 4, 5)

class Rectangle {
  readonly name = 'rectable'
  sideA: number
  sideB: number

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA
    this.sideB = sideB
  }

  getArea = (): number => this.sideA + this.sideB
}
