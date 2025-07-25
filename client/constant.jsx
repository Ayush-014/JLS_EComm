import React from "react";

const FOOTER_DATA = {
  CONTACT: {
    email: "care@JLS.com",
    phone: "+91-959-959-5513",
  },
  CAREER: {
    email: "careers@JLS.com",
  },
  APPS: {
    Google_Play: {
      url: "https://playstore.com/yourapp",
      text: "Google Play",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
        </svg>
      )
    },
    App_Store: {
      url: "https://appstore.com/yourapp",
      text: "App Store",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    },
  },
  COMPANY: ['OUR PROFILE', 'TERMS AND CONDITIONS', 'CONTACT US'],
  CUSTOMER_CARE: ['FAQs', 'HYGIENE', 'PRIVACY POLICY'],
  SOCIAL_MEDIA_HANDLES: {
    Facebook: {
      url: "https://facebook.com/bubbly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    Instagram: {
      url: "https://instagram.com/bubbly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    Twitter: {
      url: "https://twitter.com/bubbly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      )
    }
  }
}

const HOME_DATA = {
  CATEGORIES: ['Lehenga', 'Gown', 'Accessories'],
  PRODUCTS: [
    { id: 1, name: 'Designer Lehenga', brand: 'JLS', price: 999 },
    { id: 2, name: 'Evening Gown', brand: 'JLS', price: 1299 },
    { id: 3, name: 'Ethnic Gown', brand: 'JLS', price: 599 },
    { id: 4, name: 'Silk Saree', brand: 'JLS', price: 299 },
  ],
}
 const NAVBAR_DATA = {
   DRESS_CATEGORY: ['New Arrivals', 'Lehanga', 'Gown', 'Occasion Wear'],
   ACCESSORIES_CATEGORY: ['New Arrivals', 'Accessories', 'Ethnic Wear']
 }

const PRODUCTS_DATA = [
  {
    id: "2",
    name: "lorem ipsum dolor sit",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4,
    reviewCount: 124,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate cum excepturi quae laborum, veritatis quidem necessitatibus reprehenderit sit temporibus quod. Beatae nemo maxime ducimus, rerum distinctio quod at esse!",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
    ],
    details: [
      "Lorem ipsum dolor sit,",
      "amet consectetur adipisicing elit",
      "Cumque doloribus eaque,",
      "cupiditate quis ipsam mollitia",
      "voluptates laudantium, id"
    ]
  }

];

const WISHLISTDATA = [
  {
    id: 101,
    title: "Evening Gown",
    image: "",
    price: "₹799",
    brand: "Zara",
  },
  {
    id: 102,
    title: "Blazer Set",
    image: "",
    price: "₹999",
    brand: "H&M",
  },
];

const CARTITEMS = [
  {
    id: 1,
    title: "Embroidered Anarkali",
    price: "1399",
    image: "",
    brand: "Global Desi"
  },
  {
    id: 2,
    title: "Men's Formal Blazer",
    price: "1799",
    image: "",
    brand: "Arrow"
  }
];

const ETHNICWEARDATA = [
    {
      id: 1,
      title: "Silk Saree with Zari Work",
      price: "1299",
      image: "",
      brand: "Biba",
      category: "Sarees",
    },
    {
      id: 2,
      title: "Velvet Lehenga with Dupatta",
      price: "2499",
      image: "",
      brand: "Sabyasachi",
      category: "Lehengas",
    },
    {
      id: 3,
      title: "Georgette Gown",
      price: "1699",
      image: "",
      brand: "Anita Dongre",
      category: "Gowns",
    }
];

export {
  FOOTER_DATA,
  HOME_DATA,
  NAVBAR_DATA,
  PRODUCTS_DATA,
  WISHLISTDATA,
  CARTITEMS,
  ETHNICWEARDATA
}