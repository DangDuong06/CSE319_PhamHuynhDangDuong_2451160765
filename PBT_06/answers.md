### TRACK A
## PHẦN A 

### Câu A1 

#### 1. Bảng quy đổi Layout qua các kích thước màn hình:

| Kích thước | < 768px (Mobile - `xs`) | 768px - 991px (Tablet - `md`) | ≥ 992px (Desktop - `lg`) |
|------------|-------------------------|-------------------------------|--------------------------|
| **Số cột hiển thị trên 1 hàng** | 1 cột | 2 cột | 4 cột |
| **Box layout** | Mỗi Box chiếm trọn 12/12 cột (100% chiều rộng). 4 Box xếp thành **4 hàng dọc**. | Mỗi Box chiếm 6/12 cột (50% chiều rộng). 4 Box xếp thành **2 hàng, mỗi hàng 2 Box**. | Mỗi Box chiếm 3/12 cột (25% chiều rộng). Cả 4 Box xếp gọn trên **1 hàng ngang**. |

#### 2. Trả lời câu hỏi bổ sung:
* **`col-md-6` nghĩa là:** Khi màn hình có kích thước từ mức **Medium (`md`) trở lên ($\ge$ 768px)**, phần tử này sẽ chiếm **6 trên tổng số 12 cột** của hệ thống Grid (tương đương 50% chiều rộng của thẻ cha `.row`).
* **Không cần viết `col-sm-12` vì:** Trong Bootstrap, các class grid hoạt động theo cơ chế **Mobile-First** (ưu tiên cấu hình từ màn hình nhỏ rồi kế thừa lên màn hình lớn). Class `col-12` áp dụng từ kích thước nhỏ nhất (`xs`). Nếu không khai báo cụ thể cho mức `sm`, màn hình cỡ `sm` ($\ge$ 576px) sẽ tự động kế thừa thuộc tính của màn hình nhỏ hơn nó là `col-12`. Do đó viết `col-sm-12` là dư thừa.

### Câu A2 — Utilities & Components

#### 1. Giải thích class `d-none d-md-block`:
* `d-none`: Ẩn hoàn toàn phần tử (`display: none`) trên tất cả kích thước màn hình tính từ nhỏ nhất.
* `d-md-block`: Từ màn hình cỡ Medium (`md` $\ge$ 768px) trở lên, ghi đè lại thuộc tính thành `display: block`.
* **Kết luận:** Phần tử này sẽ **ẩn trên Mobile/Tablet nhỏ (< 768px)** và **hiển thị trên các màn hình từ Tablet lớn/Desktop trở lên ($\ge$ 768px)**.

#### 2. Liệt kê và giải thích 5 spacing utilities:
* `mt-3`: Cài đặt `margin-top` ở mức 3 (mặc định trong Bootstrap là `1rem` = `16px`).
* `px-4`: Cài đặt đồng thời `padding-left` và `padding-right` ở mức 4 (`1.5rem` = `24px`).
* `mb-auto`: Cài đặt `margin-bottom: auto!important`, thường dùng trong flexbox để đẩy các phần tử đồng cấp khác về phía đối diện.
* `pt-5`: Cài đặt `padding-top` ở mức lớn nhất là mức 5 (`3rem` = `48px`).
* `mx-2`: Cài đặt đồng thời `margin-left` và `margin-right` ở mức 2 (`0.5rem` = `8px`).

#### 3. Sự khác nhau giữa `.container`, `.container-fluid`, và `.container-md`:
* `.container`: Cố định độ rộng tối đa (`max-width`) theo từng breakpoint cụ thể (ví dụ: trên màn hình $\ge$ 1200px thì rộng tối đa 1140px) và tự động căn giữa.
* `.container-fluid`: Luôn luôn rộng **100%** màn hình (`width: 100%`) ở mọi kích thước, không bị giới hạn bởi `max-width`.
* `.container-md`: Chiếm độ rộng **100%** trên các màn hình nhỏ hơn 768px, nhưng khi đạt từ mức `md` ($\ge$ 768px) trở lên, nó sẽ co lại và hoạt động như một `.container` cố định độ rộng.


### Phần C:
### Bài C1:
1. Quy trình đổi màu $primary từ xanh mặc định sang #E63946
    Để tùy biến mã màu cốt lõi của Bootstrap một cách chuyên nghiệp, chúng ta không sửa trực tiếp vào file mã nguồn gốc của Bootstrap mà thực hiện qua SASS/SCSS compilation.

* Công cụ cần thiết:
    Node.js & npm: Để quản lý các package.
    Trình biên dịch SASS: Cài đặt gói sass (Dart Sass) qua lệnh npm install sass.
    Bootstrap Source Files: Cài đặt source code Bootstrap vào dự án qua lệnh npm install bootstrap.

* Quy trình và file cần modify:
    Tạo một file SCSS tùy biến của riêng bạn, ví dụ tên là assets/scss/custom.scss.
    Trong file custom.scss, tiến hành ghi đè biến $primary trước khi import Bootstrap.

2. Tại sao KHÔNG nên override trực tiếp .btn-primary { background: red; }?
- Ghi đè (override) CSS trực tiếp bằng cách viết đè class là một "bad practice" (thực hành xấu) vì những lý do sau:

- Mất tính đồng bộ hệ thống: Trong Bootstrap, biến $primary không chỉ quy định màu nền của nút .btn-primary, mà nó còn tự động tính toán và áp dụng cho màu chữ link, màu viền (border-color), màu nền các thẻ active, các badge (bg-primary), các text utility (text-primary), và trạng thái :hover, :focus, :active. Nếu chỉ sửa mỗi .btn-primary, các thành phần khác vẫn sẽ mang màu xanh mặc định, khiến giao diện bị "lệch pha".

- Trạng thái tương tác bị lỗi: Khi bạn override background: red;, các hiệu ứng khi di chuột (:hover), click giữ (:active), hay chọn (:focus) của nút bấm sẽ không tự động đổi sắc độ đậm/nhạt theo màu đỏ mới, dẫn đến trải nghiệm người dùng kém tự nhiên.

- Khó bảo trì (Maintainability): Khi dự án lớn lên, việc tìm và sửa các đoạn CSS override thủ công rất mất thời gian, dễ gây xung đột độ ưu tiên selector (specificity). Sử dụng SASS variables giúp quản lý toàn bộ theme của website tập trung tại một nơi duy nhất.