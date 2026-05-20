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

### Bài C2:
## 1.CSS thuần (Vanilla CSS)
- Số dòng CSS cần viết: Rất nhiều (Khoảng 80 - 150 dòng). Phải tự định nghĩa từ container, flexbox/grid layout, các thuộc tính typography, box-shadow, bo góc, viết các @media screen để xử lý responsive riêng cho cả navbar và card.
- Thời gian phát triển: Chậm. Tốn nhiều thời gian thiết kế cấu trúc layout, căn chỉnh padding/margin, và debug lỗi hiển thị vỡ khung trên các kích thước màn hình hoặc trình duyệt khác nhau.
- Khả năng tùy biến: Tối đa (100%). Bạn hoàn toàn làm chủ mọi pixel, có thể tạo ra bất kỳ hiệu ứng độc lạ hay layout phá cách nào theo đúng ý đồ thiết kế mà không bị ràng buộc.

## 2.Bootstrap Version
- Số dòng CSS cần viết: Gần như bằng 0. 100% sử dụng các class tiện ích có sẵn như d-flex, col-*, card, navbar-expand-lg.
- Thời gian phát triển: Cực kỳ nhanh. Chỉ cần lắp ghép các class component và utility theo tài liệu hướng dẫn. Giảm đến 70-80% thời gian code giao diện thô.
- Khả năng tùy biến: Bị giới hạn trong bộ khung. Nếu muốn tùy biến sâu ngoài các cấu hình mặc định, bắt buộc phải hiểu sâu về SASS variables hoặc viết đè CSS, nếu không giao diện sẽ trông đại trà ("mùi Bootstrap").

### Nên dùng Bootstrap khi:
- Cần phát triển nhanh các dự án thương mại điện tử, landing page tiêu chuẩn hoặc các trang quản trị (Admin Dashboard) nơi cấu trúc giao diện đi theo phom chuẩn hóa, đề cao tính mạch lạc.
- Làm việc trong các dự án mẫu (Prototype), MVP (sản phẩm khả thi tối thiểu) cần ra mắt thị trường trong thời gian ngắn để thử nghiệm.
- Đội ngũ phát triển mạnh về Backend, cần một framework hỗ trợ sẵn UI vững chắc, responsive tốt mà không cần chuyên sâu về thiết kế CSS.

### Không nên dùng Bootstrap khi:
- Dự án đòi hỏi tính sáng tạo nghệ thuật cao, giao diện độc quyền, độc lạ (Creative Agency, Portfolio nghệ thuật, Web giới thiệu game bom tấn...).
- Cần tối ưu dung lượng tải trang ở mức cực đoan (Micro-optimization). Bootstrap chứa rất nhiều CSS dư thừa nếu bạn chỉ xài một vài component của nó (dù có thể tối ưu bằng PurgeCSS nhưng vẫn cồng kềnh hơn CSS viết tay vừa vặn).
- Khi bạn đang trong quá trình học nền tảng HTML/CSS; lạm dụng Bootstrap quá sớm sẽ khiến bạn bị hổng tư duy về Box Model, Flexbox, Grid và cách hoạt động thực sự của CSS responsive.


### TRACK B
### PHẦN A — ĐỌC HIỂU 
#### Câu A1 
1. `Thẻ cha ngoài cùng (<div>)flex $\rightarrow$ display: flexitems-center $\rightarrow$ align-items: centerjustify-between $\rightarrow$ justify-content: space-betweenp-4 $\rightarrow$ padding: 1rem (16px)bg-white $\rightarrow$ background-color: #ffffffshadow-md $\rightarrow$ Thiết lập đổ bóng mức độ trung bình (box-shadow)rounded-lg $\rightarrow$ Bo góc lớn (border-radius: 0.5rem (8px))hover:shadow-xl $\rightarrow$ Thay đổi bóng đổ lớn hơn khi di chuột qua (box-shadow lớn hơn)transition-shadow $\rightarrow$ Chỉ áp dụng hiệu ứng chuyển động mượt cho thuộc tính box-shadowduration-300 $\rightarrow$ Thời gian của hiệu ứng transition kéo dài 300ms`
2. ` Thẻ ảnh đại diện (<img>)w-16 $\rightarrow$ Chiều rộng width: 4rem (64px)h-16 $\rightarrow$ Chiều cao height: 4rem (64px)rounded-full $\rightarrow$ Bo tròn tuyệt đối thành hình vòng tròn (border-radius: 9999px)object-cover $\rightarrow$ object-fit: cover (Ảnh tự động co dãn lấp đầy khung mà không bị méo tỉ lệ)`
3. `Thẻ bọc thông tin văn bản (<div> ở giữa)ml-4 $\rightarrow$ Khoảng cách lề bên trái margin-left: 1rem (16px)flex-1 $\rightarrow$ flex: 1 1 0% (Cho phép phần tử tự co dãn chiếm toàn bộ khoảng trống còn lại)`
4. `Thẻ tên người dùng (<h3>)text-lg $\rightarrow$ Cỡ chữ lớn font-size: 1.125rem (18px) kèm line-height: 1.75remfont-semibold $\rightarrow$ Độ dày chữ hơi đậm font-weight: 600text-gray-800 $\rightarrow$ Màu chữ xám đậm (color mã #1f2937)truncate $\rightarrow$ Ẩn phần chữ dư thừa bằng dấu 3 chấm nếu text quá dài (overflow: hidden; text-overflow: ellipsis; white-space: nowrap;)`
5. `Thẻ vị trí công việc (<p>)text-sm $\rightarrow$ Cỡ chữ nhỏ font-size: 0.875rem (14px) kèm line-height: 1.25remtext-gray-500 $\rightarrow$ Màu chữ xám vừa (color mã #6b7280)`
6. `Thẻ nút bấm (<button>)px-4 $\rightarrow$ Padding trái và phải padding-left: 1rem; padding-right: 1rem;py-2 $\rightarrow$ Padding trên và dưới padding-top: 0.5rem; padding-bottom: 0.5rem;bg-blue-500 $\rightarrow$ Màu nền xanh dương (background-color: #3b82f6)text-white $\rightarrow$ Màu chữ trắng (color: #ffffff)rounded-md $\rightarrow$ Bo góc vừa phải (border-radius: 0.375rem (6px))hover:bg-blue-600 $\rightarrow$ Đổi màu nền xanh đậm hơn khi di chuột qua (background-color: #2563eb)focus:ring-2 $\rightarrow$ Hiển thị vòng ring viền dày 2px bao quanh nút khi được focus (box-shadow)focus:ring-blue-300 $\rightarrow$ Màu của vòng ring focus là xanh dương nhạt (#93c5fd)`

