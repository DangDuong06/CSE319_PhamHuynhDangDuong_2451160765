# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1
* tài liệu tham chiếu: **08_introduction_css.md**

### 1. Inline CSS 
- **Ví dụ:** `<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>`
- **Ưu điểm:** Nhanh, có độ ưu tiên cao nhất, hữu ích khi cần debug nhanh hoặc dùng cho Email HTML.
- **Nhược điểm:** Làm rối mã HTML, khó bảo trì và không thể tái sử dụng style cho các thẻ khác.
- **Khi nào dùng:** Chỉ nên dùng khi cần ghi đè style khẩn cấp hoặc các thuộc tính chỉ áp dụng duy nhất cho một phần tử đó.

### 2. Internal CSS
- **Ví dụ:**
  ```html
  <head>
      <style>
          h1 { color: blue; }
          p { line-height: 1.6; }
      </style>
  </head>

### 3.External CSS
- **Ví dụ:**
```html
<link rel="stylesheet" href="styles.css">

```
### câu hỏi thêm:
- Inline CSS sẽ thắng.
-Dựa trên quy tắc Specificity (Độ ưu tiên) trong tài liệu 09_css_selectors.md, Inline style có điểm ưu tiên là 1000, cao hơn hẳn so với Internal/External

### Câu A2 — CSS Selectors 
* nguồn tham chiếu : **09_css_selectors.md.**
1. `h1` → Chọn: **ShopTLU**
2. `.price` → Chọn: **25.990.000đ** và **45.990.000đ**
3. `#app header` → Chọn: Toàn bộ nội dung trong thẻ `<header>` (ShopTLU và Nav).
4. `nav a:first-child` → Chọn: **Home**
5. `.product.featured h2` → Chọn: **MacBook Pro**
6. `article > p` → Chọn: **25.990.000đ**, **Mô tả sản phẩm...**, **45.990.000đ**, **Mô tả sản phẩm...** (Tất cả thẻ p là con trực tiếp của article).
7. `a[href="/"]` → Chọn: **Home**
8. `.top-bar.dark h1` → Chọn: **ShopTLU**

### Câu A3 

* tài liệu tham chiếu: **11_box_model.md**

#### * Trường hợp 1: content-box *
- **Chiều rộng hiển thị** = $400px (width) + 20px \times 2 (padding) + 5px \times 2 (border) = \mathbf{450px}$.
- **Không gian chiếm trên trang** = $450px (chiều rộng hiển thị) + 10px \times 2 (margin) = \mathbf{470px}$.

#### * Trường hợp 2: border-box *
- **Chiều rộng hiển thị** = $\mathbf{400px}$ (Vì khi dùng `border-box`, chiều rộng thực tế luôn bằng giá trị `width` đã đặt).
- **Kích thước content thực tế** = $400px - 20px \times 2 (padding) - 5px \times 2 (border) = \mathbf{350px}$.
- **Không gian chiếm trên trang** = $400px (chiều rộng hiển thị) + 10px \times 2 (margin) = \mathbf{420px}$.

#### * Trường hợp 3: Margin collapse *
- **Khoảng cách giữa box-a và box-b** = $\mathbf{40px}$.
- **Giải thích :** Theo hiện tượng **Margin Collapse**, khi hai thẻ block nằm chồng dọc, margin của chúng không cộng dồn mà sẽ gộp lại và lấy giá trị **lớn hơn** (giữa 25px và 40px thì 40px lớn hơn).

---

**Nâng cao:** Nếu `.box-a` có `margin-bottom: -10px` và `.box-b` có `margin-top: 40px`, khoảng cách = bao nhiêu?
- **Trả lời:** Khoảng cách = $\mathbf{30px}$.
- **Giải thích:** Khi có margin âm, trình duyệt sẽ lấy tổng đại số của margin dương lớn nhất và margin âm nhỏ nhất ($40px + (-10px) = 30px$).

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

* tài liệu tham chiếu: **09_css_selectors.md** và **10_inheritance_cascading.md**.

#### 1. Tính specificity score (a, b, c) cho mỗi rule:
- **Rule A (`p`)**: Score = **(0, 0, 1)** (Chỉ có 1 Tag selector).
- **Rule B (`.price`)**: Score = **(0, 1, 0)** (Chỉ có 1 Class selector).
- **Rule C (`#main-price`)**: Score = **(1, 0, 0)** (Chỉ có 1 ID selector).
- **Rule D (`p.price`)**: Score = **(0, 1, 1)** (Gồm 1 Tag selector và 1 Class selector).

