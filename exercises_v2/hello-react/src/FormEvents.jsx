// src/FormEvents.jsx
import { useState } from "react";

function FormEvents() {
    // --- Dữ liệu Code mẫu + Thử thách gom chung vào 1 Object quản lý ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",       // Thử thách 2: Thêm trường mật khẩu
        confirmPassword: "",// Thử thách 2: Thêm trường xác nhận mật khẩu
        message: ""
    });
    
    const [submitted, setSubmitted] = useState(false);
    
    // Thử thách 3: Khai báo State quản lý các thông báo lỗi Realtime
    const [errors, setErrors] = useState({});

    // Hàm xử lý thay đổi dữ liệu đồng loạt cho Form (Computed Property Name)
    function handleChange(event) {
        const { name, value } = event.target;
        
        // Cập nhật giá trị vào Object Form
        const updatedData = {
            ...formData,
            [name]: value
        };
        setFormData(updatedData);

        // --- Thử thách 3: Thực hiện kiểm lỗi Validate Realtime ngay khi gõ phím ---
        let currentErrors = { ...errors };

        if (name === "email") {
            // Thử thách 1: Kiểm tra email có chứa ký tự @ không
            if (value && !value.includes("@")) {
                currentErrors.email = "❌ Định dạng Email không hợp lệ (Phải có ký tự '@')!";
            } else {
                delete currentErrors.email;
            }
        }

        if (name === "confirmPassword") {
            // Thử thách 2: Kiểm tra mật khẩu nhập lại có khớp không
            if (value !== updatedData.password) {
                currentErrors.confirmPassword = "❌ Mật khẩu xác nhận không khớp với mật khẩu đã nhập!";
            } else {
                delete currentErrors.confirmPassword;
            }
        }

        if (name === "password") {
            if (updatedData.confirmPassword && value !== updatedData.confirmPassword) {
                currentErrors.confirmPassword = "❌ Mật khẩu xác nhận không khớp với mật khẩu đã nhập!";
            } else {
                delete currentErrors.confirmPassword;
            }
        }

        setErrors(currentErrors);
    }
    
    // Hàm xử lý khi gửi Form
    function handleSubmit(event) {
        event.preventDefault(); // CHẶN reload trang web mặc định!
        
        // Kiểm tra trống dữ liệu cơ bản
        if (formData.name === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "") {
            alert("Hệ thống: Vui lòng điền đầy đủ các thông tin bắt buộc!");
            return;
        }
        
        // Chặn submit nếu form vẫn còn tồn tại thông báo lỗi từ Realtime Validate
        if (Object.keys(errors).length > 0) {
            alert("Hệ thống: Vui lòng sửa các lỗi hiển thị trên form trước khi gửi dữ liệu!");
            return;
        }
        
        setSubmitted(true);
    }
    
    // Hàm xử lý xóa sạch dữ liệu Form
    function handleReset() {
        setFormData({ name: "", email: "", password: "", confirmPassword: "", message: "" });
        setErrors({});
        setSubmitted(false);
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "480px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 5.4: Quản lý Biểu mẫu (Form Events)</h2>
            
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    
                    {/* Ô nhập Tên */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Tên học viên (*): </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    {/* Ô nhập Email */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Email (*): </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: errors.email ? "1px solid red" : "1px solid #ccc" }}
                            name="email"
                            type="text" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {/* Thử thách 3: Hiển thị lỗi realtime của Email */}
                        {errors.email && <p style={{ color: "red", margin: "4px 0 0 0", fontSize: "0.8rem" }}>{errors.email}</p>}
                    </div>

                    {/* Thử thách 2: Thêm trường Mật khẩu */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Mật khẩu (*): </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Thử thách 2: Thêm trường Xác nhận mật khẩu */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Xác nhận mật khẩu (*): </label>
                        <input 
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: errors.confirmPassword ? "1px solid red" : "1px solid #ccc" }}
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {/* Thử thách 3: Hiển thị lỗi realtime của Xác nhận mật khẩu */}
                        {errors.confirmPassword && <p style={{ color: "red", margin: "4px 0 0 0", fontSize: "0.8rem" }}>{errors.confirmPassword}</p>}
                    </div>
                    
                    {/* Ô nhập Tin nhắn */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Ghi chú tin nhắn: </label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                    </div>
                    
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit" style={{ flex: 1, padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>Gửi đăng ký</button>
                        <button type="button" onClick={handleReset} style={{ padding: "10px 15px", background: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Xóa sạch</button>
                    </div>
                </form>
            ) : (
                // Khối thông tin kết quả hiển thị sau khi submit thành công
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "6px", border: "1px solid #c3e6cb", color: "#155724" }}>
                    <h3>✅ Đã gửi dữ liệu thành công!</h3>
                    <p><strong>Học viên:</strong> {formData.name}</p>
                    <p><strong>Hộp thư điện tử:</strong> {formData.email}</p>
                    <p><strong>Mật khẩu bảo mật:</strong> ****** (Đã mã hóa dữ liệu)</p>
                    <p><strong>Nội dung tin nhắn:</strong> {formData.message || "(Trống)"}</p>
                    <button onClick={handleReset} style={{ marginTop: "10px", padding: "6px 12px", cursor: "pointer", background: "#155724", color: "white", border: "none", borderRadius: "4px" }}>Gửi lại form mới</button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;