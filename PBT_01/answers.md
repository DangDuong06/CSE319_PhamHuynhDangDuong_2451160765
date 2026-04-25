Câu A1:
1.Thứ tự 5 bước xảy ra:
  Bước 1: Request của bạn xuất phát từ laptop đi qua router WiFi nhà trọ.
  Bước 2: Qua nhà mạng VNPT chạy xuyên cáp quang dưới đáy Thái Bình Dương.
  Bước 3: Đến data center của trụ sở Shopee.
  Bước 4: Server Shopee xử lý request (ví dụ: truy xuất các mặt hàng sale, giỏ hàng).
  Bước 5: Response chạy ngược lại (Cáp quang - VNPT - router - laptop); Chrome nhận file HTML, CSS, JS và render ra giao diện trang chủ Shopee.
  * Nguồn tham chiếu: tuan_1_html5/01_introduction_html_universe.md - Mục: 🎬 Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương.
2.Trong tab Network khi truy cập shopee:
* Status Code: 200 (yêu cầu thành công)
* Tổng thời gian load lại: 1.49s
*  Request CSS: xác định qua cột Type là "Stylesheet"
* Ảnh minh họa: ![Tab Network Shopee](./screenshots/network_shopee.png)

### Câu A2 — Semantic HTML
**4 lỗi Semantic và cách sửa:**
1. Lỗi: Dùng `<div class="header">` -> Sửa: Thay bằng thẻ `<header>`.
2. Lỗi: Dùng `<div class="menu">` -> Sửa: Thay bằng thẻ `<nav>`.
3. Lỗi: Dùng `<div class="main">` -> Sửa: Thay bằng thẻ `<main>`.
4. Lỗi: Dùng `<div class="footer">` -> Sửa: Thay bằng thẻ `<footer>`.

**Code sửa lại:**
```html
<header>
    <h1>ShopTLU</h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>
<main>
    <article>
        <h2>iPhone 16 Pro</h2>
        <p>25.990.000đ</p>
    </article>
</main>
<footer>© 2026 ShopTLU</footer>
```

Câu A3:
---------------------------
|          Hộp 1          |  <- (Dòng 1: Block chiếm hết hàng)
---------------------------
Text A  Text B               <- (Dòng 2: Inline nằm chung hàng)
---------------------------
|          Hộp 2          |  <- (Dòng 3: Block chiếm hết hàng)
---------------------------
Text C  **Text D** <- (Dòng 4: Inline nằm chung hàng)
---------------------------
|          Hộp 3          |  <- (Dòng 5: Block chiếm hết hàng)
---------------------------
* giải thích chi tiết:
- Dòng 1, 3, 5: Hiển thị dưới dạng một khối riêng biệt, chiếm trọn 100% chiều ngang của trình duyệt. Điều này là do thẻ <div> là phần tử khối (Block), nó luôn bắt đầu trên một dòng mới và chiếm hết chiều rộng khả dụng.

- Dòng 2: "Text A" và "Text B" nằm sát nhau trên cùng một hàng vì thẻ <span> là phần tử nội dòng (Inline). Nó chỉ chiếm không gian vừa đủ để chứa nội dung và không tạo dòng mới.

- Dòng 4: "Text C" và "Text D" cũng nằm chung một hàng. Trong đó "Text D" được bôi đậm vì thẻ <strong> là phần tử Inline có kèm theo định dạng nhấn mạnh (bold).

* Nguồn tham chiếu: tuan_1_html5/02_basic_structure_html.md - Phần: Các thẻ cơ bản trong <body>.

Câu A4:
* Sự khác nhau giữa các thẻ:
<thead>: Phần đầu bảng, chứa tiêu đề các cột.
<tbody>: Phần thân bảng, chứa nội dung dữ liệu chính.
<tfoot>: Phần chân bảng, dùng để tổng kết hoặc ghi chú.

