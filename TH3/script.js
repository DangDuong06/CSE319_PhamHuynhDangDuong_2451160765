

const btnAdd = document.getElementById("btnAdd");
const btnClose = document.getElementById("btnClose");
const btnCancel = document.getElementById("btnCancel");

const studentModal = document.getElementById("studentModal");
const studentForm = document.getElementById("studentForm");

const studentList = document.getElementById("studentList");

const totalStudents = document.getElementById("totalStudents");
const avgScore = document.getElementById("avgScore");

const modalTitle = document.getElementById("modalTitle");
const notification = document.getElementById("notification");


const studentId = document.getElementById("studentId");
const fullName = document.getElementById("fullName");
const birthDate = document.getElementById("birthDate");
const className = document.getElementById("className");
const score = document.getElementById("score");
const email = document.getElementById("email");



let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;



btnAdd.addEventListener("click", function(){

    openModal();

    modalTitle.innerText = "Thêm Sinh Viên";

    editIndex = -1;

    resetForm();
});


btnClose.addEventListener("click", closeModal);

btnCancel.addEventListener("click", closeModal);



studentForm.addEventListener("submit", function(e){

    e.preventDefault();

    if(!validateForm()){
        return;
    }

    const student = {
        id: studentId.value.trim(),
        name: fullName.value.trim(),
        birth: birthDate.value,
        class: className.value.trim(),
        score: Number(score.value),
        email: email.value.trim()
    };

  
    if(editIndex === -1){

        students.push(student);

        showNotification("Thêm sinh viên thành công!");

    }else{

        students[editIndex] = student;

        showNotification("Cập nhật sinh viên thành công!");
    }

    saveStudents();

    renderStudents();

    updateStatistics();

    closeModal();

    resetForm();

});


function renderStudents(){

    studentList.innerHTML = "";

    if(students.length === 0){

        studentList.innerHTML = `
            <tr>
                <td colspan="7" class="empty-row">
                    Chưa có dữ liệu sinh viên
                </td>
            </tr>
        `;

        return;
    }

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birth}</td>

                <td>${student.class}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button 
                        class="action-btn edit-btn"
                        onclick="editStudent(${index})"
                    >
                        Sửa
                    </button>

                    <button 
                        class="action-btn delete-btn"
                        onclick="deleteStudent(${index})"
                    >
                        Xóa
                    </button>

                </td>

            </tr>
        `;
    });

}


function editStudent(index){

    editIndex = index;

    const student = students[index];

    studentId.value = student.id;
    fullName.value = student.name;
    birthDate.value = student.birth;
    className.value = student.class;
    score.value = student.score;
    email.value = student.email;

    modalTitle.innerText = "Cập Nhật Sinh Viên";

    openModal();
}


function deleteStudent(index){

    const confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này?"
    );

    if(confirmDelete){

        students.splice(index, 1);

        saveStudents();

        renderStudents();

        updateStatistics();

        showNotification("Xóa sinh viên thành công!");
    }
}



function saveStudents(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


function updateStatistics(){

    totalStudents.innerText = students.length;

    let total = 0;

    students.forEach(student => {

        total += student.score;
    });

    const avg =
        students.length > 0
        ? total / students.length
        : 0;

    avgScore.innerText = avg.toFixed(2);
}



function openModal(){

    studentModal.classList.remove("hidden");
}

function closeModal(){

    studentModal.classList.add("hidden");
}



function resetForm(){

    studentForm.reset();

    clearErrors();
}


function showNotification(message){

    notification.innerHTML = `
        <div class="success">
            ${message}
        </div>
    `;

    setTimeout(() => {

        notification.innerHTML = "";

    }, 3000);
}


function validateForm(){

    clearErrors();

    let isValid = true;

  
    if(studentId.value.trim() === ""){

        setError("studentIdError", "Không được để trống mã SV");

        isValid = false;
    }

   
    if(fullName.value.trim() === ""){

        setError("fullNameError", "Không được để trống họ tên");

        isValid = false;
    }

 
    if(birthDate.value === ""){

        setError("birthDateError", "Chọn ngày sinh");

        isValid = false;
    }

   
    if(className.value.trim() === ""){

        setError("classNameError", "Không được để trống lớp");

        isValid = false;
    }


    if(score.value === ""){

        setError("scoreError", "Nhập điểm");

        isValid = false;

    }else if(score.value < 0 || score.value > 10){

        setError("scoreError", "Điểm từ 0 -> 10");

        isValid = false;
    }

 
    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){

        setError("emailError", "Không được để trống email");

        isValid = false;

    }else if(!emailRegex.test(email.value)){

        setError("emailError", "Email không hợp lệ");

        isValid = false;
    }

    return isValid;
}



function setError(id, message){

    document.getElementById(id).innerText = message;
}

function clearErrors(){

    const errors = document.querySelectorAll(".error");

    errors.forEach(error => {

        error.innerText = "";
    });
}


renderStudents();

updateStatistics();