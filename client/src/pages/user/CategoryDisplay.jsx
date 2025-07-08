import { useState } from "react";
import { ProductCard } from "../../components/index.components.js";
import { Link } from "react-router-dom";

const CATEGORY_TAGS = ["All", "Sarees", "Lehengas", "Gowns", "Kurta Sets", "Indo-Western"];

export default function CategoryDisplay({ products = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) =>
          p.category?.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section className="min-h-screen bg-white py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="text-center mb-6">
          <p className="text-gray-600">Handpicked designer ethnic wear, delivered to your doorstep.</p>
        </div>

        {/* filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CATEGORY_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === tag
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* products listings */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block hover:no-underline"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}