* Lý do không dùng table để làm layout:
- Sai semantic (Table chỉ dùng để hiển thị dữ liệu bảng).
- Khó tùy chỉnh co giãn giao diện (Responsive) trên điện thoại.
- Cấu trúc thẻ lồng nhau phức tạp (tr, td) làm code bị rối và khó bảo trì.

* Nguồn tham chiếu: tuan_1_html5/05_tables_hyperlinks.md - Phần: Table - Bảng dữ liệu.


### PHẦN B - BÀI B3: DEBUG HTML
**Liệt kê các lỗi trong đoạn mã gốc:**

* **Lỗi 1:** Dòng 1 – Thiếu khai báo loại tài liệu `html` trong thẻ DOCTYPE – Cách sửa: Sửa thành `<!DOCTYPE html>`.
* **Lỗi 2:** Dòng 2 – Thẻ `<html>` thiếu thuộc tính ngôn ngữ – Cách sửa: Thêm `lang="vi"`.
* **Lỗi 3:** Dòng 6 – Thẻ viết sai giá trị "utf8" – Cách sửa: Sửa chính xác thành `charset="UTF-8"`.
* **Lỗi 4:** Dòng 6 – Thẻ `<meta>` đặt sau thẻ `<title>` – Cách sửa: Đưa thẻ `<meta>` lên trên cùng ngay sau thẻ `<head>`.
* **Lỗi 5:** Dòng 9 – Thẻ kết thúc `<h1>` viết nhầm thành `<h1>` – Cách sửa: Đổi thành `</h1>`.
* **Lỗi 6:** Dòng 11 – Thẻ `<header>` đặt sau `<h1>` là sai cấu trúc logic – Cách sửa: Đưa `<h1>` vào bên trong thẻ `<header>`.
* **Lỗi 7:** Dòng 13 – Thẻ kết thúc `<a>` thiếu dấu gạch chéo `/` – Cách sửa: Sửa thành `</a>`.
* **Lỗi 8:** Dòng 13 – Thuộc tính `href="home"` không hợp lệ – Cách sửa: Sửa thành `href="index.html"`.
* **Lỗi 9:** Dòng 10 – Sử dụng các khoảng trống xuống hàng thừa không cần thiết – Cách sửa: Xóa bớt khoảng trắng thừa.
* **Lỗi 10:** Tổng thể – Thiếu các thẻ đóng quan trọng (`</nav>`, `</header>`, `</body>`, `</html>`) – Cách sửa: Thêm đầy đủ thẻ đóng theo đúng thứ tự.

### PHẦN B - BÀI B4: PHÂN TÍCH TRANG WEB THẬT 


### 1. Phân tích thẻ Semantic HTML5
* Nguồn tham chiếu: tuan_1_html5/04_semantic_html.md — Mục "Cấu trúc trang web với các thẻ Semantic".
* Thẻ `<header>`**: Chứa logo, thanh tìm kiếm và menu chính.
* Thẻ `<footer>`**: Chứa thông tin bản quyền, chính sách và liên hệ.
* Thẻ `<section>`**: Dùng để bao quanh các khối nội dung như "Săn sale online" hoặc "Sản phẩm mới".

#### 2. Phân tích Table
* Nguồn tham chiếu: tuan_1_html5/05_tables_hyperlinks.md.
* Nội dung: Thông số kỹ thuật sản phẩm.
* Nhận xét: Trang web dùng `<ul>`/`<li>` thay vì `<table>`. Do đó không có `<thead>` và `<tbody>`.

#### 3. Phân tích form
* Nguồn tham chiếu: tuan_1_html5/01_introduction_html_universe.md.

* 1.Action: /tim-kiem.
* 2.Input types: Ô nhập liệu là type="text".

