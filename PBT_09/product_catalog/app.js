const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/300x200?text=iPhone", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24", price: 22990000, category: "phone", image: "https://placehold.co/300x200?text=Samsung", rating: 4.4, inStock: true },
    { id: 3, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/300x200?text=Pixel", rating: 4.6, inStock: true },
    { id: 4, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/300x200?text=MacBook", rating: 4.8, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/300x200?text=Dell", rating: 4.7, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/300x200?text=ThinkPad", rating: 4.5, inStock: true },
    { id: 7, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/300x200?text=iPad", rating: 4.6, inStock: false },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/300x200?text=Xiaomi+Pad", rating: 4.2, inStock: true },
    { id: 9, name: "Galaxy Tab", price: 12990000, category: "tablet", image: "https://placehold.co/300x200?text=Galaxy+Tab", rating: 4.3, inStock: true },
    { id: 10, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/300x200?text=AirPods", rating: 4.3, inStock: true },
    { id: 11, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/300x200?text=Buds", rating: 4.1, inStock: true },
    { id: 12, name: "Magic Mouse", price: 2490000, category: "accessory", image: "https://placehold.co/300x200?text=Mouse", rating: 4.0, inStock: true }
];

let state = {
    search: "",
    category: "all",
    sort: "default",
    cartCount: 0
};

function formatMoney(value) {
    return value.toLocaleString("vi-VN") + "đ";
}

function buildLayout() {
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.textContent = "Interactive Product Catalog";

    const controls = document.createElement("div");
    controls.className = "controls";

    const searchInput = document.createElement("input");
    searchInput.id = "searchInput";
    searchInput.placeholder = "Tìm sản phẩm...";

    const categories = ["all", "phone", "laptop", "tablet", "accessory"];
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.dataset.category = category;
        btn.textContent = category;
        if (category === "all") btn.classList.add("active");
        controls.appendChild(btn);
    });

    const sortSelect = document.createElement("select");
    sortSelect.id = "sortSelect";
    [
        ["default", "Mặc định"],
        ["priceAsc", "Giá tăng"],
        ["priceDesc", "Giá giảm"],
        ["nameAsc", "Tên A-Z"],
        ["ratingDesc", "Đánh giá cao nhất"]
    ].forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        sortSelect.appendChild(option);
    });

    const darkBtn = document.createElement("button");
    darkBtn.id = "darkBtn";
    darkBtn.textContent = "Dark mode";

    const cart = document.createElement("span");
    cart.className = "cart";
    cart.id = "cartBadge";
    cart.textContent = "🛒 0";

    controls.prepend(searchInput);
    controls.appendChild(sortSelect);
    controls.appendChild(darkBtn);
    controls.appendChild(cart);

    header.appendChild(title);
    header.appendChild(controls);

    const grid = document.createElement("div");
    grid.className = "grid";
    grid.id = "productGrid";

    const modal = document.createElement("div");
    modal.className = "modal hidden";
    modal.id = "modal";

    container.appendChild(header);
    container.appendChild(grid);
    document.body.appendChild(container);
    document.body.appendChild(modal);
}

function getVisibleProducts() {
    let result = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(state.search.toLowerCase());
        const matchCategory = state.category === "all" || product.category === state.category;
        return matchSearch && matchCategory;
    });

    if (state.sort === "priceAsc") result = [...result].sort((a, b) => a.price - b.price);
    if (state.sort === "priceDesc") result = [...result].sort((a, b) => b.price - a.price);
    if (state.sort === "nameAsc") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (state.sort === "ratingDesc") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = product.id;

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = formatMoney(product.price);

    const meta = document.createElement("p");
    meta.textContent = `${product.category} • ⭐ ${product.rating}`;

    const stock = document.createElement("p");
    stock.className = product.inStock ? "stock" : "out";
    stock.textContent = product.inStock ? "Còn hàng" : "Hết hàng";

    const addBtn = document.createElement("button");
    addBtn.className = "add-cart";
    addBtn.textContent = "Thêm giỏ";
    addBtn.disabled = !product.inStock;

    card.append(img, name, price, meta, stock, addBtn);
    return card;
}

function renderProducts() {
    const grid = document.querySelector("#productGrid");
    grid.replaceChildren();

    getVisibleProducts().forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function showModal(product) {
    const modal = document.querySelector("#modal");
    modal.replaceChildren();
    modal.classList.remove("hidden");

    const content = document.createElement("div");
    content.className = "modal-content";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "Đóng";

    const title = document.createElement("h2");
    title.textContent = product.name;

    const info = document.createElement("p");
    info.textContent = `Giá: ${formatMoney(product.price)} | Category: ${product.category} | Rating: ${product.rating}`;

    content.append(closeBtn, title, info);
    modal.appendChild(content);

    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
}

function bindEvents() {
    document.querySelector("#searchInput").addEventListener("input", (e) => {
        state.search = e.target.value;
        renderProducts();
    });

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.category = btn.dataset.category;
            renderProducts();
        });
    });

    document.querySelector("#sortSelect").addEventListener("change", (e) => {
        state.sort = e.target.value;
        renderProducts();
    });

    document.querySelector("#darkBtn").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    document.querySelector("#productGrid").addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (!card) return;

        const product = products.find(p => p.id === Number(card.dataset.id));

        if (e.target.classList.contains("add-cart")) {
            e.stopPropagation();
            state.cartCount++;
            document.querySelector("#cartBadge").textContent = `🛒 ${state.cartCount}`;
            return;
        }

        showModal(product);
    });

    document.querySelector("#modal").addEventListener("click", (e) => {
        if (e.target.id === "modal") {
            e.currentTarget.classList.add("hidden");
        }
    });
}

buildLayout();
bindEvents();
renderProducts();
