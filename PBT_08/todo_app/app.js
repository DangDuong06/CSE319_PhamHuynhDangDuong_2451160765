const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#todoCount");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");

const STORAGE_KEY = "pbt09_todos";

let todos = loadTodos();
let currentFilter = "all";

renderTodos();

// =========================
// 1. Thêm todo bằng submit
// =========================
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") {
        alert("Vui lòng nhập nội dung todo!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();

    todoInput.value = "";
    todoInput.focus();
});

// =====================================================
// 2. Event Delegation: chỉ bind event lên #todoList
// Không bind click riêng cho từng li
// =====================================================
todoList.addEventListener("click", function (event) {
    const target = event.target;
    const todoItem = target.closest(".todo-item");

    if (!todoItem) return;

    const todoId = Number(todoItem.dataset.id);

    // Xóa todo
    if (target.classList.contains("delete-btn")) {
        deleteTodo(todoId);
        return;
    }

    // Toggle completed khi click vào text
    if (target.classList.contains("todo-text")) {
        toggleTodo(todoId);
    }
});

// ================================================
// 3. Edit todo: double click text -> đổi thành input
// Enter để lưu, Escape để hủy
// ================================================
todoList.addEventListener("dblclick", function (event) {
    const target = event.target;

    if (!target.classList.contains("todo-text")) return;

    const todoItem = target.closest(".todo-item");
    const todoId = Number(todoItem.dataset.id);
    const todo = todos.find(function (item) {
        return item.id === todoId;
    });

    if (!todo) return;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = todo.text;

    target.replaceWith(editInput);
    editInput.focus();
    editInput.select();

    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const newText = editInput.value.trim();

            if (newText === "") {
                alert("Todo không được để trống!");
                editInput.focus();
                return;
            }

            updateTodoText(todoId, newText);
        }

        if (event.key === "Escape") {
            renderTodos();
        }
    });

    editInput.addEventListener("blur", function () {
        renderTodos();
    });
});

// =========================
// 4. Filter All / Active / Completed
// =========================
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        renderTodos();
    });
});

// =========================
// 5. Clear completed
// =========================
clearCompletedBtn.addEventListener("click", function () {
    todos = todos.filter(function (todo) {
        return todo.completed === false;
    });

    saveTodos();
    renderTodos();
});

function deleteTodo(id) {
    todos = todos.filter(function (todo) {
        return todo.id !== id;
    });

    saveTodos();
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(function (todo) {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }

        return todo;
    });

    saveTodos();
    renderTodos();
}

function updateTodoText(id, newText) {
    todos = todos.map(function (todo) {
        if (todo.id === id) {
            return {
                ...todo,
                text: newText
            };
        }

        return todo;
    });

    saveTodos();
    renderTodos();
}

function getFilteredTodos() {
    if (currentFilter === "active") {
        return todos.filter(function (todo) {
            return todo.completed === false;
        });
    }

    if (currentFilter === "completed") {
        return todos.filter(function (todo) {
            return todo.completed === true;
        });
    }

    return todos;
}

function renderTodos() {
    // Không dùng innerHTML để tạo todo item.
    // Dùng replaceChildren() để xóa nội dung cũ an toàn.
    todoList.replaceChildren();

    const filteredTodos = getFilteredTodos();

    if (filteredTodos.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Không có todo nào để hiển thị.";
        todoList.appendChild(emptyMessage);
        updateCount();
        return;
    }

    filteredTodos.forEach(function (todo) {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;
        span.title = "Click để hoàn thành, double-click để sửa";

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "×";
        deleteBtn.title = "Xóa todo";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    updateCount();
}

function updateCount() {
    const activeCount = todos.filter(function (todo) {
        return todo.completed === false;
    }).length;

    todoCount.textContent = activeCount + " items left";
}

function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Lỗi đọc dữ liệu localStorage:", error);
        return [];
    }
}
