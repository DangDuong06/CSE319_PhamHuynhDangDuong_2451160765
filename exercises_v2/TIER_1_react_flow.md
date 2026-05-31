1. Tại sao component chỉ render 1 lần
* Trả lời: Vì component LifecycleDemo chỉ chứa các đoạn mã HTML/JSX tĩnh và không có bất kỳ trạng thái (State) hay dữ liệu thay đổi nào bên trong. Khi ứng dụng khởi chạy, React chỉ cần gọi hàm này một lần duy nhất để dựng (Mount) giao diện lên màn hình là xong

2. Khi nào nó sẽ render lại (Re-render)
* Trả lời: Một component trong React sẽ render lại khi thuộc một trong các trường hợp sau:Trạng thái nội bộ của nó (State) thay đổi (ví dụ: khi ta dùng useState và gọi hàm setCount).  Dữ liệu truyền từ cha vào (Props) thay đổi.Component cha chứa nó bị re-render.