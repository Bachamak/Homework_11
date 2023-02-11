let amount = prompt("Введите количество элементов");
let arr = amount.split('');
console.log(arr);

for ( let i = 0; i < arr.length; i++ ) {
    if ( arr !== 'number' ) {
        arr.sort();
    }
}
console.log(arr);

let newSet = new Set(arr);
let uniquesymbols = Array.from(newSet);

console.log(uniquesymbols);