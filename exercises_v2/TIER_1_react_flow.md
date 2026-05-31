## Bài 1.1
1. Tại sao component chỉ render 1 lần
* Trả lời: Vì component LifecycleDemo chỉ chứa các đoạn mã HTML/JSX tĩnh và không có bất kỳ trạng thái (State) hay dữ liệu thay đổi nào bên trong. Khi ứng dụng khởi chạy, React chỉ cần gọi hàm này một lần duy nhất để dựng (Mount) giao diện lên màn hình là xong

2. Khi nào nó sẽ render lại (Re-render)
* Trả lời: Một component trong React sẽ render lại khi thuộc một trong các trường hợp sau:Trạng thái nội bộ của nó (State) thay đổi (ví dụ: khi ta dùng useState và gọi hàm setCount).  Dữ liệu truyền từ cha vào (Props) thay đổi.Component cha chứa nó bị re-render.

## Bài 1.2
1. Chạy BadCounter ➔ nhấn nút ➔ thấy gì
- Trả lời: Khi nhấn nút, số trên màn hình KHÔNG thay đổi (vẫn giữ nguyên là số 0). Tuy nhiên, nếu nhìn vào cửa sổ Console (F12), giá trị của biến count vẫn tăng lên đều đặn (1, 2, 3...) sau mỗi lần click.  
2. Chạy GoodCounter ➔ nhấn nút ➔ thấy gì
- Trả lời: Khi nhấn nút, số hiển thị trên màn hình CẬP NHẬT tăng lên ngay lập tức (0 ➔ 1 ➔ 2...) đồng bộ với mỗi lần bấm.  
3. Mở Console ➔ thấy log "render" mấy lần
- Trả lời:Với BadCounter: Hàm component chỉ chạy đúng 1 lần duy nhất lúc đầu và không bao giờ chạy lại khi bấm nút.Với GoodCounter: Mỗi lần bấm nút tăng số, hàm component lại được gọi lại (Re-render) thêm 1 lần nữa để cập nhật giao diện mới. Nếu bấm nút 5 lần thì tổng cộng component sẽ render 6 lần (1 lần đầu + 5 lần re-render).