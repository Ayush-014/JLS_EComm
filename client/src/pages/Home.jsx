import { useState } from 'react'
import { Navbar, Hero, CategoryCard, ProductCard, Footer, Button } from "../components/index.components.js"

function Home() {
  const [activeTab, setActiveTab] = useState('Dresses')
  
  const categories = ['Lehenga', 'Dresses', 'Gown', 'Accessories']
  
  const products = [
    { id: 1, name: 'Designer Lehenga', brand: 'JLS', price: 999 },
    { id: 2, name: 'Evening Gown', brand: 'JLS', price: 1299 },
    { id: 3, name: 'Ethnic Gown', brand: 'JLS', price: 599 },
    { id: 4, name: 'Silk Saree', brand: 'JLS', price: 299 },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* <div className="text-2xl font-bold">FLYROBE</div> */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* <div className="flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Cart (0)</Button>
          </div> */}
        </div>
      </header>

      <Hero />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home