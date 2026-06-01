### Kết quả thực hiện Bài 5.1
- Nắm vững nguyên lý truyền tham chiếu hàm (ví dụ: `onClick={handleClick}`) thay vì gọi hàm trực tiếp `handleClick()`, tránh việc component bị lặp vô hạn.
- Hoàn thành Thử thách 1 bằng thuật toán chuỗi mã HEX ngẫu nhiên, cập nhật trực tiếp vào thuộc tính `backgroundColor` của phần tử.
- Phân tách thành công bộ đếm trạng thái (`useState`) độc lập cho từng nút bấm riêng biệt và xử lý logic đảo boolean cho nút tương tác Like.

### Kết quả thực hiện Bài 5.2
- Ứng dụng thành công đối tượng `event.target.value` để bắt trọn khoảnh khắc người dùng gõ phím và truyền dữ liệu đồng bộ vào State.
- Giải quyết Thử thách 3 bằng phương thức `.split(/\s+/)` của biểu thức chính quy (Regex) để nhận diện chính xác số lượng từ nhập vào, loại bỏ hoàn toàn các lỗi đếm sai khi người dùng nhấn phím cách cách quãng.
- Tích hợp tính năng hiển thị trực quan thông điệp cảnh báo động khi số lượng chữ viết vượt ngưỡng 80% giới hạn quy định.

### Kết quả thực hiện Bài 5.3
- Hiểu rõ tầm quan trọng của thuộc tính `tabIndex={0}` giúp các thành phần không phải input (như `<div>`) có thể lắng nghe được sự kiện bàn phím từ người dùng.
- Giải quyết hoàn hảo cơ chế di chuyển bằng cách can thiệp vào thuộc tính `event.key` của hệ thống (`ArrowUp`/`ArrowDown`/`ArrowLeft`/`ArrowRight`), đồng thời áp dụng `event.preventDefault()` để triệt tiêu hành vi cuộn màn hình mặc định của trình duyệt web.
- Làm chủ kỹ thuật điều hướng phím tắt nâng cao bằng cách kết hợp cờ hiệu hệ thống `event.ctrlKey` cùng giá trị ký tự để gán lệnh chuyển màu giao diện.