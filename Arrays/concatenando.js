const a1 = [1, 2, 3]
const a2 = [1, 2, 3]
//const a3 = a1.concat(a2) // transforma os dois arrays em apenas um
const a3 = [...a1, ...a2] //spread operator
console.log(a3)
