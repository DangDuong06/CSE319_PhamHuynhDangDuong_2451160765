
const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/300x200?text=iPhone+16", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24", price: 22990000, category: "phone", image: "https://placehold.co/300x200?text=Samsung+S24", rating: 4.4, inStock: true },
    { id: 3, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/300x200?text=Pixel+9", rating: 4.6, inStock: true },
    { id: 4, name: "Xiaomi 14", price: 15990000, category: "phone", image: "https://placehold.co/300x200?text=Xiaomi+14", rating: 4.2, inStock: false },

    { id: 5, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/300x200?text=MacBook+Pro", rating: 4.8, inStock: true },
    { id: 6, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/300x200?text=Dell+XPS+15", rating: 4.7, inStock: true },
    { id: 7, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/300x200?text=ThinkPad+X1", rating: 4.5, inStock: true },

    { id: 8, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/300x200?text=iPad+Air", rating: 4.6, inStock: false },
    { id: 9, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/300x200?text=Xiaomi+Pad+6", rating: 4.2, inStock: true },
    { id: 10, name: "Galaxy Tab S9", price: 18990000, category: "tablet", image: "https://placehold.co/300x200?text=Galaxy+Tab+S9", rating: 4.4, inStock: true },

    { id: 11, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/300x200?text=AirPods+Pro", rating: 4.3, inStock: true },
    { id: 12, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/300x200?text=Galaxy+Buds", rating: 4.1, inStock: true },
    { id: 13, name: "Apple Watch S10", price: 10990000, category: "accessory", image: "https://placehold.co/300x200?text=Apple+Watch", rating: 4.7, inStock: true }
];

const state = {
    searchKeyword: "",
    selectedCategory: "all",
    sortType: "default",
    cartCount: 0
};

const app = document.querySelector("#app");

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

function getCategoryLabel(category) {
    const labels = {
        all: "Tất cả",
        phone: "Điện thoại",
        laptop: "Laptop",
        tablet: "Tablet",
        accessory: "Phụ kiện"
    };

    return labels[category] || category;
}

function createLayout() {
    const wrapper = document.createElement("div");
    wrapper.className = "app-wrapper";

    const header = document.createElement("header");
    header.className = "header";

    const headerLeft = document.createElement("div");
    headerLeft.className = "header-left";

    const title = document.createElement("h1");
    title.textContent = "Interactive Product Catalog";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Render sản phẩm, tìm kiếm, lọc, sắp xếp, modal và giỏ hàng bằng DOM.";

    headerLeft.appendChild(title);
    headerLeft.appendChild(subtitle);

    const cartBox = document.createElement("div");
    cartBox.className = "cart-box";

    const cartIcon = document.createElement("div");
    cartIcon.className = "cart-icon";
    cartIcon.textContent = "🛒";

    const cartBadge = document.createElement("span");
    cartBadge.id = "cartBadge";
    cartBadge.className = "cart-badge";
    cartBadge.textContent = "0";

    cartIcon.appendChild(cartBadge);
    cartBox.appendChild(cartIcon);

    header.appendChild(headerLeft);
    header.appendChild(cartBox);

    const controls = document.createElement("section");
    controls.className = "controls";

    const searchInput = document.createElement("input");
    searchInput.id = "searchInput";
    searchInput.className = "search-input";
    searchInput.type = "text";
    searchInput.placeholder = "Tìm sản phẩm theo tên...";

    const sortSelect = document.createElement("select");
    sortSelect.id = "sortSelect";
    sortSelect.className = "sort-select";

    const sortOptions = [
        { value: "default", text: "Sắp xếp mặc định" },
        { value: "price-asc", text: "Giá tăng dần" },
        { value: "price-desc", text: "Giá giảm dần" },
        { value: "name-asc", text: "Tên A-Z" },
        { value: "rating-desc", text: "Đánh giá cao nhất" }
    ];

    sortOptions.forEach(optionInfo => {
        const option = document.createElement("option");
        option.value = optionInfo.value;
        option.textContent = optionInfo.text;
        sortSelect.appendChild(option);
    });

    const darkToggle = document.createElement("button");
    darkToggle.id = "darkToggle";
    darkToggle.className = "dark-toggle";
    darkToggle.type = "button";
    darkToggle.textContent = "🌙 Dark mode";

    controls.appendChild(searchInput);
    controls.appendChild(sortSelect);
    controls.appendChild(darkToggle);

    const categoryButtons = document.createElement("section");
    categoryButtons.id = "categoryButtons";
    categoryButtons.className = "category-buttons";

    const categories = ["all", "phone", "laptop", "tablet", "accessory"];
    categories.forEach(category => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = category === "all" ? "category-btn active" : "category-btn";
        button.dataset.category = category;
        button.textContent = getCategoryLabel(category);
        categoryButtons.appendChild(button);
    });

    const resultInfo = document.createElement("p");
    resultInfo.id = "resultInfo";
    resultInfo.className = "result-info";

    const productGrid = document.createElement("section");
    productGrid.id = "productGrid";
    productGrid.className = "product-grid";

    wrapper.appendChild(header);
    wrapper.appendChild(controls);
    wrapper.appendChild(categoryButtons);
    wrapper.appendChild(resultInfo);
    wrapper.appendChild(productGrid);

    app.appendChild(wrapper);
}

function filterByCategory(productList) {
    if (state.selectedCategory === "all") {
        return productList;
    }

    return productList.filter(product => product.category === state.selectedCategory);
}

function searchProducts(productList) {
    const keyword = state.searchKeyword.toLowerCase().trim();

    if (keyword === "") {
        return productList;
    }

    return productList.filter(product => product.name.toLowerCase().includes(keyword));
}

function sortProducts(productList) {
    const copiedProducts = [...productList];

    if (state.sortType === "price-asc") {
        return copiedProducts.sort((a, b) => a.price - b.price);
    }

    if (state.sortType === "price-desc") {
        return copiedProducts.sort((a, b) => b.price - a.price);
    }

    if (state.sortType === "name-asc") {
        return copiedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (state.sortType === "rating-desc") {
        return copiedProducts.sort((a, b) => b.rating - a.rating);
    }

    return copiedProducts;
}

function getVisibleProducts() {
    let result = products;
    result = filterByCategory(result);
    result = searchProducts(result);
    result = sortProducts(result);
    return result;
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = product.id;

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image;
    image.alt = product.name;

    const content = document.createElement("div");
    content.className = "product-content";

    const name = document.createElement("h2");
    name.className = "product-name";
    name.textContent = product.name;

    const meta = document.createElement("div");
    meta.className = "product-meta";

    const category = document.createElement("span");
    category.textContent = getCategoryLabel(product.category);

    const rating = document.createElement("span");
    rating.textContent = "⭐ " + product.rating;

    meta.appendChild(category);
    meta.appendChild(rating);

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = formatPrice(product.price);

    const stockStatus = document.createElement("span");
    stockStatus.className = product.inStock ? "stock-status in-stock" : "stock-status out-stock";
    stockStatus.textContent = product.inStock ? "Còn hàng" : "Hết hàng";

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-cart-btn";
    addButton.dataset.action = "add-cart";
    addButton.dataset.id = product.id;
    addButton.textContent = "Thêm giỏ";
    addButton.disabled = !product.inStock;

    content.appendChild(name);
    content.appendChild(meta);
    content.appendChild(price);
    content.appendChild(stockStatus);
    content.appendChild(addButton);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function renderProducts() {
    const productGrid = document.querySelector("#productGrid");
    const resultInfo = document.querySelector("#resultInfo");
    const visibleProducts = getVisibleProducts();

    productGrid.textContent = "";
    resultInfo.textContent = `Đang hiển thị ${visibleProducts.length}/${products.length} sản phẩm`;

    if (visibleProducts.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Không tìm thấy sản phẩm phù hợp.";
        productGrid.appendChild(emptyMessage);
        return;
    }

    visibleProducts.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

function updateCategoryButtons() {
    const buttons = document.querySelectorAll(".category-btn");

    buttons.forEach(button => {
        if (button.dataset.category === state.selectedCategory) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

function updateCartBadge() {
    const cartBadge = document.querySelector("#cartBadge");
    cartBadge.textContent = state.cartCount;
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product || !product.inStock) {
        return;
    }

    state.cartCount++;
    updateCartBadge();
}

function showProductModal(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "modalOverlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "close-modal";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Đóng modal");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Giá:</strong> ${formatPrice(product.price)}`;

    const category = document.createElement("p");
    category.innerHTML = `<strong>Danh mục:</strong> ${getCategoryLabel(product.category)}`;

    const rating = document.createElement("p");
    rating.innerHTML = `<strong>Đánh giá:</strong> ⭐ ${product.rating}`;

    const stock = document.createElement("p");
    stock.innerHTML = `<strong>Trạng thái:</strong> ${product.inStock ? "Còn hàng" : "Hết hàng"}`;

    const description = document.createElement("p");
    description.textContent = "Đây là modal chi tiết sản phẩm được tạo hoàn toàn bằng JavaScript.";

    modal.appendChild(closeButton);
    modal.appendChild(image);
    modal.appendChild(title);
    modal.appendChild(price);
    modal.appendChild(category);
    modal.appendChild(rating);
    modal.appendChild(stock);
    modal.appendChild(description);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeModal();
        }
    });
}

function closeModal() {
    const overlay = document.querySelector("#modalOverlay");

    if (overlay) {
        overlay.remove();
    }
}

function bindEvents() {
    const searchInput = document.querySelector("#searchInput");
    const sortSelect = document.querySelector("#sortSelect");
    const categoryButtons = document.querySelector("#categoryButtons");
    const productGrid = document.querySelector("#productGrid");
    const darkToggle = document.querySelector("#darkToggle");

    searchInput.addEventListener("input", event => {
        state.searchKeyword = event.target.value;
        renderProducts();
    });

    sortSelect.addEventListener("change", event => {
        state.sortType = event.target.value;
        renderProducts();
    });

    categoryButtons.addEventListener("click", event => {
        const button = event.target.closest(".category-btn");

        if (!button) {
            return;
        }

        state.selectedCategory = button.dataset.category;
        updateCategoryButtons();
        renderProducts();
    });

    productGrid.addEventListener("click", event => {
        const addButton = event.target.closest("[data-action='add-cart']");

        if (addButton) {
            event.stopPropagation();
            addToCart(Number(addButton.dataset.id));
            return;
        }

        const card = event.target.closest(".product-card");

        if (card) {
            showProductModal(Number(card.dataset.id));
        }
    });

    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        darkToggle.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

function init() {
    createLayout();
    bindEvents();
    renderProducts();
}

init();
