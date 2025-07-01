import { Button } from "../index.components.js"

export default function Hero () {
    return (
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rent Designer Clothes</h1>
          <p className="text-xl mb-8">Wear the best, return when done</p>
          <Button>Shop Now</Button>
        </div>
      </section>
    )
  }