
const btnOpenForm = document.getElementById("btnOpenForm");
const btnCloseForm = document.getElementById("btnCloseForm");
const taskModal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");

const formTitle = document.getElementById("formTitle");
const btnSave = document.getElementById("btnSave");

const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");
const isCompletedInput = document.getElementById("isCompleted");

const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const uncompletedTasks = document.getElementById("uncompletedTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


let editIndex = -1;


renderTasks();
updateTaskSummary();


btnOpenForm.addEventListener("click", function () {
    openForm();
});


btnCloseForm.addEventListener("click", function () {
    closeForm();
});


taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = {
        title: taskTitleInput.value.trim(),
        description: taskDescriptionInput.value.trim(),
        deadline: deadlineInput.value,
        priority: priorityInput.value,
        completed: isCompletedInput.checked
    };

    if (editIndex === -1) {
        tasks.push(task);
        showMessage("Thêm công việc thành công!");
    } else {
        tasks[editIndex] = task;
        showMessage("Cập nhật công việc thành công!");
    }

    saveTasks();
    renderTasks();
    updateTaskSummary();
    closeForm();
});

// ===============================
// CÁC HÀM XỬ LÝ CHÍNH
// ===============================

// Render danh sách công việc ra giao diện
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-task">
                Chưa có công việc nào
            </div>
        `;
        return;
    }

    tasks.forEach(function (task, index) {
        const taskCard = document.createElement("div");

        taskCard.classList.add("task-card");

        if (task.completed === true) {
            taskCard.classList.add("completed");
        }

        taskCard.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
                <div>
                    <input 
                        type="checkbox" 
                        ${task.completed ? "checked" : ""} 
                        onchange="toggleTaskStatus(${index})"
                    >
                    Hoàn thành
                </div>
            </div>

            <p class="task-description">${task.description}</p>

            <div class="task-info">
                <span><strong>Hạn:</strong> ${task.deadline}</span>
                <span>
                    <strong>Ưu tiên:</strong>
                    <span class="priority ${getPriorityClass(task.priority)}">
                        ${task.priority}
                    </span>
                </span>
                <span>
                    <strong>Trạng thái:</strong>
                    ${task.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
                </span>
            </div>

            <div class="task-actions">
                <button class="btn-edit" onclick="editTask(${index})">Sửa</button>
                <button class="btn-delete" onclick="deleteTask(${index})">Xóa</button>
                <button class="btn-status" onclick="toggleTaskStatus(${index})">
                    ${task.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu hoàn thành"}
                </button>
            </div>
        `;

        taskList.appendChild(taskCard);
    });
}

// Lưu dữ liệu vào localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Mở form thêm công việc
function openForm() {
    taskModal.classList.add("show");

    formTitle.innerText = "Thêm công việc";
    btnSave.innerText = "Lưu";

    editIndex = -1;
    resetForm();
}

// Đóng form
function closeForm() {
    taskModal.classList.remove("show");

    resetForm();
    editIndex = -1;
}

// Reset dữ liệu trong form
function resetForm() {
    taskForm.reset();
}

// Sửa công việc
function editTask(index) {
    const task = tasks[index];

    taskTitleInput.value = task.title;
    taskDescriptionInput.value = task.description;
    deadlineInput.value = task.deadline;
    priorityInput.value = task.priority;
    isCompletedInput.checked = task.completed;

    editIndex = index;

    formTitle.innerText = "Cập nhật công việc";
    btnSave.innerText = "Cập nhật";

    taskModal.classList.add("show");
}

// Xóa công việc
function deleteTask(index) {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");

    if (confirmDelete) {
        tasks.splice(index, 1);

        saveTasks();
        renderTasks();
        updateTaskSummary();

        showMessage("Xóa công việc thành công!");
    }
}

// Đổi trạng thái hoàn thành/chưa hoàn thành
function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
    updateTaskSummary();

    showMessage("Cập nhật trạng thái công việc thành công!");
}

// Cập nhật thống kê công việc
function updateTaskSummary() {
    const total = tasks.length;

    const completed = tasks.filter(function (task) {
        return task.completed === true;
    }).length;

    const uncompleted = total - completed;

    totalTasks.innerText = total;
    completedTasks.innerText = completed;
    uncompletedTasks.innerText = uncompleted;
}

// Hiển thị thông báo
function showMessage(text) {
    message.innerText = text;

    setTimeout(function () {
        message.innerText = "";
    }, 2500);
}

// Trả về class CSS theo mức ưu tiên
function getPriorityClass(priority) {
    if (priority === "Cao") {
        return "priority-high";
    }

    if (priority === "Trung bình") {
        return "priority-medium";
    }

    if (priority === "Thấp") {
        return "priority-low";
    }

    return "";
}