### Phần A:
### Câu A1
## 1.Thẻ `<meta viewport>` chuẩn và giải thích

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
* width=device-width: Thiết lập chiều rộng của trang web luôn bằng với chiều rộng màn hình của thiết bị (thay vì mặc định của các trình duyệt di động là tự giả định màn hình desktop khoảng 980px).

* initial-scale=1.0: Thiết lập mức độ zoom ban đầu khi trang vừa được tải lần đầu tiên là 1:1 (không phóng to, không thu nhỏ).

## 2. Hiện tượng hiển thị trên iPhone nếu THIẾU thẻ này  
* Nếu thiếu thẻ viewport, iPhone (và đa số trình duyệt di động) sẽ coi trang web như một trang desktop có độ rộng khoảng 980px. Trình duyệt sẽ tự động thu nhỏ toàn bộ trang web (zoom out) để nhét vừa khít vào màn hình điện thoại.

* Hậu quả: Chữ nghĩa, hình ảnh và các nút bấm trở nên tí hon, người dùng phải dùng hai ngón tay phóng to (pinch-to-zoom) và cuộn ngang mới đọc được nội dung. Các dòng @media query dựa trên chiều rộng thiết bị cũng sẽ không hoạt động đúng như kỳ vọng.

## 3.phân biệt
* Mobile-First: Viết CSS cho màn hình nhỏ nhất (Mobile) trước, sau đó dùng Media Queries để thêm thắt/mở rộng bố cục cho màn hình lớn ( dùng min-width)
* ví dụ:

```html
.sidebar { display: none; }

@media (min-width: 768px) {
  .sidebar { display: block; }
}
```
* Desktop-First: Viết CSS cho màn hình lớn (Desktop) trước, sau đó dùng Media Queries để thu gọn/ẩn bớt các thành phần khi màn hình nhỏ đi.(max-width)

* ví dụ
```html
.sidebar { display: block; }

@media (max-width: 767.98px) {
  .sidebar { display: none; }
}
```
* Tại sao Mobile-First được khuyên dùng?

* Tối ưu hiệu năng (Performance): Thiết bị di động có cấu hình phần cứng và tốc độ mạng yếu hơn desktop. Cách tiếp cận này giúp mobile tải ít CSS thừa hơn và không phải tính toán ghi đè các layout phức tạp của desktop.

* Xu hướng người dùng: Lượng truy cập web từ thiết bị di động hiện nay đã vượt trội so với desktop.

* Tư duy thiết kế gọn gàng: Ép nhà phát triển phải chắt lọc những nội dung cốt lõi nhất lên màn hình nhỏ trước, tránh tình trạng "tham lam" nhồi nhét giao diện.

### Câu A2:
### Extra Small (xs)
- kích thước : < 576px
- thiết bị đại diện :Điện thoại di động ở trạng thái xoay dọc
- số lượng cột : 1 cột
### Small (sm)
- kích thước : ≥ 576px
- thiết bị đại diện :Điện thoại di động ở trạng thái xoay ngang
- số lượng cột : 2 cột
### Medium (md)
- kích thước :≥ 768px
- thiết bị đại diện :Máy tính bảng ở trạng thái xoay dọc (iPad,...)
- số lượng cột : 2 hoặc 3 cột
### Large (lg)
- kích thước :≥ 992px
- thiết bị đại diện :Máy tính bảng xoay ngang hoặc Laptop nhỏ
- số lượng cột : 3 hoặc 4 cộct
### Extra Large (xl)
- kích thước :≥ 1200px
- thiết bị đại diện :Màn hình máy tính Desktop thông thường
- số lượng cột : 4 cột
### XX Large (xxl)
- kích thước :≥ 1200px
- thiết bị đại diện :Màn hình PC kích thước lớn, Màn hình Ultra-wide
- số lượng cột : 4 hoặc 6 cột

### Câu A3
- 375px (iPhone SE)	100%
- 600px	            540px
- 800px	            720px
- 1000px	        960px
- 1400px	        1140px

### Câu A4
### 1. Variables
- Cho phép đặt tên và lưu trữ các giá trị được sử dụng lặp đi lặp lại nhiều lần (màu sắc chủ đạo, font chữ, khoảng cách padding,...) vào một nơi tập trung để dễ dàng cập nhật đồng loạt khi cần.
- ví dụ:
```html
$color-primary: #3498db;
.button { background-color: $color-primary; }
```
- Nesting (Cấu trúc lồng nhau): Hỗ trợ viết các bộ chọn CSS lồng trực tiếp vào nhau theo đúng sơ đồ phả hệ cây cấu trúc HTML. Việc này giúp mã nguồn gọn gàng, giảm thiểu viết lặp tên class cha.
- ví dụ:
```html
.navbar {
  background: #333;
  .nav-item { display: inline-block; }
}
```
- Mixins (Đoạn mã tái sử dụng): Hoạt động giống như các hàm chức năng, cho phép định nghĩa sẵn một tập hợp nhiều thuộc tính CSS phức tạp (có thể truyền thêm các tham số đầu vào linh hoạt) rồi nhúng nhanh vào các class khác bằng từ khóa @include.
- ví dụ:
```html
@mixin center-element {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box { @include center-element; }
```

- @extend / Inheritance (Tính kế thừa): Cho phép một bộ chọn chiếm dụng và thừa hưởng lại toàn bộ tất cả các thuộc tính CSS đã được định nghĩa của một bộ chọn khác trước đó, hạn chế mã nguồn bị trùng lặp.
- ví dụ:
```html
.message-box { border: 1px solid #ccc; padding: 10px; }
.error-box { @extend .message-box; border-color: red; }
```
## 2.
- Lý do: Các trình duyệt hiện đại (Chrome, Edge, Firefox,...) chỉ tích hợp bộ thông dịch hiểu được cú pháp chuẩn hóa của ngôn ngữ CSS thông thường. Các cú pháp nâng cao của SCSS (biến, lồng nhau, hàm mixin,...) không nằm trong quy chuẩn này.

- Quy trình chuyển đổi: Chúng ta bắt buộc phải sử dụng một công cụ biên dịch (Compiler) chuyên dụng của hệ sinh thái Sass (chẳng hạn như thư viện Sass chạy trên Node.js hoặc thông qua Extension Live Sass Compiler của VS Code) để quét và biên dịch (compile) toàn bộ logic trong file .scss đầu vào để xuất bản ra thành một file .css thuần túy. Sau đó, ta mới nhúng file .css này vào mã nguồn HTML bằng thẻ <link>.