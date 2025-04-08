// src/components/Layout/components/Products/DataProducts.js
const products = [
    // Sản phẩm 1: Áo thun nam dáng rộng, thuộc nhiều danh mục
    {
      id: 1,
      title: "Áo Thun Nam Hàn Quốc Form Rộng Trắng",
      additionalInfo: ["NEW", "249", "199", "Sale 20%"],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Dáng Vừa Tay Ngắn", "Áo Thun Dáng Vừa Tay Ngắn", "Áo Thun Dáng Rộng", "Áo Thun Dáng Vừa Tay Ngắn"],
      collection: "No Style (Gu năng động Cổ)",
      isPromoted: true,
      code: "#0023250",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "249.000",
        new: "199.000",
        discount: "Thời Trang Giá Hấp Dẫn (Jean 277k)",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "S", stock: 60 },
        { size: "M", stock: 60 },
        { size: "L", stock: 60 },
        { size: "XL", stock: 0 },
      ],
      description: {
        type: "Áo thun nam phong cách Hàn Quốc form rộng.",
        advantages: [
          "Chất liệu cotton mềm mại, thoáng mát.",
          "Thiết kế form rộng, phong cách Hàn Quốc, phù hợp với xu hướng 2025.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 26,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 2: Áo thun nữ unisex in họa tiết
    {
      id: 2,
      title: "Áo Thun Nữ Unisex In Họa Tiết Xám",
      additionalInfo: ["NEW", "229", "189", "Sale 17%"],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Áo Thun Thể Thao", "Áo Thun Tay Dài", "Áo Thun Sweater", "Áo Thun Dáng Vừa Tay Ngắn"],
      collection: "No Style (Gu năng động Cổ)",
      isPromoted: true,
      code: "#0023255",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "229.000",
        new: "189.000",
        discount: "Phụ Kiện Giá Hấp Dẫn (Túi 37k)",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun nữ unisex in họa tiết cá tính.",
        advantages: [
          "Chất liệu cotton mềm mại, thoáng mát.",
          "Thiết kế unisex, form rộng, in họa tiết trendy, phù hợp cho cả nam và nữ.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 27,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 3: Áo thun nam Seventy Seven
    {
      id: 3,
      title: "Áo Thun Nam Seventy Seven Đen",
      additionalInfo: ["VIP", "177", "149", "Sale 16%"],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Dáng Rộng Tay Ngắnn", "Áo Thun Ba Lỗ (Tank Top)", "Áo Thun Dáng Ôm"],
      collection: "Seventy Seven (Giá Tốt, Jean 327k)",
      isPromoted: true,
      code: "#0023260",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "177.000",
        new: "149.000",
        discount: "Sale Kết Thúc Vòng Đời",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "S", stock: 40 },
        { size: "M", stock: 40 },
        { size: "L", stock: 40 },
        { size: "XL", stock: 40 },
      ],
      description: {
        type: "Áo thun nam dáng rộng.",
        advantages: [
          "Chất liệu vải Ribbing Fabric mềm mại, thoáng mát.",
          "Thiết kế dáng rộng, phù hợp với phong cách thoải mái, năng động.",
        ],
        material: "Vải Ribbing Fabric, 100% Cotton.",
      },
      otherItems: [
        {
          id: 28,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 4: Áo thun nữ Cool Touch
    {
      id: 4,
      title: "Áo Thun Nữ Cool Touch Trắng",
      additionalInfo: ["VIP", "199", "159", "Sale 20%"],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Áo Thun Thể Thao", "Áo Thun Tay Dài", "Áo Thun Dáng Vừa Tay Ngắn"],
      collection: "Cool Touch (Vải Mềm - Mịn - Mát)",
      isPromoted: true,
      code: "#0023265",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "199.000",
        new: "159.000",
        discount: "Thời Trang Giá Hấp Dẫn (Jean 277k)",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun nữ dáng vừa.",
        advantages: [
          "Chất liệu vải mềm mịn, mát mẻ, thoáng khí.",
          "Thiết kế đơn giản, phù hợp với nhiều phong cách.",
        ],
        material: "Vải Cool Touch, 90% Polyester 10% Spandex.",
      },
      otherItems: [
        {
          id: 29,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 5: Áo thun nam Premium
    {
      id: 5,
      title: "Áo Thun Nam Premium Đen",
      additionalInfo: ["NEW", "299", "299", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Sweater", "Áo Thun Dáng Vừa Tay Ngắn", "Áo Thun Ba Lỗ (Tank Top)"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023270",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "299.000",
        new: "299.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 30 },
        { size: "M", stock: 30 },
        { size: "L", stock: 30 },
        { size: "XL", stock: 30 },
      ],
      description: {
        type: "Áo thun nam cao cấp.",
        advantages: [
          "Chất liệu vải cao cấp, mềm mại, thoáng mát.",
          "Thiết kế tinh tế, phù hợp với phong cách hiện đại.",
        ],
        material: "100% Cotton cao cấp.",
      },
      otherItems: [
        {
          id: 30,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 6: Quần Jean Seventy Seven
    {
      id: 6,
      title: "Quần Jean Seventy Seven Xanh Đậm",
      additionalInfo: ["VIP", "327", "277", "Sale 15%"],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Quần Dài", "Quần Jean"],
      collection: "Seventy Seven (Giá Tốt, Jean 327k)",
      isPromoted: true,
      code: "#0023275",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "327.000",
        new: "277.000",
        discount: "Thời Trang Giá Hấp Dẫn (Jean 277k)",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "M", stock: 40 },
        { size: "L", stock: 40 },
        { size: "XL", stock: 40 },
        { size: "XXL", stock: 40 },
      ],
      description: {
        type: "Quần jean dáng vừa.",
        advantages: [
          "Chất liệu jean mềm, thoải mái khi mặc.",
          "Thiết kế dáng vừa, phù hợp với nhiều phong cách.",
        ],
        material: "Jean, 98% Cotton 2% Spandex.",
      },
      otherItems: [
        {
          id: 31,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 7: Áo thun nữ The Seafarer
    {
      id: 7,
      title: "Áo Thun Nữ The Seafarer Xanh Navy",
      additionalInfo: ["NEW", "199", "199", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Dáng Vừa Tay Ngắn", "Áo Thun Dáng Rộng Tay Ngắn"],
      collection: "The Seafarer (Vibe Thủy Thủ)",
      isPromoted: false,
      code: "#0023280",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "199.000",
        new: "199.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun nữ phong cách thủy thủ.",
        advantages: [
          "Chất liệu cotton thoáng mát, phong cách năng động.",
          "Thiết kế vibe thủy thủ, phù hợp với phong cách trẻ trung.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 32,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 8: Túi vải Non Branded
    {
      id: 8,
      title: "Túi Vải Non Branded Đen",
      additionalInfo: ["VIP", "37", "29", "Sale 22%"],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Phụ Kiện", "Túi Vải", "Balo - Túi", "Bền - Giá tốt"],
      collection: "Non Branded (Tối giản, Tiệt kiệm)",
      isPromoted: true,
      code: "#0023285",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "37.000",
        new: "29.000",
        discount: "Phụ Kiện Giá Hấp Dẫn (Túi 37k)",
        validUntil: "30/04/2025",
      },
      sizes: [{ size: "One Size", stock: 100 }],
      description: {
        type: "Túi vải không dệt.",
        advantages: [
          "Chất liệu vải không dệt, bền, nhẹ.",
          "Thiết kế tối giản, phù hợp với nhiều phong cách.",
        ],
        material: "Vải không dệt, 100% Polyester.",
      },
      otherItems: [
        {
          id: 33,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 9: Áo thun nam Beginner
    {
      id: 9,
      title: "Áo Thun Nam Beginner Xanh Lá",
      additionalInfo: ["NEW", "177", "177", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Sweater", "Áo Thun Dáng Ôm", "Áo Thun Dáng Vừa Tay Ngắn"],
      collection: "Beginner (Thể Thao Giá Tốt)",
      isPromoted: false,
      code: "#0023290",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "177.000",
        new: "177.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun nam thể thao.",
        advantages: [
          "Chất liệu thoáng mát, thấm hút mồ hôi tốt.",
          "Thiết kế ôm dáng, phù hợp cho hoạt động thể thao.",
        ],
        material: "Sợi nhân tạo.",
      },
      otherItems: [
        {
          id: 34,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 10: Áo thun nữ Doraemon
    {
      id: 10,
      title: "Áo Thun Nữ Doraemon Hồng",
      additionalInfo: ["VIP", "199", "169", "Sale 15%"],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Áo Thun Thể Thao", "Áo Thun Dáng Rộng Tay Ngắn", "Áo Thun Dáng Vừa Tay Ngắn"],
      collection: "Doraemon | YaMe",
      isPromoted: true,
      code: "#0023295",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "199.000",
        new: "169.000",
        discount: "Sale Kết Thúc Vòng Đời",
        validUntil: "30/04/2025",
      },
      sizes: [
        { size: "S", stock: 60 },
        { size: "M", stock: 60 },
        { size: "L", stock: 60 },
        { size: "XL", stock: 60 },
      ],
      description: {
        type: "Áo thun nữ dáng rộng in hình Doraemon.",
        advantages: [
          "Chất liệu cotton mềm mại, thoáng mát.",
          "Thiết kế dáng rộng, in hình Doraemon, phù hợp với phong cách dễ thương.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 35,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 11: Áo Polo dáng vừa tay ngắn
    {
      id: 11,
      title: "Áo Polo Nam Dáng Vừa Xanh Đen",
      additionalInfo: ["NEW", "249", "249", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Polo", "Áo Polo dáng vừa tay ngắn"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023300",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "249.000",
        new: "249.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo polo nam dáng vừa.",
        advantages: [
          "Chất liệu cotton thoáng mát, phong cách lịch lãm.",
          "Thiết kế dáng vừa, phù hợp với phong cách công sở.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 36,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 12: Áo sơ mi cổ bẻ tay dài
    {
      id: 12,
      title: "Áo Sơ Mi Nam Cổ Bẻ Tay Dài Trắng",
      additionalInfo: ["NEW", "299", "299", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Sơ Mi", "Áo sơ mi cổ bẻ tay dài"],
      collection: "Wrinkle Free (Vải ít Nhăn)",
      isPromoted: false,
      code: "#0023305",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "299.000",
        new: "299.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo sơ mi nam cổ bẻ tay dài.",
        advantages: [
          "Chất liệu vải ít nhăn, thoáng mát.",
          "Thiết kế lịch lãm, phù hợp với phong cách công sở.",
        ],
        material: "Vải Wrinkle Free, 100% Cotton.",
      },
      otherItems: [
        {
          id: 37,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 13: Áo khoác Bomber
    {
      id: 13,
      title: "Áo Khoác Bomber Đen",
      additionalInfo: ["NEW", "499", "499", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Khoác", "Áo khoác Bomber"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023310",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "499.000",
        new: "499.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 30 },
        { size: "M", stock: 30 },
        { size: "L", stock: 30 },
        { size: "XL", stock: 30 },
      ],
      description: {
        type: "Áo khoác Bomber cao cấp.",
        advantages: [
          "Chất liệu vải cao cấp, giữ ấm tốt.",
          "Thiết kế phong cách, phù hợp với thời tiết se lạnh.",
        ],
        material: "100% Polyester.",
      },
      otherItems: [
        {
          id: 38,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 14: Quần Tây
    {
      id: 14,
      title: "Quần Tây Nam Đen",
      additionalInfo: ["NEW", "399", "399", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Quần Dài", "Quần Tây"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023315",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "399.000",
        new: "399.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "M", stock: 40 },
        { size: "L", stock: 40 },
        { size: "XL", stock: 40 },
        { size: "XXL", stock: 40 },
      ],
      description: {
        type: "Quần tây nam dáng vừa.",
        advantages: [
          "Chất liệu vải cao cấp, thoáng mát.",
          "Thiết kế lịch lãm, phù hợp với phong cách công sở.",
        ],
        material: "Vải kaki, 98% Cotton 2% Spandex.",
      },
      otherItems: [
        {
          id: 39,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 15: Quần Short 5 inch
    {
      id: 15,
      title: "Quần Short Nam 5 Inch Xám",
      additionalInfo: ["NEW", "199", "199", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Quần Short", "Quần Short 5 inch"],
      collection: "No Style (Gu năng động Cổ)",
      isPromoted: false,
      code: "#0023320",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "199.000",
        new: "199.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Quần short nam 5 inch.",
        advantages: [
          "Chất liệu cotton thoáng mát, phong cách năng động.",
          "Thiết kế ngắn, phù hợp với phong cách trẻ trung.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 40,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 16: Dây thắt lưng da
    {
      id: 16,
      title: "Dây Thắt Lưng Da Đen",
      additionalInfo: ["NEW", "149", "149", ""],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Phụ Kiện", "Phụ Kiện Thời Trang", "Dây Thắt Lưng Da"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023325",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "149.000",
        new: "149.000",
        discount: "",
        validUntil: "",
      },
      sizes: [{ size: "One Size", stock: 100 }],
      description: {
        type: "Dây thắt lưng da cao cấp.",
        advantages: [
          "Chất liệu da thật, bền bỉ.",
          "Thiết kế tối giản, phù hợp với nhiều phong cách.",
        ],
        material: "100% Da thật.",
      },
      otherItems: [
        {
          id: 41,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 17: Quần lót nam
    {
      id: 17,
      title: "Quần Lót Nam Đen",
      additionalInfo: ["NEW", "49", "49", ""],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Đồ Dùng Cá Nhân", "Quần Lót"],
      collection: "No Style (Gu năng động Cổ)",
      isPromoted: false,
      code: "#0023330",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "49.000",
        new: "49.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "M", stock: 100 },
        { size: "L", stock: 100 },
        { size: "XL", stock: 100 },
      ],
      description: {
        type: "Quần lót nam.",
        advantages: [
          "Chất liệu cotton thoáng mát, thấm hút mồ hôi.",
          "Thiết kế đơn giản, thoải mái khi mặc.",
        ],
        material: "95% Cotton, 5% Spandex.",
      },
      otherItems: [
        {
          id: 42,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 18: Balo chống sốc laptop
    {
      id: 18,
      title: "Balo Chống Sốc Laptop Đen",
      additionalInfo: ["NEW", "399", "399", ""],
      image:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [],
      categories: ["Balo - Túi", "Chống sốc Laptop"],
      collection: "Premium (Đẳng Chuẩn, Vải Xịn)",
      isPromoted: false,
      code: "#0023335",
      images: [
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=100&h=140",
      ],
      mainImage:
        "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756",
      price: {
        old: "399.000",
        new: "399.000",
        discount: "",
        validUntil: "",
      },
      sizes: [{ size: "One Size", stock: 50 }],
      description: {
        type: "Balo chống sốc laptop.",
        advantages: [
          "Chất liệu chống thấm, bảo vệ laptop an toàn.",
          "Thiết kế hiện đại, phù hợp với phong cách công sở.",
        ],
        material: "100% Polyester chống thấm.",
      },
      otherItems: [
        {
          id: 43,
          image:
            "https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 19: Áo thun ba lỗ (Tank Top)
    {
      id: 19,
      title: "Áo Thun Ba Lỗ Nam Trắng",
      additionalInfo: ["NEW", "99", "99", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Ba Lỗ (Tank Top)"],
      collection: "Beginner (Thể Thao Giá Tốt)",
      isPromoted: false,
      code: "#0023340",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "99.000",
        new: "99.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun ba lỗ nam.",
        advantages: [
          "Chất liệu cotton thoáng mát, thấm hút mồ hôi.",
          "Thiết kế năng động, phù hợp cho hoạt động thể thao.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 44,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
    // Sản phẩm 20: Áo thun tay dài
    {
      id: 20,
      title: "Áo Thun Nam Tay Dài Xám",
      additionalInfo: ["NEW", "249", "249", ""],
      image:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false",
      hoverImage:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false",
      colorImages: [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false",
      ],
      categories: ["Áo Thun Thể Thao", "Áo Thun Dáng Rộng Tay Dài"],
      collection: "No Style (Gu năng động Cổ)",
      isPromoted: false,
      code: "#0023345",
      images: [
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=100&h=140",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=100&h=140",
      ],
      mainImage:
        "http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756",
      price: {
        old: "249.000",
        new: "249.000",
        discount: "",
        validUntil: "",
      },
      sizes: [
        { size: "S", stock: 50 },
        { size: "M", stock: 50 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 50 },
      ],
      description: {
        type: "Áo thun nam tay dài.",
        advantages: [
          "Chất liệu cotton thoáng mát, giữ ấm nhẹ.",
          "Thiết kế đơn giản, phù hợp với thời tiết se lạnh.",
        ],
        material: "100% Cotton.",
      },
      otherItems: [
        {
          id: 45,
          image:
            "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=270&h=378&c=true&ntf=false",
        },
      ],
    },
  ];
  
  export default products;