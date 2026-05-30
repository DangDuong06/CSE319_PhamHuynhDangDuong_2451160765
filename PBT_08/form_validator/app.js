const form = document.querySelector("#registerForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector("#submitBtn");

const nameIcon = document.querySelector("#nameIcon");
const emailIcon = document.querySelector("#emailIcon");
const passwordIcon = document.querySelector("#passwordIcon");
const confirmIcon = document.querySelector("#confirmIcon");
const phoneIcon = document.querySelector("#phoneIcon");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");
const phoneError = document.querySelector("#phoneError");
const strengthBar = document.querySelector("#strengthBar");

const successModal = document.querySelector("#successModal");
const closeModal = document.querySelector("#closeModal");
const okBtn = document.querySelector("#okBtn");
const modalInfo = document.querySelector("#modalInfo");

const state = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false
};

function setFieldStatus(input, icon, message, isValid, text) {
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);

    icon.textContent = isValid ? "✅" : "❌";
    icon.classList.toggle("valid", isValid);
    icon.classList.toggle("invalid", !isValid);

    message.textContent = text;
    message.classList.toggle("success", isValid);
    message.classList.toggle("error", !isValid);
}

function updateSubmitButton() {
    const allValid = Object.values(state).every(value => value === true);
    submitBtn.disabled = !allValid;
}

function validateName() {
    const value = fullName.value.trim();
    const isValid = value.length >= 2 && value.length <= 50;

    state.name = isValid;
    setFieldStatus(
        fullName,
        nameIcon,
        nameError,
        isValid,
        isValid ? "Tên hợp lệ." : "Tên phải có từ 2 đến 50 ký tự."
    );
    updateSubmitButton();
}

function validateEmail() {
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let message = "Email hợp lệ.";
    let isValid = true;

    if (value === "") {
        isValid = false;
        message = "Email không được để trống.";
    } else if (!emailRegex.test(value)) {
        isValid = false;
        message = "Email phải đúng định dạng, ví dụ: example@gmail.com.";
    }

    state.email = isValid;
    setFieldStatus(email, emailIcon, emailError, isValid, message);
    updateSubmitButton();
}

function getPasswordStrength(value) {
    const hasMinLength = value.length >= 8;
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    if (!hasMinLength) {
        return {
            level: "weak",
            valid: false,
            text: "Yếu: Mật khẩu phải có ít nhất 8 ký tự."
        };
    }

    if (hasLower && hasUpper && hasNumber && hasSpecial) {
        return {
            level: "strong",
            valid: true,
            text: "Mạnh: Có chữ hoa, chữ thường, số và ký tự đặc biệt."
        };
    }

    if ((hasLower || hasUpper) && hasNumber) {
        return {
            level: "medium",
            valid: true,
            text: "Trung bình: Có ít nhất 8 ký tự, gồm chữ và số."
        };
    }

    return {
        level: "weak",
        valid: false,
        text: "Yếu: Cần có cả chữ và số."
    };
}

function validatePassword() {
    const result = getPasswordStrength(password.value);

    strengthBar.className = "strength-bar";
    if (password.value.length > 0) {
        strengthBar.classList.add(result.level);
    }

    state.password = result.valid;
    setFieldStatus(password, passwordIcon, passwordError, result.valid, result.text);
    validateConfirmPassword();
    updateSubmitButton();
}

function validateConfirmPassword() {
    const isValid = confirmPassword.value !== "" && confirmPassword.value === password.value;

    state.confirmPassword = isValid;
    setFieldStatus(
        confirmPassword,
        confirmIcon,
        confirmError,
        isValid,
        isValid ? "Mật khẩu xác nhận khớp." : "Mật khẩu xác nhận chưa khớp."
    );
    updateSubmitButton();
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 4) {
        return digits;
    }

    if (digits.length <= 7) {
        return digits.slice(0, 4) + "-" + digits.slice(4);
    }

    return digits.slice(0, 4) + "-" + digits.slice(4, 7) + "-" + digits.slice(7);
}

function validatePhone() {
    phone.value = formatPhone(phone.value);
    const digits = phone.value.replace(/\D/g, "");
    const isValid = digits.length === 10;

    state.phone = isValid;
    setFieldStatus(
        phone,
        phoneIcon,
        phoneError,
        isValid,
        isValid ? "Số điện thoại hợp lệ." : "Số điện thoại phải gồm đúng 10 chữ số."
    );
    updateSubmitButton();
}

function openModal() {
    modalInfo.textContent = "";

    const info = document.createElement("div");
    const safePassword = "*".repeat(password.value.length);

    info.innerHTML = `
        <p><strong>Họ tên:</strong> ${fullName.value.trim()}</p>
        <p><strong>Email:</strong> ${email.value.trim()}</p>
        <p><strong>Mật khẩu:</strong> ${safePassword}</p>
        <p><strong>Số điện thoại:</strong> ${phone.value}</p>
    `;

    modalInfo.appendChild(info);
    successModal.classList.remove("hidden");
}

function closeSuccessModal() {
    successModal.classList.add("hidden");
}

fullName.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);
phone.addEventListener("input", validatePhone);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePhone();

    if (!submitBtn.disabled) {
        openModal();
        form.reset();
        Object.keys(state).forEach(key => state[key] = false);
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("valid", "invalid");
        });
        document.querySelectorAll(".status-icon").forEach(icon => {
            icon.textContent = "○";
            icon.classList.remove("valid", "invalid");
        });
        strengthBar.className = "strength-bar";
        updateSubmitButton();
    }
});

closeModal.addEventListener("click", closeSuccessModal);
okBtn.addEventListener("click", closeSuccessModal);

successModal.addEventListener("click", function (event) {
    if (event.target === successModal) {
        closeSuccessModal();
    }
});
