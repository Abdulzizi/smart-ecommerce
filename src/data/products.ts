export const products = [
    {
    id: 1,
    title: "iPhone 16 Pro Max",
    price: 1199,
    imageURL:
      "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
    brand: "Apple",
    rating: 4.9,
    sold: 1200,
    location: "Jakarta",
    discount: 10, // percent
    description: "Latest iPhone 16 Pro Max with A18 Bionic chip, 5G, and improved cameras."
  },
  {
    id: 2,
    title: "Lenovo Laptop",
    price: 749,
    imageURL:
      "https://image.made-in-china.com/318f0j00nEfGPdYIhWom/6%E6%9C%8814%E6%97%A5%287%29.mp4.webp",
    brand: "Lenovo",
    rating: 4.6,
    sold: 850,
    location: "Bandung",
    discount: 15,
    description: "Lenovo IdeaPad with Intel i7 processor, 16GB RAM, and 512GB SSD."
  },
  {
    id: 3,
    title: "Mac Book Pro 15",
    price: 1799,
    imageURL:
      "https://image.made-in-china.com/2f0j00CTdkRwQaYmzE/2023-Latest-Original-Good-Quality-Laptop-for-Book-15-2023-Laptop.webp",
    brand: "Apple",
    rating: 4.8,
    sold: 500,
    location: "Surabaya",
    discount: 5,
    description: "MacBook Pro 15-inch with M3 Pro chip, Liquid Retina XDR display, and macOS Sonoma."
  },
  {
    id: 4,
    title: "Samsung Phone",
    price: 1299,
    imageURL:
      "data:image/jpeg;base64,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",
    brand: "Samsung",
    rating: 4.7,
    sold: 900,
    location: "Jakarta",
    discount: 12,
    description: "Samsung Galaxy S24 with Snapdragon 8 Gen 3, Dynamic AMOLED 2X, and triple camera setup."
  },
  {
    id: 5,
    title: "Logitech Mouse",
    price: 59,
    imageURL:
      "https://media.ldlc.com/r374/ld/products/00/05/88/25/LD0005882564_1.jpg",
    brand: "Logitech",
    rating: 4.5,
    sold: 3000,
    location: "Yogyakarta",
    discount: 20,
    description: "Ergonomic Logitech wireless mouse with long-lasting battery life and precise tracking."
  },
  {
    id: 6,
    title: "Logitech Headset",
    price: 99,
    imageURL:
      "https://resource.logitech.com/b_white/content/dam/logitech/en/products/headsets/zone-900/gallery/logitech-zone-900-gallery-1.png",
    brand: "Logitech",
    rating: 4.4,
    sold: 2100,
    location: "Semarang",
    discount: 18,
    description: "Logitech Zone 900 wireless headset with noise cancellation and comfortable fit."
  },
  {
    id: 7,
    title: "Logitech Camera",
    price: 79,
    imageURL:
      "https://resource.logitech.com/content/dam/logitech/en/products/webcams/c310/gallery/c310-gallery-1.png",
    brand: "Logitech",
    rating: 4.3,
    sold: 1500,
    location: "Denpasar",
    discount: 25,
    description: "Logitech C310 HD webcam with 720p video, auto light correction, and built-in microphone."
  },
]
