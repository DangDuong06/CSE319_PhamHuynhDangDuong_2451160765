const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const countText = document.querySelector("#countText");
const clearCompletedBtn = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getFilteredTodos() {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        return todos.filter(todo => todo.completed);
    }

    return todos;
}

function updateCount() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    countText.textContent = `${activeCount} items left`;
}

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";
    deleteBtn.setAttribute("aria-label", "Xóa todo");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {
    todoList.replaceChildren();

    const filteredTodos = getFilteredTodos();
    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateCount();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    input.value = "";
    saveTodos();
    renderTodos();
});

todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
        return;
    }

    if (e.target.classList.contains("todo-text")) {
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);
    const todo = todos.find(todo => todo.id === id);

    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = todo.text;

    e.target.replaceWith(editInput);
    editInput.focus();

    function saveEdit() {
        const newText = editInput.value.trim();

        if (newText) {
            todos = todos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            );
            saveTodos();
        }

        renderTodos();
    }

    editInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveEdit();
        }
    });

    editInput.addEventListener("blur", saveEdit);
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

renderTodos();
