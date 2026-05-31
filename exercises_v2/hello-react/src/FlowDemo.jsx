// src/FlowDemo.jsx
import { useState } from "react"; 

function FlowDemo() {
   
    console.log("🔄 Component FlowDemo render!"); 
    
    const [step, setStep] = useState(1); // Khởi tạo step bằng 1[cite: 3]
    
    return (
        <div style={{ padding: "20px", border: "2px solid #9b59b6", margin: "20px", fontFamily: "sans-serif" }}>
            <h2>Bài 1.3: Luồng hoạt động (Flow Demo)</h2>
            <p style={{ fontWeight: "bold" }}>Bước hiện tại: {step}</p>
            
            <button onClick={() => setStep(step + 1)} style={{ marginRight: "10px", padding: "5px 10px" }}>
                Bước tiếp theo →
            </button>
            
            <button onClick={() => setStep(1)} style={{ padding: "5px 10px" }}>
                Quay lại đầu
            </button>
            
            <div style={{ marginTop: "20px", padding: "15px", background: "#f0f0f0", borderRadius: "5px" }}>
                {step === 1 && <p>👋 Bước 1: Xin chào Đăng Dương!</p>}
                {step === 2 && <p>📖 Bước 2: Bạn đang học React cơ bản</p>}
                {step === 3 && <p>🎯 Bước 3: Bạn đã hiểu cách hoạt động của useState</p>}
                {step === 4 && <p>🎉 Bước 4: Hoàn thành xuất sắc Tier 1!</p>}
                {step > 4 && <p>🚀 Bạn đã đi quá giới hạn bài học, hãy bấm Quay lại đầu!</p>}
            </div>
        </div>
    );
}

export default FlowDemo; //[cite: 3]