import { ProductCard } from "../../components/index.components.js";
import { Link } from "react-router-dom";

function Wishlist({ wishlist = [] }) {
  return (
    <section className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            <p className="mb-4">Your wishlist is empty.</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block hover:no-underline"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