### PHẦN C: SUY LUẬN
* Nguồn tham chiếu:** `tuan_1_html5/04_semantic_html.md`
* Câu 1C:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Product Detail</title>
</head>
<body>

   
    <header> <!-- Header: phần đầu trang -->
        
        <nav> <!-- Nav: menu điều hướng chính -->
            <ul>
                <li><a href="#"></a></li>
            </ul>
        </nav>
    </header>

   
    <nav aria-label="breadcrumb"> <!-- Breadcrumb: điều hướng vị trí -->
        
        <ol><!-- ol vì có thứ tự cấp -->
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li></li>
        </ol>
    </nav>

    
    <main><!-- Nội dung chính -->

        
        <section><!-- Section chứa sản phẩm -->

           
            <article> <!-- Article: 1 sản phẩm độc lập -->

             
                <div>   <!-- Ảnh sản phẩm -->
                    
                    <img src="#" alt=""><!-- nhóm ảnh -->
                    <img src="#" alt="">
                    <img src="#" alt="">
                    <img src="#" alt="">
                    <img src="#" alt="">
                </div>

                
                <div><!-- Thông tin sản phẩm -->
                    <h1></h1> <!-- tên -->
                    <p></p>   <!-- giá -->

                    <div>
                        <span></span> <!-- rating -->
                    </div>

                    <p></p> <!-- mô tả -->
                </div>

                <!-- Thông số kỹ thuật -->
                <section>
                    <h2></h2>
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </section>

                <!-- Đánh giá -->
                <section>
                    <h2></h2>

                    <article>
                        <h3></h3>
                        <p></p>
                    </article>

                </section>

            </article>
        </section>

        <!-- Sidebar -->
        <aside>
            <h2></h2>
            <ul>
                <li><a href="#"></a></li>
            </ul>
        </aside>

    </main>

    <!-- Footer -->
    <footer>
        <p></p>
    </footer>

</body>
</html>
```

* Câu 2C:
* Nguồn tham chiếu: tuan_1_html5/04_semantic_html.md — Mục "Lợi ích của Semantic HTML".

    Quan điểm cho rằng "chỉ cần dùng thẻ `<div>` và đặt tên class là đủ" là một tư duy chưa hoàn thiện trong lập trình Web hiện đại. 2 lý do kỹ thuật quan trọng mà thẻ `<div>` không thể thay thế được Semantic HTML:

    1. **Tối ưu hóa công cụ tìm kiếm (SEO):** Các robot của Google hay Bing sử dụng thẻ Semantic để hiểu cấu trúc và tầm quan trọng của nội dung. Một thẻ `<h1>` chứa tên sản phẩm sẽ có trọng số cao hơn nhiều so với một thẻ `<div class="title">`. Nếu dùng toàn bộ là div, website sẽ mất đi lợi thế cạnh tranh trên trang kết quả tìm kiếm.

    2. **Khả năng tiếp cận (Accessibility - A11y):** Đây là yếu tố nhân văn và kỹ thuật quan trọng. Các trình đọc màn hình (Screen Readers) dành cho người khiếm thị dựa vào các thẻ như `<nav>`, `<main>`, `<button>` để giúp họ điều hướng. Nếu dùng toàn div, người dùng khiếm thị sẽ không thể biết đâu là menu, đâu là nội dung chính, khiến website trở nên vô dụng với họ.

    **Ví dụ cụ thể:** Khi dùng thẻ `<nav>`, trình duyệt tự hiểu đây là khu vực điều hướng. Nếu dùng `<div class="nav">`, trình duyệt chỉ coi đó là một khối hộp vô danh, không có ý nghĩa về mặt chức năng.

    **Trường hợp dùng `<div>` vẫn phù hợp:** Thẻ `<div>` nên được dùng khi chúng ta chỉ cần một cái "hộp" để gom nhóm các phần tử nhằm mục đích căn chỉnh giao diện (layout), trang trí CSS mà không chứa đựng ý nghĩa nội dung đặc biệt nào (ví dụ: các thẻ wrapper, container để căn giữa trang).