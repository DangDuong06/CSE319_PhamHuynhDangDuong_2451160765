// src/components/TodoItem.jsx
function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div style={{ 
            display: "flex",
            alignItems: "center",
            padding: "12px",
            margin: "6px 0",
            background: todo.done ? "#f0fff0" : "#fff",
            border: todo.done ? "1px solid #c8e6c9" : "1px solid #eee",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                style={{ marginRight: "12px", width: "16px", height: "16px", cursor: "pointer" }}
            />
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Nội dung text công việc */}
                <span style={{ 
                    textDecoration: todo.done ? "line-through" : "none",
                    color: todo.done ? "#999" : "#333",
                    fontSize: "1rem",
                    wordBreak: "break-all"
                }}>
                    {todo.text}
                </span>
                
                {/* Thử thách Level 1 (Ý 1): Hiển thị ngày giờ tạo nhãn nhỏ ở dưới */}
                <span style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "3px" }}>
                    📅 Tạo lúc: {todo.createdAt}
                </span>
            </div>

            <button 
                onClick={() => onDelete(todo.id)}
                style={{ 
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                🗑
            </button>
        </div>
    );
}

export default TodoItem;