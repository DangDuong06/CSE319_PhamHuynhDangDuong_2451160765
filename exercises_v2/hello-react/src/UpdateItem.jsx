// src/UpdateItem.jsx
import { useState } from "react";

function UpdateItem() {
    // --- Dữ liệu Code mẫu ---
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    
    // --- Dữ liệu Thử thách ---
    const [saveAlert, setSaveAlert] = useState(""); // Thử thách 3: Lưu trữ thông báo "Đã lưu!" thành công

    // Bắt đầu kích hoạt chế độ sửa inline
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }
    
    // Lưu thông tin sau khi sửa
    function saveEdit() {
        // Thử thách 2: Validate nghiêm ngặt, không cho phép lưu nếu tên trống hoặc tuổi trống
        if (editName.trim() === "" || editAge.trim() === "") {
            alert("Mã lỗi: Không được để trống tên sinh viên hoặc tuổi!");
            return;
        }

        const ageNumber = parseInt(editAge);
        if (isNaN(ageNumber) || ageNumber <= 0) {
            alert("Mã lỗi: Số tuổi nhập vào phải là một số dương hợp lệ!");
            return;
        }
        
        // Tiến hành cập nhật mảng thông qua hàm .map()
        setItems(items.map(item => 
            item.id === editingId 
                ? { ...item, name: editName.trim(), age: ageNumber } // Tạo object mới với dữ liệu cập nhật
                : item // Giữ nguyên các đối tượng không liên quan
        ));
        
        // Thử thách 3: Kích hoạt thông báo "Đã lưu!" thành công biến mất sau 2.5 giây
        setSaveAlert(`✨ Đã lưu thông tin mới của "${editName.trim()}" thành công!`);
        setTimeout(() => setSaveAlert(""), 2500);

        setEditingId(null); // Thoát khỏi chế độ sửa
    }
    
    // Hủy bỏ trạng thái sửa đổi thông tin
    function cancelEdit() {
        setEditingId(null);
    }
    
    // Xử lý phím tắt thông minh trong ô nhập liệu
    function handleKeyPress(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "460px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 6.4: Nghiệp vụ Sửa thông tin (UPDATE)</h2>
            
            {/* Hiển thị thông báo lưu thành công của thử thách 3 */}
            {saveAlert && (
                <div style={{ padding: "8px", marginBottom: "12px", background: "#e8f5e9", color: "#1b5e20", borderRadius: "4px", fontSize: "0.9rem", fontWeight: "bold", textAlign: "center" }}>
                    {saveAlert}
                </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {items.map(item => (
                    <div key={item.id} style={{ 
                        padding: "12px", 
                        background: editingId === item.id ? "#fffde7" : "#f9f9f9", // Thay đổi màu nền của dòng đang sửa
                        border: "1px solid #eee",
                        borderRadius: "6px",
                        transition: "background 0.2s"
                    }}>
                        {editingId === item.id ? (
                            // ================= CHẾ ĐỘ SỬA INLINE =================
                            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                {/* Thử thách 1: Highlight viền xanh dày kèm viền bóng bọc ngoài ô input tên đang sửa */}
                                <input 
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    onKeyDown={handleKeyPress} // Đổi sang onKeyDown chuẩn hóa
                                    autoFocus
                                    style={{ 
                                        padding: "6px 10px", 
                                        flex: 2, 
                                        border: "2px solid #29b6f6", 
                                        outline: "none", 
                                        borderRadius: "4px",
                                        boxShadow: "0 0 5px rgba(41, 182, 246, 0.5)"
                                    }}
                                />
                                {/* Thử thách 1: Tương tự highlight cho ô input tuổi */}
                                <input 
                                    type="number"
                                    value={editAge}
                                    onChange={(e) => setEditAge(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    style={{ 
                                        padding: "6px 6px", 
                                        width: "55px", 
                                        border: "2px solid #29b6f6", 
                                        outline: "none", 
                                        borderRadius: "4px",
                                        boxShadow: "0 0 5px rgba(41, 182, 246, 0.5)"
                                    }}
                                />
                                <button onClick={saveEdit} style={{ background: "#27ae60", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                                    ✓ Lưu
                                </button>
                                <button onClick={cancelEdit} style={{ background: "#95a5a6", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer" }}>
                                    ✕ Hủy
                                </button>
                            </div>
                        ) : (
                            // ================= CHẾ ĐỘ XEM THÔNG TIN MẶC ĐỊNH =================
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "500" }}>{item.name} - <span style={{ color: "#7f8c8d" }}>{item.age} tuổi</span></span>
                                <button 
                                    onClick={() => startEdit(item)}
                                    style={{ 
                                        background: "#3498db",
                                        color: "white",
                                        border: "none",
                                        padding: "5px 12px",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >
                                    ✏️ Sửa
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpdateItem;