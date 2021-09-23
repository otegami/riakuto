import times, { plus } from './modules/math.js'
// CommonJS 形式なため、全てをまとめて export されているので必要なものだけ取得できない
import _ from 'loadsh'

console.log(plus(5))
console.log(times(4))

const arr = [7, 43, 48,10, 5, 23]
console.log((_.min(arr), _.max(arr)))
