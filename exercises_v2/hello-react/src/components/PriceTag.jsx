// hello-react/src/components/PriceTag.jsx
function PriceTag({ originalPrice, salePrice }) {
    // Tính số phần trăm giảm giá dựa trên props truyền vào
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

    return (
        <div style={{ fontSize: "0.9rem", margin: "5px 0" }}>
            <span style={{ textDecoration: "line-through", color: "#95a5a6", marginRight: "10px" }}>
                {originalPrice.toLocaleString('vi-VN')}đ
            </span>
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
                {salePrice.toLocaleString('vi-VN')}đ
            </span>
            <span style={{ 
                marginLeft: "10px", 
                background: "#2ecc71", 
                color: "white", 
                padding: "2px 6px", 
                borderRadius: "4px",
                fontSize: "0.8rem" 
            }}>
                -{discount}%
            </span>
        </div>
    );
}

export default PriceTag;