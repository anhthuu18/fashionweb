const orders = [
    {
        id: "YM657303",
        date: "06/01/2025",
        products: [
            {
                name: "Quần Dài Lưng Thun Ống Đứng Vải Thun Co Giãn Trơn Dáng Rộng Giá Tốt No Style M98 / Đen, M / 0023645001",
                price: 387000,
                quantity: 1,
                discount: 0,
                total: 387000,
            },
            {
                name: "Áo Polo Trơn Co Giãn Non Branded 03 / Trắng, S / 0023744001",
                price: 177000,
                quantity: 2,
                discount: 0,
                total: 354000,
            },
        ],
        invoice: {
            subtotal: 741000,
            discount: 0,
            shippingFee: 0,
            total: 741000,
            paid: 0,
            remaining: 741000,
        },
        status: "Đơn hàng đã hoàn tất",
        trackingNumber: "0362890918",
        receiver: {
            name: "AT",
            phone: "0362890918",
            deliveryPhone: "0362890918",
            address: "130 đường số 8 Linh Xuân Thủ Đức",
            note: "",
        },
    },
    {
        id: "241126123942201916",
        date: "26/11/2024",
        products: [
            {
                name: "Áo Thun Dáng Vừa Tay Ngắn Seventy Seven 04 Vol 24 / Đen (L) / 0022714003",
                price: 202000,
                quantity: 1,
                discount: 0,
                total: 202000,
            },
            {
                name: "Áo Thun Phối Màu Tay Ngắn No Style M4 Vol 24 / Đen Rêu (L) / 0023390003",
                price: 202000,
                quantity: 1,
                discount: 0,
                total: 202000,
            },
        ],
        invoice: {
            subtotal: 404000,
            discount: 0,
            shippingFee: 0,
            total: 404000,
            paid: 404000,
            remaining: 0,
        },
        status: "Đơn hàng đã giao",
        trackingNumber: "0362890919",
        receiver: {
            name: "Nguyen Van B",
            phone: "0987654321",
            deliveryPhone: "0987654321",
            address: "123 đường số 5, Quận 1, TP.HCM",
            note: "Giao hàng trước 17h",
        },
    },
];

export default orders;