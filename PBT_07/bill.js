const items = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
];

const isWednesday = true;
const useTip = true;

function formatMoney(amount) {
    return Math.round(amount).toLocaleString("vi-VN") + "đ";
}

function formatK(amount) {
    return Math.round(amount / 1000) + "k";
}

function padRight(value, length) {
    let str = String(value);
    while (str.length < length) {
        str += " ";
    }
    return str;
}

function padLeft(value, length) {
    let str = String(value);
    while (str.length < length) {
        str = " " + str;
    }
    return str;
}

function printLine(label, value) {
    const content = "║ " + padRight(label, 24) + padLeft(value, 12) + " ║";
    console.log(content);
}

function calculateBill(menuItems, isWed, hasTip) {
    let subtotal = 0;

    for (let i = 0; i < menuItems.length; i++) {
        subtotal += menuItems[i].price * menuItems[i].quantity;
    }

    let discountPercent = 0;

    if (subtotal > 1000000) {
        discountPercent = 15;
    } else if (subtotal > 500000) {
        discountPercent = 10;
    }

    if (isWed) {
        discountPercent += 5;
    }

    const discountAmount = subtotal * discountPercent / 100;
    const afterDiscount = subtotal - discountAmount;
    const vat = afterDiscount * 0.08;
    const tip = hasTip ? afterDiscount * 0.05 : 0;
    const total = afterDiscount + vat + tip;

    return {
        subtotal,
        discountPercent,
        discountAmount,
        vat,
        tip,
        total
    };
}

function printBill(menuItems, isWed, hasTip) {
    const bill = calculateBill(menuItems, isWed, hasTip);

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
    console.log("╠══════════════════════════════════════╣");

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const lineTotal = item.price * item.quantity;
        const label = `${i + 1}. ${padRight(item.name, 10)} x${item.quantity} @${formatK(item.price)}`;
        const value = `= ${formatK(lineTotal)}`;
        console.log("║ " + padRight(label, 28) + padLeft(value, 8) + " ║");
    }

    console.log("╠══════════════════════════════════════╣");
    printLine("Tổng cộng:", formatMoney(bill.subtotal));
    printLine(`Giảm giá (${bill.discountPercent}%):`, formatMoney(bill.discountAmount));
    printLine("VAT (8%):", formatMoney(bill.vat));
    printLine(hasTip ? "Tip (5%):" : "Tip (0%):", formatMoney(bill.tip));
    console.log("╠══════════════════════════════════════╣");
    printLine("THANH TOÁN:", formatMoney(bill.total));
    console.log("╚══════════════════════════════════════╝");
}

printBill(items, isWednesday, useTip);
