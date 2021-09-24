type Fig = 'one' | 'two' | 'three'
type FigMap = { [k in Fig]?: number }

const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3
}

// figMap.four = 4
