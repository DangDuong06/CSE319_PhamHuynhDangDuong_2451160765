console.log("===== Đoạn 1: var hoisting =====");
console.log(x); 
var x = 5;
console.log("Sau khi gán x =", x);

console.log("\n===== Đoạn 2: let và Temporal Dead Zone =====");
try {
    console.log(y);
    let y = 10;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\n===== Đoạn 3: const không được gán lại =====");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\n===== Đoạn 4: const array vẫn sửa được phần tử =====");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("\n===== Đoạn 5: let có block scope =====");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
