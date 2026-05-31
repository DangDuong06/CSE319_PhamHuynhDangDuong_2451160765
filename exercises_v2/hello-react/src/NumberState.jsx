// src/NumberState.jsx
import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    // --- Thử thách 2 & 3: Xử lý hiển thị tính chất số và màu sắc sống động ---
    let tinhChat = "Số không";
    let mauSac = "black";

    if (count > 0) {
        tinhChat = "Số dương";
        mauSac = "green";
    } else if (count < 0) {
        tinhChat = "Số âm";
        mauSac = "red";
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" }}>
            <h2>Bài 4.1: Bộ đếm nâng cao</h2>
            
            {/* Hiển thị số với màu thay đổi động */}
            <h1 style={{ color: mauSac, fontSize: "3rem", margin: "10px 0" }}>{count}</h1>
            
            {/* Hiển thị tính chất số */}
            <p style={{ fontWeight: "bold", color: "#555" }}>Trạng thái: {tinhChat}</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
                <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button style={{ padding: "10px" }} onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                
                {/* Thử thách 1: Thêm nút tăng 5 */}
                <button style={{ padding: "10px", background: "#e3f2fd" }} onClick={() => setCount(count + 5)}>Tăng (+5)</button>
                <button style={{ padding: "10px" }} onClick={() => setCount(count * 2)}>Nhân đôi</button>
            </div>

            <button style={{ width: "100%", marginTop: "10px", padding: "10px", background: "#f44336", color: "white", border: "none", borderRadius: "4px" }} onClick={() => setCount(0)}>
                Reset bộ đếm
            </button>
        </div>
    );
}

export default NumberState;