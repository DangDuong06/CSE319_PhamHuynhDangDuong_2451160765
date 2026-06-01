// src/ClickEvents.jsx
import { useState } from "react";

function ClickEvents() {
    // --- Dữ liệu Code mẫu ---
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    
    // --- Dữ liệu Thử thách ---
    const [bgColor, setBgColor] = useState("#f0f0f0"); // Thử thách 1: Màu ngẫu nhiên
    const [btn1Count, setBtn1Count] = useState(0);    // Thử thách 2: Đếm nút riêng biệt 1
    const [btn2Count, setBtn2Count] = useState(0);    // Thử thách 2: Đếm nút riêng biệt 2
    const [isLiked, setIsLiked] = useState(false);    // Thử thách 3: Nút Like toggle

    // Hàm xử lý click code mẫu
    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }
    
    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }

    // Thử thách 1: Hàm tạo màu HEX ngẫu nhiên
    function changeRandomColor() {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        setBgColor(randomColor);
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            {/* 1. KHU VỰC CODE MẪU */}
            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "6px", marginBottom: "20px" }}>
                <h2>📚 Code mẫu: Click Events</h2>
                <p>Thông điệp: <strong>{message}</strong></p>
                <p>Số lần click tổng: {clickCount}</p>
                
                <button onClick={handleClick} style={{ padding: "8px 12px", marginRight: "10px" }}>Click me!</button>
                <button onClick={handleReset} style={{ padding: "8px 12px" }}>Reset</button>
            </div>

            {/* 2. KHU VỰC THỬ THÁCH */}
            <div style={{ background: "#e3f2fd", padding: "15px", borderRadius: "6px" }}>
                <h2>🎯 Kết quả Thử thách Bài 5.1</h2>

                {/* Thử thách 1 */}
                <div style={{ backgroundColor: bgColor, padding: "15px", borderRadius: "4px", textAlign: "center", marginBottom: "15px", transition: "background 0.2s" }}>
                    <p style={{ margin: "0 0 10px 0" }}>Màu nền hiện tại: <strong>{bgColor}</strong></p>
                    <button onClick={changeRandomColor} style={{ padding: "6px 12px", cursor: "pointer" }}>Đổi màu ngẫu nhiên</button>
                </div>

                {/* Thử thách 2 */}
                <div style={{ marginBottom: "15px" }}>
                    <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Đếm lượt click độc lập:</p>
                    <button onClick={() => setBtn1Count(btn1Count + 1)} style={{ padding: "6px 12px", marginRight: "10px" }}>
                        Nút A ({btn1Count})
                    </button>
                    <button onClick={() => setBtn2Count(btn2Count + 1)} style={{ padding: "6px 12px" }}>
                        Nút B ({btn2Count})
                    </button>
                </div>

                {/* Thử thách 3 */}
                <div>
                    <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Tương tác nhanh:</p>
                    <button 
                        onClick={() => setIsLiked(!isLiked)} 
                        style={{ padding: "8px 15px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", background: isLiked ? "#ffebee" : "#fff", border: "1px solid #ccc", borderRadius: "4px" }}
                    >
                        <span>{isLiked ? "❤️ Đã thích" : "🤍 Thích"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClickEvents;