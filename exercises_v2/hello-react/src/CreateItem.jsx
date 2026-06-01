// src/CreateItem.jsx
import { useState, useRef } from "react";

function CreateItem() {
    // --- Dữ liệu Code mẫu ---
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);
    const [newName, setNewName] = useState("");
    
    // --- Dữ liệu Thử thách ---
    const [successMessage, setSuccessMessage] = useState(""); // Thử thách 2: Lưu trữ thông báo thành công
    const inputRef = useRef(null); // Thử thách 3: Khai báo Ref để quản lý điều khiển focus ô nhập

    function handleAdd() {
        // Thử thách 1: Validate triệt để ngăn chặn dữ liệu trống hoặc chuỗi toàn dấu cách
        if (newName.trim() === "") {
            alert("Mã lỗi: Tên môn học không được để trống!");
            return;
        }
        
        const newItem = {
            id: Date.now(),  // Tạo id duy nhất
            name: newName.trim()
        };
        
        setItems([...items, newItem]);  // Thêm vào mảng bằng cú pháp Spread
        setNewName("");                  // Xóa sạch ô nhập văn bản

        // Thử thách 2: Thiết lập thông báo thành công hiển thị tạm thời
        setSuccessMessage(`🎉 Đã thêm môn học "${newItem.name}" thành công!`);
        setTimeout(() => {
            setSuccessMessage(""); // Tự động xóa thông báo sau 3 giây
        }, 3000);

        // Thử thách 3: Tự động đưa con trỏ chuột focus lại vào ô nhập liệu nhanh chóng
        inputRef.current.focus();
    }
    
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 6.2: Nghiệp vụ Thêm phần tử (CREATE)</h2>
            
            {/* Hiển thị thông báo của thử thách 2 */}
            {successMessage && (
                <div style={{ padding: "10px", marginBottom: "10px", background: "#d4edda", color: "#155724", borderRadius: "4px", fontSize: "0.9rem", fontWeight: "bold" }}>
                    {successMessage}
                </div>
            )}

            <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
                <input 
                    ref={inputRef} // Thử thách 3: Liên kết thẻ input với bộ điều khiển focus
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyPress} // Sử dụng onKeyDown thay cho onKeyPress đã lỗi thời
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", flex: 1, borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <button onClick={handleAdd} style={{ padding: "8px 16px", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                    ➕ Thêm mới
                </button>
            </div>
            
            <h3>Danh sách tổng số ({items.length} môn học):</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {items.map(item => (
                    <div key={item.id} style={{ 
                        padding: "10px", 
                        borderBottom: "1px solid #eee",
                        background: "#fafafa",
                        borderRadius: "4px"
                    }}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateItem;