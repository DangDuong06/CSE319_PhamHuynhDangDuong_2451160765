// src/ListRendering.jsx
function ListRendering() {
    // --- Dữ liệu Code mẫu ---
    const fruits = ["Táo", "Chuối", "Cam", "Nho"];
    const students = [
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ];

    // --- Dữ liệu Thử thách ---
    // Thử thách 1: Danh sách 5 sản phẩm (tên, giá)
    const products = [
        { id: 101, name: "Bàn phím cơ AKKO", price: 1500000 },
        { id: 102, name: "Chuột không dây Logitech", price: 850000 },
        { id: 103, name: "Tai nghe Gaming HyperX", price: 1800000 },
        { id: 104, name: "Lót chuột cỡ lớn (Pad)", price: 150000 },
        { id: 105, name: "Đèn LED màn hình", price: 1200000 }
    ];

    // Thử thách 3: Tính tổng giá tất cả sản phẩm bằng hàm reduce thuần JS
    const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
            
            {/* ================= KHU VỰC CODE MẪU ================= */}
            <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #ddd" }}>
                <h2>📚 Code mẫu: Render danh sách</h2>
                
                <h3>Danh sách trái cây</h3>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
                
                <h3>Danh sách sinh viên</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <thead>
                        <tr style={{ background: "#f0f0f0" }}>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tuổi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= KHU VỰC THỬ THÁCH ================= */}
            <div style={{ background: "#fff3e0", padding: "15px", borderRadius: "8px", border: "1px solid #ffe0b2" }}>
                <h2>🎯 Kết quả Thử thách Bài 2.3</h2>
                <h3>Danh sách sản phẩm công nghệ</h3>
                
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", background: "white" }}>
                    <thead>
                        <tr style={{ background: "#ffe0b2" }}>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên sản phẩm</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Giá tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            // Thử thách 2: Kiểm tra nếu giá > 1.000.000đ thì đổi màu chữ sang đỏ
                            const isHighPrice = product.price > 1000000;
                            
                            return (
                                <tr key={product.id}>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.id}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
                                    <td style={{ 
                                        border: "1px solid #ddd", 
                                        padding: "8px", 
                                        color: isHighPrice ? "red" : "black", 
                                        fontWeight: isHighPrice ? "bold" : "normal" 
                                    }}>
                                        {product.price.toLocaleString('vi-VN')} đ
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Hiển thị tổng tiền */}
                <h3 style={{ marginTop: "15px", textAlign: "right", color: "#e65100" }}>
                    Tổng giá trị giỏ hàng: {totalPrice.toLocaleString('vi-VN')} đ
                </h3>
            </div>

        </div>
    );
}

export default ListRendering;