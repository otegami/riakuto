// Procedural programing
const octuples = []

for (let n = 1; n < 101; n++) {
  if (n % 8 === 0) {
    octuples.push(n)
  }
}

console.log(octuples)

// Functional programing
const range = (start, end) => [...new Array(end - start).keys()].map(n => n + start)
console.log(range(1, 101).filter(n => n % 8 === 0))

// 関数型プログラミングのメリット
// - 不変性(Immutablity)があること
// - 値を返す式を組み合わせて構成していく
// - 完成形を見据えた上で大雑把に絞り込んでいく
