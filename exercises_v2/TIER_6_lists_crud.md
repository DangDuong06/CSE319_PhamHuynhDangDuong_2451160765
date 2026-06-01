### Kết quả thực hiện Bài 6.1
- Áp dụng thành công tham số thứ hai `index` của hàm `.map()` để hiển thị số thứ tự tăng dần trực quan cho danh sách lớp học.
- Tích hợp linh hoạt toán tử ba ngôi để tính toán thay đổi màu sắc thuộc tính CSS (`color`, `borderLeft`) theo độ tuổi quy định của sinh viên.
- Sử dụng hàm tích lũy mảng `.reduce()` để xử lý tính điểm tuổi trung bình toán học một cách gọn gàng.

### Kết quả thực hiện Bài 6.2
- Ứng dụng thành công toán tử mở rộng Spread `[...items, newItem]` để tạo mảng phiên bản mới bổ sung phần tử vào cuối danh sách mà không vi phạm quy tắc Immutability.
- Giải quyết dứt điểm Thử thách 1 bằng phương thức loại bỏ khoảng trống đầu cuối `.trim()` để loại trừ dữ liệu rác trống rỗng.
- Phối hợp nhịp nhàng hook `useRef` hệ thống để kích hoạt hành động `.focus()` tự động kéo chuột về lại ô nhập văn bản, tăng trải nghiệm tối đa cho người dùng.

### Kết quả thực hiện Bài 6.3
- Ứng dụng thành thạo phương thức `.filter(item => item.id !== idToDelete)` để loại bỏ chính xác đối tượng được chọn ra khỏi danh sách mảng State.
- Giải quyết thành công Thử thách 3 bằng cách lồng hàm hội thoại hệ thống `window.confirm()` nhằm hạn chế tối đa hành động bấm nhầm của người dùng.
- Thực hiện xuất sắc Thử thách 2 bằng giải pháp tạo vùng đệm `previousState` lưu tạm dữ liệu mảng cũ phối hợp cùng hàm hẹn giờ `setTimeout` để tạo ra chức năng "Hoàn tác" (Undo) khôi phục dữ liệu nâng cao trong giới hạn 5 giây.