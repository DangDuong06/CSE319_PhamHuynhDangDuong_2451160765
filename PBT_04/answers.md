## PHẦN A 

### Câu A1 — 5 Loại Positioning

Bảng điền thông tin so sánh 5 giá trị `position`:

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` |  Có | Luồng tài liệu tự nhiên (Mặc định) | Có cuộn | Bố cục văn bản, phần tử thông thường. |
| `relative` |  Có | Vị trí gốc ban đầu của chính nó | Có cuộn | Dịch chuyển nhẹ phần tử; làm mốc tọa độ cho con dùng `absolute`. |
| `absolute` |  Không | Thẻ cha gần nhất có `position` khác `static` | Có cuộn | Badge thông báo, dropdown menu, icon nút tắt, tooltip. |
| `fixed` |  Không | Viewport (Khung nhìn màn hình trình duyệt) |  Không cuộn | Nút Chat Support, Thanh điều hướng dính cố định, Modal Overlay. |
| `sticky` |  Có (khi chưa dính) | Viewport khi cuộn đạt ngưỡng quy định | Cuộn cho tới khi chạm ngưỡng thì dính | Sticky Header, Sidebar cuộn dính. |

#### Câu hỏi thêm:
* **Khi nào `absolute` tham chiếu `body`?** Khi tất cả các thẻ cha chứa nó đều không thiết lập thuộc tính `position` . Lúc này, nó sẽ lấy khung tài liệu làm mốc tọa độ gốc.
* **Khi nào tham chiếu parent?** Khi có ít nhất một thẻ cha chứa nó được thiết lập thuộc tính `position` mang giá trị khác với `static`.
* **Giải thích khái niệm "nearest positioned ancestor":** Đây là gốc gần nhất tính từ vị trí của thẻ hiện tại ngược lên trên cây thư mục DOM HTML mà có thuộc tính `position` mang giá trị hợp lệ khác `static`. Thẻ này sẽ lập tức trở thành mốc tọa độ gốc `(0,0)` cho thẻ con mang thuộc tính `absolute` tính toán vị trí qua các thuộc tính `top`, `bottom`, `left`, `right`.

### Câu A2: Dự đoán
🔹 Trường hợp 1:
Bố cục:
* 4 items xếp trên 1 hàng duy nhất. Lệnh display: flex xếp hàng ngang (row), kết hợp flex: 1 ép các items giãn đều, chia nhau mỗi khối chiếm đúng 25% chiều rộng.

🔹 Trường hợp 2:
Bố cục: 
* Chia làm 3 hàng, mỗi hàng 2 cột. Thuộc tính flex-wrap: wrap cho phép rớt hàng. Tổng kích thước mỗi item là 50% ($45\% \text{ width} + 2.5\% \times 2 \text{ margin}$), nên một hàng chỉ chứa vừa khít 2 items.

🔹Trường hợp 3:
Bố cục: 
* 3 items nằm trên 1 hàng ngang, căn giữa theo chiều dọc (align-items: center). Lệnh justify-content: space-between đẩy Item 1 sát lề trái, Item 3 sát lề phải, Item 2 nằm chính giữa.

🔹 Trường hợp 4:
Bố cục: 
* Layout gồm 1 hàng với 3 cột. Cột 1 và 3 rộng cố định 200px. Cột 2 ở giữa dùng 1fr tự động co giãn chiếm toàn bộ phần diện tích còn lại sau khi trừ đi 400px và gap: 20px.