function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Bài tập Tier 0 - Component đầu tiên</h1>
            <p>Hôm nay là ngày đẹp trời, cùng học React nhé!</p>
            
            <hr style={{ margin: '20px 0' }} />

            {/* Bài tập 1: Component UserProfile viết bằng JSX */}
            <div className="profile" style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
                <h2 style={{ marginTop: 0 }}>Hồ sơ cá nhân</h2>
                {/* Thay đường dẫn ảnh online để hiển thị trực tiếp cho đẹp */}
                <img src="https://picsum.photos/150" alt="Ảnh đại diện" style={{ borderRadius: '4px' }} />
                <table border="1" cellPadding="8" style={{ marginTop: '15px', width: '100%', borderCollapse: 'collapse', borderColor: '#eee' }}>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: 'bold', width: '30%' }}>Họ tên:</td>
                            <td>Dương</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Email:</td>
                            <td>Duong@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Bài tập 2: Component ProductInfo viết bằng JSX */}
            <div className="product" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                <h2 style={{ marginTop: 0 }}>iPhone 15</h2>
                <p className="price" style={{ color: '#e44d26', fontWeight: 'bold', fontSize: '1.2rem' }}>25.000.000đ</p>
                <ul>
                    <li>Màn hình: 6.1 inch</li>
                    <li>Camera: 48MP</li>
                    <li>Pin: 3349 mAh</li>
                </ul>
                <button style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                }}>
                    Mua ngay
                </button>
            </div>
        </div>
    );
}

export default App;