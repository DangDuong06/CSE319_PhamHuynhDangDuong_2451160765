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