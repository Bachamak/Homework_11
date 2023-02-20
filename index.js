let amount = prompt("Введите количество элементов через запятую");
let arr = amount.split(',');
console.log(arr);

let sortnumbers = arr.sort((a,b) => a - b);
console.log(sortnumbers);

sortnumbers.splice(1, 3);
console.log(sortnumbers);
// 3, -9, 8, 38, -4, 0