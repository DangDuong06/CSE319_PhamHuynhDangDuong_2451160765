// src/BooleanState.jsx
import { useState } from "react";

function BooleanState() {
    // --- Dữ liệu Code mẫu ---
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // --- Dữ liệu Thử thách ---
    const [showPass, setShowPass] = useState(false); // Thử thách 1: Ẩn/hiện mật khẩu mẫu
    const [isOpenAccordion, setIsOpenAccordion] = useState(false); // Thử thách 2: Cấu trúc Accordion
    const [isLightOn, setIsLightOn] = useState(false); // Thử thách 3: Công tắc bóng đèn

    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        minHeight: "200px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        transition: "all 0.3s ease" // Hiệu ứng đổi màu mượt mà
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px", margin: "20px auto" }}>
            
            {/* ================= KHU VỰC CODE MẪU ================= */}
            <div style={themeStyle}>
                <h2>📚 Code mẫu: Toggle Demo</h2>
                
                {/* Toggle ẩn/hiện */}
                <button onClick={() => setIsVisible(!isVisible)} style={{ padding: "8px", marginRight: "10px" }}>
                    {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
                </button>
                
                {isVisible && (
                    <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd", background: "rgba(0,0,0,0.05)" }}>
                        <p>Đây là nội dung có thể ẩn/hiện!</p>
                    </div>
                )}
                
                <hr style={{ margin: "15px 0" }} />
                
                {/* Toggle dark mode */}
                <button onClick={() => setIsDarkMode(!isDarkMode)} style={{ padding: "8px", marginRight: "10px" }}>
                    {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                
                {/* Toggle like */}
                <button onClick={() => setIsLiked(!isLiked)} style={{ padding: "8px" }}>
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
            </div>

            {/* ================= KHU VỰC THỬ THÁCH ================= */}
            <div style={{ background: "#f1f8ff", padding: "20px", borderRadius: "8px", marginTop: "20px", border: "1px solid #b3d7ff", color: "#333" }}>
                <h2>🎯 Kết quả Thử thách Bài 4.3</h2>

                {/* Thử thách 1: Nút ẩn/hiện input mật khẩu độc lập */}
                <div style={{ marginBottom: "20px" }}>
                    <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>1. Demo Ẩn/Hiện mật khẩu nhanh:</p>
                    <div style={{ display: "flex", gap: "5px" }}>
                        <input type={showPass ? "text" : "password"} defaultValue="duong2026" style={{ padding: "6px", flex: 1 }} />
                        <button onClick={() => setShowPass(!showPass)} style={{ padding: "6px" }}>
                            {showPass ? "🔒 Khóa" : "🔓 Xem"}
                        </button>
                    </div>
                </div>

                {/* Thử thách 2: Cấu trúc Accordion mở/đóng */}
                <div style={{ marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", background: "white" }}>
                    <div 
                        onClick={() => setIsOpenAccordion(!isOpenAccordion)} 
                        style={{ padding: "10px", background: "#e2e2e2", cursor: "pointer", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}
                    >
                        <span>📌 Câu hỏi: Học React tại FIT TLU có khó không?</span>
                        <span>{isOpenAccordion ? "🔼" : "🔽"}</span>
                    </div>
                    {isOpenAccordion && (
                        <div style={{ padding: "10px", borderTop: "1px solid #ccc", fontSize: "0.95rem", color: "#555" }}>
                            Trả lời: Không khó nếu bạn kiên trì làm bài tập thực hành theo từng Tier từ 0 đến 7 của giáo trình!
                        </div>
                    )}
                </div>

                {/* Thử thách 3: Icon bóng đèn thông minh */}
                <div style={{ textAlign: "center", padding: "10px", background: isLightOn ? "#fffde7" : "#fafafa", borderRadius: "6px", border: "1px dashed #ccc" }}>
                    <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>3. Điều khiển thiết bị:</p>
                    <div style={{ fontSize: "3rem", filter: isLightOn ? "drop-shadow(0 0 10px rgba(255,235,59,1))" : "none" }}>
                        {isLightOn ? "💡" : "🔌"}
                    </div>
                    <button 
                        onClick={() => setIsLightOn(!isLightOn)} 
                        style={{ marginTop: "10px", padding: "6px 15px", cursor: "pointer", background: isLightOn ? "#fbc02d" : "#9e9e9e", color: "white", border: "none", borderRadius: "4px" }}
                    >
                        {isLightOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}
                    </button>
                </div>

            </div>

        </div>
    );
}

export default BooleanState;