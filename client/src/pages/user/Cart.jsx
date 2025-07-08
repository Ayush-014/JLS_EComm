import { Link } from "react-router-dom";

function Cart({ cartItems = [], onRemove, onCheckout }) {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-2">My Bag ({cartItems.length})</h2>

          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600 py-16">
              <p className="mb-4">Your cart is empty.</p>
              <Link
                to="/"
                className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md p-4 flex items-start gap-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-32 object-cover rounded border"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p className="font-bold text-gray-800 mt-2">₹{item.price}</p>
                  <p className="text-xs text-green-600 mt-1">Delivery in 3-5 days</p>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Coupon Section */}
          {cartItems.length > 0 && (
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Apply Coupon</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border rounded-md px-3 py-2 flex-1"
                />
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Summary */}
        {cartItems.length > 0 && (
          <div className="bg-white p-6 rounded-md shadow-md sticky top-24 h-fit">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t my-4" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
