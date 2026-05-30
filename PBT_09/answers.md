
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