// hello-react/src/App.jsx
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://picsum.photos/200?random=1" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://picsum.photos/200?random=2" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://picsum.photos/200?random=3" }
    ];

    return (
        <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* 1. Nhúng Header */}
            <Header />
            
            {/* 2. Phần nội dung chính (Main Content) */}
            <main style={{ flex: 1, padding: "20px" }}>
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
            </main>
            
            {/* 3. Nhúng Footer */}
            <Footer />
        </div>
    );
}

export default App;