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
