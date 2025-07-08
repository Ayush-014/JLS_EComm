import { Link } from "react-router-dom";

function Cart({ cartItems = [], onRemove, onCheckout }) {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            <p className="mb-4">Your cart is currently empty.</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-sm rounded-lg p-4 flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-28 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="mt-1 text-gray-800 font-bold">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* total */}
            <div className="bg-white shadow-md rounded-lg p-6 h-fit sticky top-24">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700">Items:</span>
                <span className="font-semibold">₹{calculateTotal()}</span>
              </div>
              <div className="border-t border-gray-200 my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <button
                onClick={onCheckout}
                className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
