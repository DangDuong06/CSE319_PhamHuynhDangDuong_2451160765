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