### Câu hỏi & Trả lời

1. **File `.jsx` khác gì file `.js`?**
   - _Trả lời:_ File `.js` là JavaScript thuần túy. File `.jsx` cho phép viết mã HTML trực tiếp trong JavaScript để định nghĩa giao diện (UI) cho component.
2. **Tại sao phải `export default App`?**
   - _Trả lời:_ Để các file khác trong dự án (như `main.jsx`) có thể `import` và sử dụng component `App` này.
3. **Thử xóa `export default` → chuyện gì xảy ra?**
   - _Trả lời:_ Hệ thống sẽ báo lỗi ngay lập tức vì file `main.jsx` không thể tìm thấy component mặc định để render ra màn hình.
