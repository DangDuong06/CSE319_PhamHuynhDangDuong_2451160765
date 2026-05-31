import { useState } from "react";

function ConditionalDemo() {
    // --- Dữ liệu Code mẫu ---
    const isLoggedIn = true;
    const score = 85;
    const hasNotification = true;
    const notificationCount = 5;

    // --- Dữ liệu Thử thách ---
    const isOnline = true;          // Thử thách 1: Trạng thái online/offline
    const showMenu = true;          // Thử thách 2: Hiện/ẩn menu dựa vào isLoggedIn
    const stock = 0;                // Thử thách 3: Hiển thị khi hết hàng (stock = 0)

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
            
            {/* ================= KHU VỰC CODE MẪU ================= */}
            <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #ddd" }}>
                <h2>📚 Code mẫu: Hiển thị có điều kiện</h2>
                
                {/* Cách 1: Toán tử 3 ngôi */}
                <h3>Cách 1: Toán tử 3 ngôi (Ternary)</h3>
                <h4>{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}</h4>
                <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>
                <p>Xếp loại: {
                    score >= 9 ? "Xuất sắc" :
                    score >= 8 ? "Giỏi" :
                    score >= 7 ? "Khá" :
                    score >= 5 ? "Trung bình" : "Yếu"
                }</p>

                <hr />

                {/* Cách 2: Toán tử && */}
                <h3>Cách 2: && (Hiện hoặc không hiện)</h3>
                {hasNotification && (
                    <div style={{ background: "#fff3cd", padding: "10px", borderRadius: "4px", color: "#856404" }}>
                        Bạn có {notificationCount} thông báo mới!
                    </div>
                )}
                {!hasNotification && <p>Không có thông báo</p>}
            </div>

            {/* ================= KHU VỰC THỬ THÁCH ================= */}
            <div style={{ background: "#e8f5e9", padding: "15px", borderRadius: "8px", border: "1px solid #c8e6c9" }}>
                <h2>🎯 Kết quả Thử thách Bài 2.2</h2>

                {/* Thử thách 1 */}
                <p><strong>1. Trạng thái hệ thống:</strong> {isOnline ? "🟢 Online" : "🔴 Offline"}</p>

                {/* Thử thách 2 */}
                <p><strong>2. Thanh điều hướng:</strong></p>
                {isLoggedIn && showMenu && (
                    <nav style={{ background: "#2e7d32", padding: "10px", color: "white", borderRadius: "4px" }}>
                        Trang chủ | Hồ sơ cá nhân | Cài đặt tài khoản
                    </nav>
                )}
                {(!isLoggedIn || !showMenu) && <p style={{ color: "#757575", italic: "true" }}>Menu đang ẩn</p>}

                {/* Thử thách 3 */}
                <p style={{ marginTop: "15px" }}><strong>3. Trạng thái kho hàng:</strong></p>
                <div style={{ padding: "10px", background: stock === 0 ? "#ffcdd2" : "#c8e6c9", display: "inline-block", borderRadius: "4px" }}>
                    Sản phẩm: {stock > 0 ? `Còn lại ${stock} sản phẩm` : "❌ Hết hàng"}
                </div>
            </div>

        </div>
    );
}

export default ConditionalDemo;