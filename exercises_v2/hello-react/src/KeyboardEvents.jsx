// src/KeyboardEvents.jsx
import { useState, useEffect } from "react";

function KeyboardEvents() {
    // --- Dữ liệu Code mẫu ---
    const [lastKey, setLastKey] = useState("");
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    // --- Dữ liệu Thử thách ---
    // Thử thách 1: Game đoán phím
    const keysPool = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const [targetKey, setTargetKey] = useState("g"); // Phím mẫu cần đoán
    const [gameMessage, setGameMessage] = useState("Hãy nhấn phím trên bàn phím để bắt đầu!");
    
    // Thử thách 2: Ô vuông di chuyển (Lưu tọa độ x, y)
    const [boxPosition, setBoxPosition] = useState({ x: 170, y: 40 });
    
    // Thử thách 3: Đổi màu nền bằng phím tắt
    const [isCustomBg, setIsCustomBg] = useState(false);

    // Xử lý phím hệ thống (Code mẫu + Lồng ghép Thử thách 1 & Thử thách 3)
    function handleKeyDown(event) {
        setLastKey(event.key);
        
        // Cập nhật Log (Code mẫu)
        setLog(prev => [...prev.slice(-4), event.key]);

        // Thử thách 3: Bắt tổ hợp phím tắt Ctrl + D (Nhớ dùng event.preventDefault để tránh trùng phím tắt bookmark trình duyệt)
        if (event.ctrlKey && event.key.toLowerCase() === "d") {
            event.preventDefault();
            setIsCustomBg(!isCustomBg);
            return;
        }

        // Thử thách 1: Logic kiểm tra Game đoán phím
        if (event.key.toLowerCase() === targetKey) {
            setGameMessage("🎉 CHUẨN XÁC! Bạn đoán đúng rồi.");
            // Đổi sang một phím ngẫu nhiên mới trong Pool
            const nextKey = keysPool[Math.floor(Math.random() * keysPool.length)];
            setTargetKey(nextKey);
        } else {
            // Không tính các phím điều hướng hệ thống vào thông điệp đoán sai
            if(event.key.length === 1) {
                setGameMessage(`❌ Sai rồi! Bạn vừa bấm '${event.key}', phím cần tìm là '${targetKey}'.`);
            }
        }

        // Thử thách 2: Di chuyển ô vuông bằng phím mũi tên (↑ ↓ ← →)
        const step = 15; // Khoảng cách di chuyển mỗi lần bấm
        if (event.key === "ArrowUp") {
            event.preventDefault(); // Ngăn cuộn trang web mặc định
            setBoxPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setBoxPosition(prev => ({ ...prev, y: Math.max(0, prev.y + step) }));
        }
        if (event.key === "ArrowLeft") {
            setBoxPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
        }
        if (event.key === "ArrowRight") {
            setBoxPosition(prev => ({ ...prev, x: Math.min(340, prev.x + step) }));
        }
    }
    
    // Xử lý phím riêng biệt trong ô Input (Code mẫu)
    function handleInputKeyDown(event) {
        if (event.key === "Enter") {
            if (inputValue.trim() !== "") {
                alert("Hệ thống nhận văn bản: " + inputValue);
                setInputValue("");
            }
        }
        if (event.key === "Escape") {
            setInputValue("");
        }
    }
    
    return (
        <div 
            style={{ 
                padding: "20px", 
                fontFamily: "sans-serif", 
                maxWidth: "520px", 
                margin: "20px auto", 
                border: "1px solid #ddd", 
                borderRadius: "8px",
                backgroundColor: isCustomBg ? "#ffe0b2" : "white", // Thử thách 3
                outline: "none" // Xóa viền đen mặc định khi div nhận focus
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}  // BẮT BUỘC để khối div có thể nhận diện phím bấm toàn cục
        >
            {/* 1. KHU VỰC CODE MẪU */}
            <div style={{ background: "rgba(0,0,0,0.03)", padding: "15px", borderRadius: "6px", marginBottom: "20px" }}>
                <h2>📚 Code mẫu: Keyboard Events</h2>
                <p style={{ color: "red", fontSize: "0.85rem", fontWeight: "bold" }}>⚠️ MẸO: Click chuột vào vùng trống bất kỳ của trang này trước khi bấm phím toàn cục!</p>
                <p>Phím cuối cùng bấm: <strong>{lastKey || "Chưa nhấn"}</strong></p>
                <p>Nhật ký chuỗi log: {log.join(" → ")}</p>
                
                <hr style={{ margin: "12px 0", border: "0", borderTop: "1px solid #ccc" }} />
                
                <h3>Nhập liệu rồi nhấn Enter:</h3>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Nhập nội dung rồi nhấn Enter..."
                    style={{ padding: "8px", width: "85%", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>Nhấn phím <strong>Escape</strong> để xóa nhanh</p>
            </div>

            {/* 2. KHU VỰC THỬ THÁCH ĐỒNG THỜI */}
            <div style={{ background: "#e0f7fa", padding: "15px", borderRadius: "6px" }}>
                <h2>🎯 Kết quả Thử thách Bài 5.3</h2>
                <p style={{ fontSize: "0.85rem", color: "#e65100", fontWeight: "bold" }}>💡 Thử thách 3: Thử nhấn tổ hợp phím [Ctrl + D] để đổi màu nền!</p>

                {/* Thử thách 1 */}
                <div style={{ background: "white", padding: "10px", borderRadius: "4px", marginBottom: "15px", border: "1px solid #b2ebf2" }}>
                    <h4>🎮 1. Trò chơi đoán phím chữ:</h4>
                    <p>Hãy bấm phím này trên bàn phím: <span style={{ fontSize: "1.3rem", color: "purple", fontWeight: "bold", textTransform: "uppercase" }}>{targetKey}</span></p>
                    <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#555" }}>Thông báo game: {gameMessage}</p>
                </div>

                {/* Thử thách 2 */}
                <h4>🕹️ 2. Điều khiển ô vuông di chuyển:</h4>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>Sử dụng 4 phím mũi tên (↑ ↓ ← →) trên bàn phím để di chuyển khối vuông bên dưới</p>
                <div style={{ width: "100%", height: "130px", background: "#fff", border: "1px solid #ccc", position: "relative", borderRadius: "4px", overflow: "hidden" }}>
                    <div 
                        style={{ 
                            width: "30px", 
                            height: "30px", 
                            background: "#00acc1", 
                            position: "absolute", 
                            left: `${boxPosition.x}px`, 
                            top: `${boxPosition.y}px`, 
                            borderRadius: "4px",
                            transition: "all 0.05s linear", // Hiệu ứng di chuyển mượt mà
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "0.8rem"
                        }}
                    >
                        🚀
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyboardEvents;