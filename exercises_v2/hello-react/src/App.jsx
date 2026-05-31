// hello-react/src/App.jsx
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard"; // Import Thử thách 1

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://picsum.photos/200?random=1" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://picsum.photos/200?random=2" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://picsum.photos/200?random=3" }
    ];

    // Mảng dữ liệu cho Thử thách 3: Hiển thị 3 UserCard khác nhau
    const users = [
        { id: 1, name: "Đăng Dương", email: "duong@thuyloi.edu.vn", avatar: "https://picsum.photos/100?random=10" },
        { id: 2, name: "Nguyễn Văn Minh", email: "minh@example.com", avatar: "https://picsum.photos/100?random=11" },
        { id: 3, name: "Trần Thị An", email: "an@example.com", avatar: "https://picsum.photos/100?random=12" }
    ];

    return (
        <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            
            <main style={{ flex: 1, padding: "20px" }}>
                {/* Khu vực danh sách sản phẩm */}
                <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Danh sách sản phẩm nổi bật</h2>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                <hr style={{ margin: "40px 0", border: "0", borderTop: "1px dashed #ccc" }} />

                {/* Khu vực Thử thách hiển thị 3 UserCard */}
                <h2 style={{ textAlign: "center", color: "#2c3e50" }}>🎯 Kết quả Thử thách: Danh sách thành viên</h2>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                    {users.map(user => (
                        <UserCard 
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            avatar={user.avatar}
                        />
                    ))}
                </div>
            </main>
            
            <footer style={{ marginTop: "auto" }}>
                <Footer />
            </footer>
        </div>
    );
}

export default App;