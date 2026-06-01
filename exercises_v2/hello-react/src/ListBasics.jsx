// src/ListBasics.jsx
import { useState } from "react";

function ListBasics() {
    // --- Dữ liệu Code mẫu ---
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    
    // --- Thử thách 3: Tính tuổi trung bình bằng phương thức reduce ---
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = (totalAge / students.length).toFixed(1);

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 6.1: Khai thác Mảng dữ liệu cơ bản</h2>
            
            <h3>Danh sách trái cây</h3>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            
            <h3>Danh sách sinh viên</h3>
            {students.map((student, index) => {
                // Thử thách 2: Kiểm tra sinh viên có tuổi >= 20 để đổi màu chữ sang màu xanh
                const isAdult = student.age >= 20;

                return (
                    <div 
                        key={student.id} 
                        style={{ 
                            padding: "10px", 
                            margin: "8px 0",
                            background: "#f9f9f9",
                            borderRadius: "4px",
                            borderLeft: isAdult ? "4px solid #2ecc71" : "4px solid #95a5a6",
                            // Đổi màu chữ theo điều kiện thử thách 2
                            color: isAdult ? "#27ae60" : "#333",
                            fontWeight: isAdult ? "bold" : "normal"
                        }}
                    >
                        {/* Thử thách 1: Hiển thị STT dựa vào tham số index (bắt đầu từ 1) */}
                        <span>[{index + 1}] {student.name} - {student.age} tuổi</span>
                    </div>
                );
            })}

            {/* Hiển thị kết quả của thử thách 3 */}
            <div style={{ marginTop: "15px", padding: "10px", background: "#e8f5e9", borderRadius: "4px", textAlign: "right", fontWeight: "bold", color: "#1b5e20" }}>
                🎯 Tuổi trung bình lớp học: {averageAge} tuổi
            </div>
        </div>
    );
}

export default ListBasics;