let numbers = [1, 2, 3, 4, 5];
let multipliedNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers[i] = numbers[i] * 2;
}

let indexes = [];
for (let i = 0; i < numbers.length; i++) {
    indexes[i] = i;
}
console.log("Original Numbers:", numbers);
console.log("Multiplied Numbers:", multipliedNumbers);
console.log("Indexes:", indexes);