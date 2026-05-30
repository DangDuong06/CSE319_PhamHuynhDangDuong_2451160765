function createCart() {
    let items = [];
    let discount = { type: "percent", value: 0, code: null };

    const formatMoney = amount => amount.toLocaleString("vi-VN") + "đ";

    const getSubtotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getDiscountAmount = () => {
        const subtotal = getSubtotal();

        if (discount.type === "percent") {
            return subtotal * discount.value;
        }

        if (discount.type === "fixed") {
            return Math.min(discount.value, subtotal);
        }

        return 0;
    };

    return {
        addItem(product, quantity = 1) {
            if (!product || typeof product.id === "undefined") {
                console.log("Lỗi: Sản phẩm không hợp lệ");
                return;
            }

            if (quantity <= 0) {
                console.log("Lỗi: Số lượng phải lớn hơn 0");
                return;
            }

            const existingItem = items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }

            const item = items.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },

        getTotal() {
            return getSubtotal() - getDiscountAmount();
        },

        applyDiscount(code) {
            const upperCode = code.toUpperCase();

            if (upperCode === "SALE10") {
                discount = { type: "percent", value: 0.1, code: upperCode };
            } else if (upperCode === "SALE20") {
                discount = { type: "percent", value: 0.2, code: upperCode };
            } else if (upperCode === "FREESHIP") {
                discount = { type: "fixed", value: 30000, code: upperCode };
            } else {
                console.log(`Mã giảm giá '${code}' không hợp lệ`);
            }
        },

        printCart() {
            console.log("┌────────────────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm                 │ SL │ Đơn giá          │ Tổng         │");
            console.log("├────────────────────────────────────────────────────────────────────┤");

            if (items.length === 0) {
                console.log("│ Giỏ hàng trống                                                     │");
            }

            items.forEach((item, index) => {
                const total = item.price * item.quantity;
                console.log(
                    `│ ${String(index + 1).padEnd(1)} │ ${item.name.padEnd(24)} │ ${String(item.quantity).padStart(2)} │ ${formatMoney(item.price).padStart(15)} │ ${formatMoney(total).padStart(12)} │`
                );
            });

            console.log("├────────────────────────────────────────────────────────────────────┤");
            console.log(`│ Tạm tính: ${formatMoney(getSubtotal()).padStart(55)} │`);

            if (discount.code) {
                console.log(`│ Giảm giá (${discount.code}): ${formatMoney(getDiscountAmount()).padStart(46)} │`);
            }

            console.log(`│ Tổng cộng: ${formatMoney(this.getTotal()).padStart(54)} │`);
            console.log("└────────────────────────────────────────────────────────────────────┘");
        },

        getItemCount() {
            return items.reduce((count, item) => count + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discount = { type: "percent", value: 0, code: null };
        }
    };
}

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());
cart.printCart();
