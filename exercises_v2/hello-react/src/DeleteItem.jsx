// src/DeleteItem.jsx
import { useState, useRef } from "react";

function DeleteItem() {
    // --- Dữ liệu Code mẫu ---
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);
    
    // --- Dữ liệu Thử thách ---
    const [deleteMessage, setDeleteMessage] = useState(""); // Thử thách 1: Thông báo đã xóa [tên]
    const [previousState, setPreviousState] = useState(null); // Thử thách 2: Lưu lại mảng cũ để phục vụ hoàn tác
    const undoTimeoutRef = useRef(null); // Quản lý thời gian tồn tại của nút hoàn tác

    // Hàm xóa từng phần tử lẻ
    function handleDelete(id, name) {
        // Thử thách 3: Chỉ cho xóa khi người dùng xác nhận qua hộp thoại confirm
        if (!window.confirm(`Bạn có chắc chắn muốn xóa sinh viên "${name}" không?`)) {
            return;
        }

        // Xóa bất kỳ bộ đếm thời gian hoàn tác cũ nào đang chạy dở trước đó
        if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);

        // Thử thách 2: Lưu lại trạng thái mảng dữ liệu hiện tại trước khi xóa để có thể cứu dữ liệu
        setPreviousState(items);

        // Thực hiện xóa bằng hàm lọc .filter()
        setItems(items.filter(item => item.id !== id));

        // Thử thách 1: Hiển thị thông báo định danh sinh viên đã bị xóa
        setDeleteMessage(`🗑️ Đã xóa sinh viên "${name}" thành công!`);

        // Thử thách 2: Sau đúng 5 giây, nút "Hoàn tác" sẽ biến mất và không thể khôi phục nữa
        undoTimeoutRef.current = setTimeout(() => {
            setDeleteMessage("");
            setPreviousState(null);
        }, 5000);
    }
    
    // Hàm khôi phục dữ liệu (Thử thách 2)
    function handleUndo() {
        if (previousState) {
            setItems(previousState); // Đổ ngược lại mảng cũ vào State
            setDeleteMessage("↩️ Đã khôi phục (Hoàn tác) dữ liệu thành công!");
            setPreviousState(null); // Xóa bộ nhớ đệm khôi phục ngay lập tức
            if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
            
            setTimeout(() => setDeleteMessage(""), 3000);
        }
    }

    function handleDeleteAll() {
        if (window.confirm("CẢNH BÁO: Bạn có thực sự muốn xóa toàn bộ danh sách không?")) {
            if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
            setPreviousState(items); // Lưu trữ mảng tổng để có thể hoàn tác toàn bộ
            setItems([]);
            setDeleteMessage("🗑️ Đã xóa sạch toàn bộ danh sách!");
            
            undoTimeoutRef.current = setTimeout(() => {
                setDeleteMessage("");
                setPreviousState(null);
            }, 5000);
        }
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Bài 6.3: Nghiệp vụ Xóa phần tử (DELETE)</h2>
            
            {/* Thanh hiển thị thông báo xóa kèm nút bấm Hoàn tác của Thử thách 1 & 2 */}
            {deleteMessage && (
                <div style={{ padding: "10px", marginBottom: "12px", background: "#f8d7da", color: "#721c24", borderRadius: "4px", fontSize: "0.9rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{deleteMessage}</span>
                    {previousState && (
                        <button 
                            onClick={handleUndo} 
                            style={{ background: "#721c24", color: "white", border: "none", padding: "4px 10px", borderRadius: "3px", cursor: "pointer", fontWeight: "bold" }}
                        >
                            ↩️ HOÀN TÁC (5s)
                        </button>
                    )}
                </div>
            )}
            
            {items.length > 0 && (
                <button 
                    onClick={handleDeleteAll}
                    style={{ 
                        marginBottom: "12px", 
                        background: "#e74c3c",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        width: "100%"
                    }}
                >
                    🗑 Xóa toàn bộ sinh viên
                </button>
            )}
            
            {items.length === 0 ? (
                <p style={{ color: "#999", textAlign: "center", fontStyle: "italic", padding: "20px 0" }}>Danh sách hiện đang trống rỗng.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {items.map(item => (
                        <div key={item.id} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            background: "#f9f9f9",
                            border: "1px solid #eee",
                            borderRadius: "4px"
                        }}>
                            <span style={{ fontWeight: "500" }}>{item.name}</span>
                            <button 
                                onClick={() => handleDelete(item.id, item.name)}
                                style={{ 
                                    background: "#e74c3c",
                                    color: "white",
                                    border: "none",
                                    padding: "5px 12px",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DeleteItem;