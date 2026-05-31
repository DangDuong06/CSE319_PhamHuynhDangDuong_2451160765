// src/LifecycleDemo.jsx
function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!"); 
    
    return (
        <div style={{ padding: "20px", border: "2px solid #3498db", margin: "20px" }}>
            <h2>Bài 1.1: Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render MỘT lần khi khởi tạo</p>
        </div>
    );
}

export default LifecycleDemo; 