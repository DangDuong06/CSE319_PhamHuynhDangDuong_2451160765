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
