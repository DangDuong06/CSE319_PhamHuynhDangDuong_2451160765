# PHẦN A 

## Câu A1 

### 1. Function Declaration

```javascript
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
}

console.log(tinhThueBaoHiem(15000000));
```

Kết quả:

```javascript
{ thuong: 1500000, thuc_nhan: 13500000 }
```

### 2. Function Expression

```javascript
const tinhThueBaoHiemExpression = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiemExpression(15000000));
```

### 3. Arrow Function

```javascript
const tinhThueBaoHiemArrow = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiemArrow(15000000));
```

### Khác nhau về hoisting

Function Declaration được hoist toàn bộ nên có thể gọi trước khi khai báo:

```javascript
console.log(tinhThueBaoHiem(15000000));

function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
}
```

Function Expression và Arrow Function nếu khai báo bằng `const` hoặc `let` thì không thể gọi trước dòng khai báo vì bị rơi vào Temporal Dead Zone:

```javascript
console.log(tinhThueBaoHiemExpression(15000000));

const tinhThueBaoHiemExpression = function(luong) {
    return luong;
};
```

Kết quả: `ReferenceError`.

---
## Câu A2 — Scope & Closure

### Đoạn 1

```javascript
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

Giải thích:

Hàm `counter()` tạo biến cục bộ `count = 0`. Object trả về có 3 method: `increment`, `decrement`, `getCount`. Các method này vẫn nhớ được biến `count` dù `counter()` đã chạy xong. Đây là closure.

### Đoạn 2

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

Output:

```text
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

Giải thích:

`var` có function scope, nên cả 3 callback dùng chung một biến `i`. Khi `setTimeout` chạy, vòng lặp đã kết thúc và `i = 3`.

`let` có block scope. Mỗi vòng lặp tạo ra một biến `j` riêng, nên callback nhớ đúng giá trị tại từng vòng lặp.

---