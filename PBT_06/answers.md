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