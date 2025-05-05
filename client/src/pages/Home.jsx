import { Hero, CategoryCard, ProductCard, Button } from "../components/index.components.js"
import { HOME_DATA } from "../../constant.jsx"

function Home() {

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_DATA.CATEGORIES.map((category) => (
              <CategoryCard 
                key={category} 
                title={category} 
                onClick={() => console.log(`Clicked ${category}`)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_DATA.PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home