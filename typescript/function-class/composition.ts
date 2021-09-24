{
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

  class Square {
    readonly name = 'square'
    side: number
    
    constructor(side: number) {
      this.side = side
    }
  
    getArea = ():number => new Rectangle(this.side, this.side).getArea()
  }  
}
