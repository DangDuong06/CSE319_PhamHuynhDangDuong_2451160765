// src/MultipleStates.jsx
import { useState } from "react";

function MultipleStates() {
    // --- Dữ liệu Code mẫu + Thử thách 1 ---
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState(""); // Thử thách 1: Thêm trường Email
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    function handleSubmit() {
        // Kiểm tra trống dữ liệu cơ bản
        if (name.trim() === "" || age === "" || email.trim() === "") {
            alert("Vui lòng nhập đầy đủ tất cả các trường thông tin!");
            return;
        }

        // Thử thách 2: Kiểm tra điều kiện tuổi (phải nằm trong khoảng từ 1 đến 99)
        const ageNumber = parseInt(age);
        if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber >= 100) {
            alert("Mã lỗi: Tuổi không hợp lệ! Tuổi nhập vào phải lớn hơn 0 và nhỏ hơn 100.");
            return;
        }

        // Kiểm tra định dạng email cơ bản có chứa dấu @ không
        if (!email.includes("@")) {
            alert("Định dạng Email không hợp lệ (Thiếu ký tự '@')!");
            return;
        }

        setSubmitted(true);
    }
    
    function handleReset() {
        setName("");
        setAge("");
        setEmail(""); // Reset trường email
        setIsStudent(false);
        setSubmitted(false);
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 4.4: Xử lý Form với nhiều trạng thái</h2>
            
            {!submitted ? (
                <div>
                    {/* Ô nhập tên */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Tên: </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    {/* Ô nhập tuổi */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Tuổi: </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    {/* Thử thách 1: Ô nhập Email */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email: </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                        />
                    </div>
                    
                    {/* Checkbox sinh viên */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ cursor: "pointer", fontWeight: "bold" }}>
                            <input 
                                style={{ marginRight: "8px" }}
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                            />
                            Là sinh viên
                        </label>
                    </div>
                    
                    <button 
                        style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}
                        onClick={handleSubmit}
                    >
                        Đăng ký thành viên
                    </button>
                </div>
            ) : (
                // Khu vực hiển thị khi form đã submit thành công
                <div style={{ background: "#d4edda", padding: "20px", borderRadius: "6px", border: "1px solid #c3e6cb", color: "#155724" }}>
                    <h3>✅ Đăng ký hệ thống thành công!</h3>
                    
                    {/* Thử thách 3: Hiển thị lời chào định danh cá nhân */}
                    <h4 style={{ margin: "10px 0", color: "#1b5e20" }}>Xin chào học viên {name}! 👋</h4>
                    
                    <p style={{ margin: "5px 0" }}><strong>Tuổi hiện tại:</strong> {age} tuổi</p>
                    <p style={{ margin: "5px 0" }}><strong>Hộp thư điện tử:</strong> {email}</p>
                    <p style={{ margin: "5px 0" }}><strong>Trạng thái học tập:</strong> {isStudent ? "Đang là sinh viên trường" : "Đã đi làm / Khác"}</p>
                    
                    <button 
                        style={{ marginTop: "15px", width: "100%", padding: "8px", background: "#155724", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        onClick={handleReset}
                    >
                        Đăng ký lại tài khoản mới
                    </button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;