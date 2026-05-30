
# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — DOM Tree

### 1. DOM Tree

```text
Document
└── div#app
    ├── header
    │   ├── h1
    │   │   └── "Todo App"
    │   └── nav
    │       ├── a.active
    │       │   └── "All"
    │       ├── a
    │       │   └── "Active"
    │       └── a
    │           └── "Completed"
    └── main
        ├── form#todoForm
        │   ├── input#todoInput[type="text"]
        │   └── button[type="submit"]
        │       └── "Add"
        └── ul#todoList
            ├── li.todo-item
            │   └── "Learn HTML"
            └── li.todo-item.completed
                └── "Learn CSS"
```

### 2. querySelector

```javascript
const h1 = document.querySelector("h1");
const inputInForm = document.querySelector("#todoForm input");
const todoItems = document.querySelectorAll(".todo-item");
const activeLink = document.querySelector("nav a.active");
const firstTodo = document.querySelector("#todoList li:first-child");
const navLinks = document.querySelectorAll("nav a");
```

---
## Câu A2 — innerHTML vs textContent

`innerHTML` dùng để đọc hoặc gán nội dung HTML bên trong một element. Nếu gán chuỗi có chứa thẻ HTML, trình duyệt sẽ parse chuỗi đó thành HTML thật.

```javascript
document.querySelector("#result").innerHTML = "<strong>Xin chào</strong>";
```

`textContent` dùng để đọc hoặc gán nội dung dạng text thuần. Nếu chuỗi có chứa thẻ HTML, trình duyệt chỉ hiển thị nó như chữ bình thường.

```javascript
document.querySelector("#result").textContent = "<strong>Xin chào</strong>";
```

### Vấn đề bảo mật XSS

`innerHTML` nguy hiểm khi đưa dữ liệu người dùng nhập trực tiếp vào DOM. Nếu user nhập mã HTML/JS độc hại, trình duyệt có thể thực thi mã đó.

Code nguy hiểm:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
```

Ví dụ user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

Cách sửa an toàn:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```

Hoặc tạo text node:

```javascript
const userInput = document.querySelector("#search").value;
const result = document.querySelector("#result");
result.replaceChildren(document.createTextNode(userInput));
```

---

## Câu A3 — Event Bubbling

Khi click vào button:

```text
BUTTON
INNER
OUTER
```

Giải thích: Sự kiện click xảy ra ở button trước, sau đó nổi bọt lên cha `#inner`, rồi tiếp tục nổi lên `#outer`.

Nếu bỏ comment:

```javascript
e.stopPropagation();
```

Output chỉ còn:

```text
BUTTON
```

Vì `stopPropagation()` chặn không cho event tiếp tục nổi bọt lên các phần tử cha.

---

# PHẦN C 

## Câu C1 — Debug DOM Code

### Các lỗi trong code

1. `countDisplay` khai báo bằng `const`, nhưng ở reset lại gán `countDisplay = count`, gây lỗi vì không được gán lại biến const.
2. Khi reset phải dùng `countDisplay.textContent = count`, không phải `countDisplay = count`.
3. `addEventListener("onclick", ...)` sai tên event. Đúng là `addEventListener("click", ...)`.
4. Dùng `innerHTML` để hiển thị số là không cần thiết. Nên dùng `textContent`.
5. `historyList.innerHTML = null` không nên dùng. Nên dùng `historyList.textContent = ""` hoặc `replaceChildren()`.
6. Trong clear history, `item.remove;` chỉ tham chiếu hàm, không gọi hàm. Đúng là `item.remove()`.
7. Khi lấy `count` từ localStorage, giá trị là string. Cần ép kiểu bằng `Number()`.
8. Chưa load lại history từ localStorage.
9. Bind click riêng cho từng `li` không tối ưu nếu history nhiều. Có thể dùng event delegation trên `historyList`.
10. Nên dùng `appendChild(li)` rõ ràng hơn thay vì `append(li)` trong bài cơ bản.

### Code đã sửa

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = Number(localStorage.getItem("count")) || 0;
countDisplay.textContent = count;
historyList.innerHTML = localStorage.getItem("history") || "";

function updateCountDisplay() {
    countDisplay.textContent = count;
}

function addHistory(message) {
    const li = document.createElement("li");
    li.textContent = message;
    historyList.appendChild(li);
}

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    updateCountDisplay();
    addHistory("Count changed to " + count);
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    updateCountDisplay();
    addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    updateCountDisplay();
    historyList.replaceChildren();
});

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    historyList.replaceChildren();
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", String(count));
    localStorage.setItem("history", historyList.innerHTML);
});
```

---