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

## Câu A2 — Data Types & Coercion

```javascript
console.log(typeof null);      // object
console.log(typeof undefined); // undefined
console.log(typeof NaN);       // number
console.log("5" + 3);          // "53"
console.log("5" - 3);          // 2
console.log("5" * "3");       // 15
console.log(true + true);      // 2
console.log([] + []);          // ""
console.log([] + {});          // "[object Object]"
console.log({} + []);          // 0 hoặc "[object Object]" tùy môi trường/
```

### Giải thích chi tiết

- `typeof null` trả về `"object"`. Đây là một lỗi lịch sử của JavaScript, nhưng vẫn được giữ lại để tương thích ngược.
- `typeof undefined` trả về `"undefined"`.
- `NaN` là viết tắt của `Not a Number`, nhưng bản thân nó vẫn thuộc kiểu dữ liệu `number`.
- `"5" + 3` trả về `"53"` vì toán tử `+` nếu gặp chuỗi sẽ ưu tiên nối chuỗi.
- `"5" - 3` trả về `2` vì toán tử `-` không dùng để nối chuỗi, nên JavaScript ép `"5"` thành số `5` rồi tính `5 - 3`.
- `"5" * "3"` trả về `15` vì toán tử `*` ép hai chuỗi số thành số.
- `true + true` trả về `2` vì `true` được ép thành `1`.
- `[] + []` trả về chuỗi rỗng vì mảng rỗng khi chuyển thành chuỗi sẽ là `""`.
- `[] + {}` trả về `"[object Object]"` vì `[]` thành `""`, object thành `"[object Object]"`.
- `{} + []` có thể cho kết quả khác nhau tùy môi trường. Trong Node.js hiện đại, nếu viết trong biểu thức `console.log({} + [])`, object được chuyển thành chuỗi nên thường ra `"[object Object]"`. Nhưng nếu gõ trực tiếp trong console ở một số môi trường, `{}` có thể bị hiểu là block rỗng, khi đó `+[]` thành `0`.

### Tại sao `"5" + 3` và `"5" - 3` khác nhau?

Toán tử `+` trong JavaScript có hai vai trò:

1. Cộng số.
2. Nối chuỗi.

Khi một toán hạng là chuỗi, `+` thường ưu tiên nối chuỗi. Vì vậy:

```javascript
"5" + 3 // "53"
```

Trong khi đó, toán tử `-` chỉ dùng cho phép trừ số học. Vì vậy JavaScript ép chuỗi `"5"` thành số `5`:

```javascript
"5" - 3 // 2
```

---

## Câu A3 — So sánh `==` vs `===`

```javascript
console.log(5 == "5");          // true
console.log(5 === "5");         // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN);        // false
console.log(0 == false);        // true
console.log(0 === false);       // false
console.log("" == false);       // true
```

### Giải thích

- `==` là so sánh lỏng, có ép kiểu dữ liệu trước khi so sánh.
- `===` là so sánh nghiêm ngặt, không ép kiểu dữ liệu.
- `5 == "5"` là `true` vì chuỗi `"5"` bị ép thành số `5`.
- `5 === "5"` là `false` vì một bên là `number`, một bên là `string`.
- `null == undefined` là trường hợp đặc biệt trả về `true`.
- `null === undefined` là `false` vì khác kiểu dữ liệu.
- `NaN == NaN` là `false` vì `NaN` không bằng chính nó. Muốn kiểm tra `NaN`, dùng `Number.isNaN()`.
- `0 == false` là `true` vì `false` bị ép thành `0`.
- `0 === false` là `false` vì khác kiểu dữ liệu.
- `"" == false` là `true` vì cả hai bị ép về giá trị số `0` khi so sánh lỏng.

### Nên dùng `==` hay `===`?

Nên dùng `===` trong hầu hết trường hợp.

Lý do: `===` không tự ép kiểu nên kết quả rõ ràng, dễ dự đoán và tránh lỗi logic bất ngờ. Chỉ nên dùng `==` khi thật sự hiểu rõ quy tắc ép kiểu và có mục đích cụ thể.

---

## Câu A4 — Truthy & Falsy

### Tất cả giá trị Falsy phổ biến trong JavaScript

Các giá trị sau khi đặt trong điều kiện sẽ được xem là `false`:

```javascript
false
0
-0
0n
""
null
undefined
NaN
document.all // trường hợp đặc biệt trong browser
```

Ghi chú: `document.all` là trường hợp đặc biệt trong trình duyệt, ít dùng trong bài tập cơ bản. Ngoài các giá trị trên, hầu hết giá trị còn lại đều là Truthy.

### Dự đoán kết quả

```javascript
if ("0") console.log("A");
```

**Có in.** Chuỗi `"0"` không rỗng nên là truthy.

```javascript
if ("") console.log("B");
```

**Không in.** Chuỗi rỗng là falsy.

```javascript
if ([]) console.log("C");
```

**Có in.** Mảng rỗng vẫn là object, mà object là truthy.

```javascript
if ({}) console.log("D");
```

**Có in.** Object rỗng là truthy.

```javascript
if (null) console.log("E");
```

**Không in.** `null` là falsy.

```javascript
if (0) console.log("F");
```

**Không in.** `0` là falsy.

```javascript
if (-1) console.log("G");
```

**Có in.** Số khác `0` là truthy.

```javascript
if (" ") console.log("H");
```

**Có in.** Chuỗi chứa dấu cách không phải chuỗi rỗng, nên là truthy.

### Output tổng hợp

```text
A
C
D
G
H
```

---
