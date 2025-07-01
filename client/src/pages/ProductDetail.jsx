import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, SizeSelector, QuantitySelector, ImageGallery } from "../components/index.components.js";
import { PRODUCTS_DATA } from "../../constant.jsx";

function ProductDetail() {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    console.log(`Added ${quantity} of ${product.name} (${selectedSize}) to cart`);
  };

  const handleWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* sare thumbails */}
        <div className="w-full md:w-1/2">
          <ImageGallery 
            images={product.images} 
            activeIndex={activeImage}
            onThumbnailClick={(index) => setActiveImage(index)}
          />
        </div>

        {/* product desc */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {/* rating */}
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < product.rating ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold">₹{product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="ml-2 text-green-600">{product.discount}% OFF</span>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* s/m/l/xl/xxl */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <SizeSelector 
              sizes={product.sizes} 
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />
          </div>

          {/* quantity */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <QuantitySelector 
              quantity={quantity}
              onIncrement={() => setQuantity(q => Math.min(q + 1, 10))}
              onDecrement={() => setQuantity(q => Math.max(q - 1, 1))}
            />
          </div>


          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 flex-1"
            >
              ADD TO CART
            </Button>
            <Button 
              onClick={handleWishlist}
              className="border border-black py-3 px-6 rounded hover:bg-gray-100 flex-1"
            >
              WISHLIST
            </Button>
          </div>

          {/* product detail */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* similars */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          

          
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;