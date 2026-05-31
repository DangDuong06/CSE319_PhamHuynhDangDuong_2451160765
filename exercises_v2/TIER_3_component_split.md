### Kết quả thực hiện Bài 3.1 & 3.2 (Bài tập 1)
- Đã tách thành công component con `ProductCard` ra khỏi file `App.jsx` và tổ chức gọn gàng vào thư mục `src/components/`.
- Sử dụng cú pháp `export default` ở file con và `import` ở file cha để tái sử dụng mã nguồn, giúp file `App.jsx` ngắn hơn đáng kể.

### Kết quả thực hiện Bài 3.2 (Bài tập 2)
- Đã tách thành công layout trang web thành 3 phần độc lập: `Header.jsx`, `Footer.jsx` và nội dung chính sử dụng lại `ProductCard.jsx`.
- Code trong `App.jsx` trở nên cực kỳ ngắn gọn và dễ đọc, thể hiện đúng tư duy lắp ghép component của React.

### Kết quả thực hiện Bài 3.3
- Đã xây dựng thành công cấu trúc nhận dữ liệu động bằng cơ chế Props Destructuring `{ name, email, avatar }` cho component con.
- Đã vận dụng tính toán toán học logic (tính phần trăm giảm giá) ngay từ các tham số đầu vào của Props để kết xuất thông tin trực quan ra giao diện thẻ sản phẩm.
- Đã thực hiện render vòng lặp mảng đối tượng phức tạp để tạo ra 3 thẻ người dùng (`UserCard`) có nội dung và hình ảnh định danh hoàn toàn khác nhau