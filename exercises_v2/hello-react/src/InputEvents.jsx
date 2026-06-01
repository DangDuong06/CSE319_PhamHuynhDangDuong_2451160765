// src/InputEvents.jsx
import { useState } from "react";

function InputEvents() {
    // --- Dữ liệu Code mẫu ---
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    
    // --- Dữ liệu Thử thách ---
    const [email, setEmail] = useState(""); // Thử thách 1: Lưu trữ email
    const [wordCount, setWordCount] = useState(0); // Thử thách 3: Đếm số từ

    // Hàm xử lý thay đổi ô nhập văn bản (Code mẫu + Thử thách 3)
    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
        setCharCount(newValue.length);

        // Thử thách 3: Thuật toán đếm số từ (Tách chuỗi bởi khoảng trắng và lọc bỏ khoảng trắng thừa)
        const words = newValue.trim().split(/\s+/);
        setWordCount(newValue.trim() === "" ? 0 : words.length);
    }

    // Thử thách 1: Kiểm tra email hợp lệ (có chữ @)
    const isEmailValid = email.includes("@");

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            
            {/* 1. KHU VỰC CODE MẪU */}
            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "6px", marginBottom: "20px" }}>
                <h2>📚 Code mẫu: Input Events</h2>
                
                <input 
                    value={text}
                    onChange={handleChange}
                    placeholder="Nhập gì đó..."
                    maxLength={100}
                    style={{ padding: "8px", width: "90%", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                
                <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#555" }}>
                    Ký tự: <strong>{charCount}/100</strong> | Số từ: <strong style={{ color: "#007bff" }}>{wordCount} từ</strong>
                </p>
                <p>Bạn đang nhập: <em>{text || "(Trống)"}</em></p>
                
                {charCount > 80 && (
                    <p style={{ color: "red", fontWeight: "bold" }}>⚠️ Sắp hết ký tự cho phép!</p>
                )}
            </div>

            {/* 2. KHU VỰC THỬ THÁCH */}
            <div style={{ background: "#e8f5e9", padding: "15px", borderRadius: "6px" }}>
                <h2>🎯 Kết quả Thử thách Bài 5.2</h2>

                {/* Thử thách 1: Ô nhập Email với Realtime Validation */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>1. Kiểm tra Email:</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập địa chỉ email..."
                        style={{ padding: "8px", width: "90%", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    {email && (
                        <p style={{ margin: "5px 0 0 0", fontSize: "0.85rem", fontWeight: "bold", color: isEmailValid ? "green" : "red" }}>
                            {isEmailValid ? "✅ Định dạng đúng (đã có '@')" : "❌ Định dạng sai (thiếu ký tự '@')"}
                        </p>
                    )}
                </div>

                {/* Thử thách 2: Preview Realtime kết hợp giao diện thẻ */}
                <div style={{ background: "white", padding: "10px", borderRadius: "4px", border: "1px dashed #2e7d32" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "#666", fontWeight: "bold", marginBottom: "5px" }}>
                        2. Thẻ xem trước kết quả (Preview):
                    </label>
                    <p style={{ margin: "3px 0" }}><strong>Nội dung:</strong> {text || "..."}</p>
                    <p style={{ margin: "3px 0" }}><strong>Liên hệ:</strong> {email || "..."}</p>
                </div>
            </div>

        </div>
    );
}

export default InputEvents;