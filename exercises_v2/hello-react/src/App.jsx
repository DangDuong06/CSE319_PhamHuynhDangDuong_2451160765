// hello-react/src/App.jsx
import ProductCard from "./components/ProductCard"; // Import component con vào đây

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://picsum.photos/200?random=1" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://picsum.photos/200?random=2" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://picsum.photos/200?random=3" }
    ];

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Cửa hàng điện thoại của Dương</h1>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;