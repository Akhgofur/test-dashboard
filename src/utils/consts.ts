const productsTableHeaders = [
    {
        id: 1,
        name: "Product Name"
    },
    {
        id: 2,
        name: "Brand"
    },
    {
        id: 3,
        name: "Stock"
    },
    {
        id: 4,
        name: "Sales"
    },
    {
        id: 5,
        name: "Price"
    },
    {
        id: 6,
        name: "Status"
    },

]

const products = [
    {
        id: 1,
        name: "Galaxy A54",
        brand: "Samsung",
        stock: 140,
        sales: 234,
        price: 340,
        status: true,
        image: "https://source.unsplash.com/random/200x200"
    },
    {
        id: 2,
        name: "Iphone 13 Pro Max",
        brand: "Apple",
        stock: 140,
        sales: 234,
        price: 340,
        status: true,
        image: "https://source.unsplash.com/random/200x200"
    },
    {
        id: 3,
        name: "Redmi K60",
        brand: "Xiaomi",
        stock: 140,
        sales: 234,
        price: 340,
        status: true,
        image: "https://source.unsplash.com/random/200x200"
    },
]


const tableLimits = [
    10,
    20,
    30,
    50,
    70,
    100
]

export {productsTableHeaders, products, tableLimits}