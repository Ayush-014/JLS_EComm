import { Button } from "../index.components.js"

export default function CategoryCard ({ title, onClick }) {
    return (
      <div 
        className="bg-gray-50 p-8 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <Button variant="outline">Explore</Button>
      </div>
    )
  }