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