### Câu A2
1. Giải thích prefix responsive:
- md:, lg:, xl: là các Breakpoint Modifiers dựa trên Mobile-first. Nó tương ứng với các truy vấn phương tiện (@media) với kích thước màn hình tối thiểu (min-width).
- md: áp dụng từ màn hình từ 768px trở lên.
- lg: áp dụng từ màn hình từ 1024px trở lên.
- xl: áp dụng từ màn hình từ 1280px trở lên.
* Ví dụ md:grid-cols-2 lg:grid-cols-4 nghĩa là: * Trên giao diện màn hình Tablet/máy tính nhỏ (từ 768px đến 1023px), lưới (grid) sẽ hiển thị 2 cột.
- Khi màn hình đạt kích thước Desktop (từ 1024px trở lên), lưới (grid) sẽ tự động chuyển sang hiển thị 4 cột.

2. Giải thích state modifiers:
- hover: Trạng thái khi người dùng di chuột (con trỏ chuột) lên trên phần tử (:hover).
- focus: Trạng thái khi phần tử đang được chọn hoặc kích hoạt (ví dụ: click vào ô input, dùng phím Tab di chuyển đến button) (:focus).
- active: Trạng thái ngay tại thời điểm người dùng đang nhấn giữ chuột vào phần tử (:active).
- group-hover: Trạng thái thay đổi phong cách của một phần tử con dựa trên hành động hover vào một phần tử cha (Phần tử cha phải được gắn class group, khi hover vào cha thì thằng con mang class group-hover:... mới được kích hoạt).

3. Viết class Tailwind cho: "Ẩn trên mobile, hiện dạng flex trên tablet trở lên"
- Class Tailwind tương đương sẽ là: hidden md:flexhidden 
`$\rightarrow$ Ẩn hoàn toàn trên thiết bị mặc định (Mobile dưới 768px) giống như display: none.`
`md:flex $\rightarrow$ Kích hoạt display: flex khi màn hình đạt từ breakpoint md (min-width: 768px) trở lên.`

### Phần C
### Bài C1
1. HTML file size (CSS thuần vs Tailwind HTML)
- CSS thuần: Dung lượng file HTML nhỏ hơn rất nhiều. Lý do là thẻ HTML chỉ chứa cấu trúc cơ bản và các tên class ngắn gọn (Ví dụ: class="product-card"). Toàn bộ gánh nặng dung lượng được chuyển sang file .css tách biệt.
- Tailwind CSS: Dung lượng file HTML phình to hơn đáng kể. Do sử dụng tư duy Utility-first, một thẻ có thể phải gánh hàng chục class tiện ích (Ví dụ: class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200 overflow-hidden flex flex-col").

2. Maintainability (Dễ đọc? Dễ sửa?)
- Tính dễ đọc: * CSS thuần dễ đọc cấu trúc HTML hơn vì nó sạch sẽ.
- Tailwind ban đầu gây hoa mắt vì "rác" class (class soup), nhưng lại giúp người đọc biết ngay thuộc tính CSS của element đó mà không cần phải nhảy qua nhảy lại giữa file HTML và file CSS.
- Tính dễ sửa:
- Tailwind vượt trội hơn khi sửa cục bộ: Sửa phần tử nào chỉ cần can thiệp đúng class của phần tử đó trong HTML, hoàn toàn không sợ làm ảnh hưởng hay phá vỡ giao diện của các component khác (bản chất của CSS thuần nếu viết class chung rất dễ bị hiệu ứng domino - sửa chỗ này hỏng chỗ kia).

3. Reusability (Dùng lại thế nào? @apply?)
- CSS thuần: Tái sử dụng bằng cách gọi lại tên class (Ví dụ: .product-card) ở bất kỳ đâu trong dự án.
- Tailwind CSS: Có 2 cách chính để tái sử dụng:
- Cách 1 (Khuyên dùng trong dự án thực tế): Tách component ở tầng Framework (React, Vue, Blade, Components tĩnh) rồi gọi lại thẻ đó.
- Cách 2 (Sử dụng @apply trong file CSS): Gom các utility classes lại thành một class tùy biến