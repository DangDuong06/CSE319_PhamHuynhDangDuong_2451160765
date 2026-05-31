// src/GoodCounter.jsx
import { useState } from "react"; 

function GoodCounter() {
    const [count, setCount] = useState(0); 
    
    function handleClick() {
        setCount(count + 1);  
    }
    
    return (
        <div style={{ padding: "20px", border: "2px solid #2ecc71", margin: "20px" }}>
            <h2>✅ Counter "tốt" (dùng useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "green" }}>
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT ngay lập tức![cite: 3]
            </p>
        </div>
    );
}

export default GoodCounter;