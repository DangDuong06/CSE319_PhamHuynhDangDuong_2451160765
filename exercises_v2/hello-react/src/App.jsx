// src/App.jsx
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    // State chính quản lý danh sách và dữ liệu input (Tier 4)
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");
    
    // ===== Nghiệp vụ 1: Thêm mới công việc (CREATE) =====
    function addTodo() {
        if (inputValue.trim() === "") return;
        
        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            done: false,
            // Thử thách Level 1 (Ý 1): Gán chuỗi ngày giờ hệ thống hiện tại
            createdAt: new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString()
        };
        
        setTodos([...todos, newTodo]); // Sao chép mảng và thêm phần tử mới vào cuối
        setInputValue(""); // Xóa trống input nhập liệu
    }
    
    // Xử lý sự kiện nhấn phím Enter (Tier 5)
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }
    
    // ===== Nghiệp vụ 2: Đảo trạng thái hoàn thành (UPDATE) =====
    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    }
    
    // ===== Nghiệp vụ 3: Xóa công việc khỏi danh sách (DELETE) =====
    function deleteTodo(id) {
        if (window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn công việc này không?")) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    }
    
    // ===== Nghiệp vụ 4: Lọc dữ liệu hiển thị (Tier 2) =====
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });
    
    // ===== Nghiệp vụ 5: Đếm số lượng công việc (Computed Values) =====
    const activeCount = todos.filter(todo => !todo.done).length;
    const completedCount = todos.filter(todo => todo.done).length;
    const totalCount = todos.length; // Thử thách Level 1 (Ý 2): Biến tính tổng tất cả công việc

    // ===== Thử thách Level 1 (Ý 3): Đổi chuỗi văn bản placeholder động theo từng chế độ bộ lọc
    let dynamicPlaceholder = "Nhập công việc cần làm...";
    if (filter === "active") dynamicPlaceholder = "Nhập việc CHƯA HOÀN THÀNH mới...";
    if (filter === "completed") dynamicPlaceholder = "Nhập việc ĐÃ HOÀN THÀNH bổ sung...";
    
    return (
        <div style={{ 
            maxWidth: "480px", 
            margin: "30px auto", 
            padding: "25px",
            fontFamily: "sans-serif",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            background: "#fff"
        }}>
            <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>📋 Todo List của Dương</h1>
            
            {/* Thanh nhập liệu */}
            <div style={{ display: "flex", marginBottom: "20px" }}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Chuyển đổi sang onKeyDown chuẩn
                    placeholder={dynamicPlaceholder} // Thử thách Level 1 (Ý 3)
                    style={{ 
                        flex: 1,
                        padding: "10px 12px",
                        fontSize: "15px",
                        border: "2px solid #ddd",
                        borderRadius: "4px 0 0 4px",
                        outline: "none"
                    }}
                />
                <button 
                    onClick={addTodo}
                    style={{ 
                        padding: "10px 20px",
                        fontSize: "15px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "0 4px 4px 0",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Thêm
                </button>
            </div>
            
            {/* Bộ lọc thanh Menu con (Tier 3) */}
            <TodoFilter
                filter={filter}
                setFilter={setFilter}
            />
            
            {/* Thử thách Level 1 (Ý 2): Hiển thị tổng số lượng công việc hiện có */}
            {totalCount > 0 && (
                <p style={{ margin: "5px 0 10px 0", fontSize: "0.85rem", color: "#34495e", fontWeight: "bold" }}>
                    📊 Tổng số công việc trong bộ nhớ: {totalCount} việc.
                </p>
            )}

            {/* Danh sách kết xuất kết quả */}
            {filteredTodos.length === 0 ? (
                <div style={{ 
                    textAlign: "center",
                    padding: "40px",
                    color: "#999",
                    border: "1px dashed #ccc",
                    borderRadius: "4px",
                    background: "#fdfdfd"
                }}>
                    {todos.length === 0
                        ? "📝 Chưa có công việc nào được tạo."
                        : "🔍 Không tìm thấy công việc phù hợp với bộ lọc."}
                </div>
            ) : (
                <div style={{ maxHeight: "320px", overflowY: "auto" }}>
                    {filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </div>
            )}
            
            {/* Footer tóm tắt số liệu (Tier 2) */}
            {todos.length > 0 && (
                <div style={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                    padding: "10px",
                    background: "#f9f9f9",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    border: "1px solid #eee"
                }}>
                    <span style={{ color: "#e67e22", fontWeight: "bold" }}>{activeCount} việc cần làm</span>
                    {completedCount > 0 && (
                        <span style={{ color: "#27ae60", fontWeight: "bold" }}>
                            {completedCount} việc đã xong
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;