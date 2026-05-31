// src/SimpleVariables.jsx
function SimpleVariables() {
    // --- 1. Dữ liệu Code mẫu ---
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];

    // --- 2. Thử thách 1: Thông tin cá nhân ---
    const thongTinCaiNhan = {
        tenThat: "Phạm Huỳnh Đăng Dương",
        tuoiThat: 19,
        queQuan: "Hà Nội"
    };

    // --- 3. Thử thách 2: Chào theo giờ hiện tại ---
    const gioHienTai = new Date().getHours();
    let loiChao = "";
    if (gioHienTai < 12) loiChao = "Chào buổi sáng 🌅";
    else if (gioHienTai < 18) loiChao = "Chào buổi chiều ☀️";
    else loiChao = "Chào buổi tối 🌙";

    // --- 4. Thử thách 3: Tính chỉ số BMI ---
    const canNang = 65; // kg
    const chieuCao = 1.72; // m
    const bmi = (canNang / (chieuCao * chieuCao)).toFixed(2); // Làm tròn 2 chữ số thập phân

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
            {/* Khu vực hiển thị code mẫu */}
            <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h2>📚 Code mẫu: Biến đơn giản</h2>
                <h1>Xin chào {ten}!</h1>
                <p>Tuổi: {tuoi}</p>
                <p>Năm sau: {tuoi + 1}</p>
                <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
                <h2>Môn học yêu thích:</h2>
                <p>{monHoc.join(", ")}</p>
            </div>

            {/* Khu vực giải Thử thách */}
            <div style={{ background: "#e3f2fd", padding: "15px", borderRadius: "8px" }}>
                <h2>🎯 Kết quả Thử thách Bài 2.1</h2>
                
                <h3>1. Thông tin cá nhân:</h3>
                <p>Họ và tên: <strong>{thongTinCaiNhan.tenThat}</strong></p>
                <p>Tuổi: {thongTinCaiNhan.tuoiThat} - Quê quán: {thongTinCaiNhan.queQuan}</p>

                <h3>2. Lời chào thời gian:</h3>
                <p style={{ fontSize: "1.2rem", color: "#1565c0" }}>{loiChao} (Bây giờ là: {gioHienTai}h)</p>

                <h3>3. Tính chỉ số BMI:</h3>
                <p>Cân nặng: {canNang}kg | Chiều cao: {chieuCao}m</p>
                <p>Chỉ số BMI tính được: <strong style={{ color: "#d32f2f" }}>{bmi}</strong></p>
            </div>
        </div>
    );
}

export default SimpleVariables;