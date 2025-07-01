import { Hero, CategoryCard, ProductCard, Button } from "../components/index.components.js"
import { HOME_DATA } from "../../constant.jsx"

function Home() {

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <section className="w-full px-4 mb-16">
  <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>

  <div className="flex flex-wrap gap-6 justify-between">
    {HOME_DATA.CATEGORIES.map((category) => (
      <div
        key={category}
        className="flex-1 min-w-[250px] max-w-full sm:basis-[48%] lg:basis-[23%]"
      >
        <CategoryCard
          title={category}
          backgroundImage="https://img0.junaroad.com/uiprodu/18026647/zoom_0-1633438645.jpg"
          onClick={() => console.log(`Clicked ${category}`)}
        />
      </div>
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