## PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## Câu A1 — var / let / const

### Đoạn 1

```javascript
console.log(x);
var x = 5;
```

**Dự đoán output:**

```text
undefined
```

**Giải thích:**

Biến khai báo bằng `var` có cơ chế **hoisting**. Nghĩa là phần khai báo `var x` được đưa lên đầu phạm vi, nhưng giá trị `5` chưa được gán tại thời điểm `console.log(x)` chạy.

Code được hiểu gần giống như:

```javascript
var x;
console.log(x);
x = 5;
```

Vì vậy kết quả là `undefined`.

---

### Đoạn 2

```javascript
console.log(y);
let y = 10;
```

**Dự đoán output:**

```text
ReferenceError: Cannot access 'y' before initialization
```

**Giải thích:**

Biến khai báo bằng `let` cũng có hoisting, nhưng nằm trong vùng gọi là **Temporal Dead Zone** từ đầu block cho đến khi dòng khai báo được thực thi. Do đó, truy cập `y` trước khi khai báo sẽ gây lỗi `ReferenceError`.

---

### Đoạn 3

```javascript
const z = 15;
z = 20;
console.log(z);
```

**Dự đoán output:**

```text
TypeError: Assignment to constant variable.
```

**Giải thích:**

`const` dùng để khai báo hằng tham chiếu, không cho phép gán lại giá trị mới cho biến. Vì `z` đã được gán là `15`, dòng `z = 20` gây lỗi `TypeError`.

---

### Đoạn 4

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

**Dự đoán output:**

```text
[1, 2, 3, 4]
```

**Giải thích:**

`const arr` không cho phép gán lại `arr` sang một mảng khác, nhưng vẫn cho phép thay đổi nội dung bên trong mảng. Vì vậy `arr.push(4)` hợp lệ.

Ví dụ không hợp lệ:

```javascript
arr = [1, 2, 3, 4];
```

---

### Đoạn 5

```javascript
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

**Dự đoán output:**

```text
Trong block: 2
Ngoài block: 1
```

**Giải thích:**

`let` có phạm vi theo block `{}`. Biến `a` bên trong block là một biến khác với biến `a` bên ngoài block. Vì vậy trong block in ra `2`, ngoài block in ra `1`.