#### 2. Element sẽ có màu gì? Giải thích:
- **Trả lời**: Element sẽ có màu **Red**.
- **Giải thích**: Theo bảng so sánh độ ưu tiên, ID selector (`#main-price`) có điểm số cao nhất (100) so với Class (10) và Tag (1). Rule nào có specificity score cao hơn sẽ thắng và áp dụng style lên phần tử.

#### 3. Nếu thêm style="color: orange;", element có màu gì?
- **Trả lời**: Màu **Orange**.
- **Giải thích**: **Inline styles** (viết trực tiếp trong thẻ HTML) có độ ưu tiên là 1000, cao hơn tất cả các bộ chọn ID, Class hay Tag trong file CSS bên ngoài.

#### 4. Nếu Rule A thêm !important, element có màu gì? Tại sao?
- **Trả lời**: Màu **Black**.
- **Giải thích**: Từ khóa `!important` là mức ưu tiên cao nhất trong CSS (vô cực). Nó ghi đè lên tất cả các quy tắc thông thường, bao gồm cả Inline styles và ID selectors.


### PHẦN B

### Câu B1
- 5 loại selector khác nhau:
* Element Selector: body, header, footer
* Class Selector: .navbar, .active, .skill-table.
* ID Selector: #main-header.
* Descendant Selector : .navbar a .
* Pseudo-class: :hover, :nth-child(even).


### Câu B2

### Phần 1: Chứng minh content-box vs border-box
- **Hộp 1 (content-box):** Chiều rộng thực tế đo được là ~350px. 
  (Giải thích: Chiều rộng thực tế = width + padding + border).
- **Hộp 2 (border-box):** Chiều rộng thực tế đo được là 300px. 
  

### Phần 2: Layout 3 cột
- Tổng chiều rộng 3 cột khi dùng border-box: 250px + 500px + 250px = 1000px (Vừa khít container).
- Nếu không dùng border-box, tổng sẽ là 1100px và làm vỡ layout (cột sẽ bị đẩy xuống hàng dưới).

### Câu B3

### 1. danh sách 10 css ruler và specificity score
- p (Màu grey) — Score: 0,0,1 (Chỉ có 1 Element selector).
- body p (Màu silver) — Score: 0,0,2 (Kết hợp 2 Element selectors).
- .text (Màu blue) — Score: 0,1,0 (Chỉ có 1 Class selector).
- p.text (Màu orange) — Score: 0,1,1 (Kết hợp 1 Element và 1 Class).
- .text.highlight (Màu green) — Score: 0,2,0 (Kết hợp 2 Class selectors).
- p.text.highlight (Màu purple) — Score: 0,2,1 (Kết hợp 1 Element và 2 Classes).
- #demo (Màu brown) — Score: 1,0,0 (Chỉ có 1 ID selector).
- p#demo (Màu cyan) — Score: 1,0,1 (Kết hợp 1 ID và 1 Element).
- #demo.text (Màu magenta) — Score: 1,1,0 (Kết hợp 1 ID và 1 Class).
- p#demo.text.highlight (Màu red) — Score: 1,2,1 (Kết hợp 1 ID, 2 Classes và 1 Element).

### 2. 
- màu sắc cuối cùng hiển thị là màu đỏ (red)
- Vì Rule số 10 có điểm Specificity cao nhất là 1,2,1. Theo quy tắc ưu tiên của CSS, ID ($1,0,0$) luôn mạnh hơn Class ($0,1,0$), và Class luôn mạnh hơn Element ($0,0,1$). Rule 10 hội tụ đầy đủ các thành phần mạnh nhất nên nó sẽ thắng tất cả các rule còn lại.

### 3. thay đổi thứ tự rules
- không thay đổi
- Trình duyệt ưu tiên dựa trên điểm số Specificity trước. Chỉ khi hai rule có điểm số bằng nhau hoàn toàn, trình duyệt mới xét đến quy tắc "Cái nào viết sau sẽ thắng" (Cascade). Vì các rule ở đây có điểm số khác nhau, nên thứ tự viết trước hay sau không làm thay đổi màu sắc cuối cùng của phần tử.