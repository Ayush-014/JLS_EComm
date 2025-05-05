import { Button } from "../index.components.js"

export default function ProductCard ({ product }) {
    return (
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-64 bg-gray-200 relative">
          {/* Product image would go here */}
          <div className="absolute top-2 right-2 bg-white rounded-full p-2">
            ♡
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.brand}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="font-medium">₹{product.price}/day</span>
            <Button variant="primary" size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
    )
  }