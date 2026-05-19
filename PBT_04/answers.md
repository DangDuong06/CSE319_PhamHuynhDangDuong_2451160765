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

### Phần C
### Câu C1
1. Navigation bar ngang (logo + menu + buttons)
Lựa chọn: Flexbox

Giải thích: Thanh điều hướng là layout một chiều (hàng ngang). Flexbox xử lý cực tốt việc căn chỉnh các phần tử theo trục ngang, dễ dàng dồn logo sang trái, menu vào giữa và các nút chức năng sang phải bằng cách kết hợp justify-content: space-between; hoặc margin-left: auto;.

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
Lựa chọn: Grid

Giải thích: Đây là layout hai chiều (quản lý đồng thời cả hàng và cột nghiêm ngặt). Sử dụng CSS Grid với thuộc tính grid-template-columns: repeat(3, 1fr); giúp các ô ảnh luôn thẳng hàng tăm tắp theo cả chiều dọc lẫn chiều ngang, bất kể số lượng ảnh đổ về từ database là bao nhiêu.

3. Layout blog: main content + sidebar
Lựa chọn: Grid (hoặc Kết hợp cả hai)

Giải thích: Đối với bố cục tổng thể của một trang web (Macro Layout), Grid là lựa chọn tối ưu nhất để định hình bộ khung chính (ví dụ chia cột 2fr 1fr). Nếu bên trong sidebar hoặc main content cần sắp xếp các thành phần con dạng danh sách hay dòng chữ, chúng ta sẽ kết hợp thêm Flexbox bên trong các item đó.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
Lựa chọn: Kết hợp cả hai (hoặc Flexbox / Grid đều linh hoạt)

Giải thích: * Sử dụng Grid hoặc Flexbox cho container cha để chia footer thành 4 cột đều nhau trên màn hình lớn.

Bên trong từng cột thông tin, sử dụng Flexbox với thuộc tính flex-direction: column; để xếp các đường link (Về chúng tôi, Liên kết...) theo hàng dọc một cách dễ dàng và dễ quản lý khoảng cách.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
Lựa chọn: Flexbox

Giải thích: Card sản phẩm là một layout một chiều theo trục dọc (flex-direction: column;). Để giải quyết bài toán "nút luôn dính đáy" khi phần text ở giữa dài ngắn không đều, chỉ cần đặt margin-top: auto; cho phần tử nút bấm. Flexbox sẽ tự động đẩy nút xuống sát mép dưới cùng của card.


### Câu C2
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
1. Nguyên nhân
Mặc dù các phần tử .card nằm trong một hàng có chiều cao bằng nhau (nhờ cơ chế tự động của Flexbox cha .card-container), nhưng bản thân bên trong mỗi .card lại chưa được cấu hình là một Flexbox.
Khi tiêu đề h3 hoặc đoạn mô tả của các card có độ dài ngắn khác nhau, phần không gian trống bên trong card bị lệch, dẫn đến việc các nút .btn không có điểm tựa cố định và bị đẩy nhảy lên xuống tự do theo độ dài của chữ.

2. Giải pháp & Code sửa
Biến bản thân .card thành một Flex container theo chiều dọc (flex-direction: column). Sau đó, sử dụng thuộc tính margin-top: auto cho nút .btn để tận dụng khoảng trống còn thừa, ép nút luôn nằm sát đáy card.

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
1. Nguyên nhân
Khi khai báo display: flex; cho .hero, các phần tử con bên trong mặc định sẽ xếp theo hàng ngang và nằm ở góc trên bên trái.
Thuộc tính text-align: center; viết trong .hero-content chỉ có tác dụng căn giữa các phần tử dạng văn bản (inline/inline-block) bên trong chính nó, chứ hoàn toàn không thể tự căn giữa khối .hero-content so với khung cha .hero.

2. Giải pháp & Code sửa
Sử dụng bộ đôi thuộc tính căn chỉnh của Flexbox trực tiếp lên container cha .hero: justify-content: center để căn giữa theo chiều ngang và align-items: center để căn giữa theo chiều dọc.

Lỗi 3: Sidebar bị co lại khi content quá dài
1. Nguyên nhân
Theo cơ chế mặc định của Flexbox, thuộc tính flex-shrink của các item có giá trị mặc định là 1. Điều này có nghĩa là khi vùng không gian hiển thị bị thiếu (do nội dung bên khối .content quá dài hoặc khi thu nhỏ màn hình), các item sẽ tự động co hẹp lại để vừa với container chung.
Vì vậy, dù bạn đã đặt width: 250px; cho .sidebar, nó vẫn bị bóp nghẹt và co lại nhỏ hơn kích thước mong muốn.

2. Giải pháp & Code sửa
Có hai cách sửa lỗi này bằng cách can thiệp vào cơ chế co giãn của Flexbox:
Cách 1 (Khuyên dùng): Đặt thuộc tính flex-shrink: 0; cho .sidebar để ra lệnh tuyệt đối không cho phép nó bị co lại dưới bất kỳ tình huống nào.
Cách 2: Thay vì dùng width, hãy dùng thuộc tính chuyên dụng của flex là flex-basis: 250px; hoặc ép cứng kích thước tối thiểu bằng min-width: 250px;.