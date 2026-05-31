// src/StringState.jsx
import { useState } from "react";

function StringState() {
    // --- Dữ liệu Code mẫu ---
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // --- Dữ liệu Thử thách ---
    const [password, setPassword] = useState(""); // Lưu trữ mật khẩu
    const [showPassword, setShowPassword] = useState(false); // Trạng thái ẩn/hiện mật khẩu

    // Thử thách 2: Kiểm tra email hợp lệ (có chứa ký tự '@')
    const isEmailValid = email.includes("@");

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 4.2: Quản lý Ô nhập liệu (String State)</h2>
            
            {/* 1. Ô nhập Tên */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Họ và tên:</label>
                <input 
                    style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                    maxLength={100} // Giới hạn tối đa 100 ký tự
                />
                {/* Thử thách 1: Đếm số ký tự đã nhập */}
                <div style={{ textAlign: "right", fontSize: "0.8rem", color: "#777", marginTop: "3px" }}>
                    Độ dài: {name.length}/100 ký tự
                </div>
            </div>
            
            {/* 2. Ô nhập Email */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email:</label>
                <input 
                    style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                />
                {/* Thử thách 2: Hiển thị trạng thái kiểm tra Email */}
                {email && (
                    <div style={{ fontSize: "0.85rem", marginTop: "5px", fontWeight: "bold", color: isEmailValid ? "green" : "red" }}>
                        {isEmailValid ? "✅ Email hợp lệ (đã có ký tự @)" : "❌ Email không hợp lệ (thiếu ký tự @)"}
                    </div>
                )}
            </div>

            {/* 3. Thử thách 3: Ô nhập Mật khẩu ẩn/hiện */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Mật khẩu:</label>
                <div style={{ display: "flex", gap: "5px" }}>
                    <input 
                        style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                        type={showPassword ? "text" : "password"} // Thay đổi type động dựa trên state boolean
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                    />
                    <button 
                        type="button"
                        style={{ padding: "8px 12px", cursor: "pointer", background: "#f0f0f0", border: "1px solid #ccc", borderRadius: "4px" }}
                        onClick={() => setShowPassword(!showPassword)} // Đảo ngược trạng thái true/false
                    >
                        {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                    </button>
                </div>
            </div>

            <hr style={{ border: "0", borderTop: "1px dashed #ccc", margin: "20px 0" }} />
            
            {/* Preview Realtime của code mẫu */}
            <h3>Thông tin đã nhập:</h3>
            <p>Tên: {name || "(chưa nhập)"}</p>
            <p>Email: {email || "(chưa nhập)"}</p>
            
            {name && (
                <div style={{ background: "#e8f5e9", padding: "10px", borderRadius: "4px", border: "1px solid #c8e6c9" }}>
                    Xin chào <strong>{name}</strong>! Email của bạn là <em>{email || "..."}</em>
                </div>
            )}
        </div>
    );
}

export default StringState;