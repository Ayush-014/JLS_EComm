import { Button } from "../index.components.js"

export default function CategoryCard ({ title, onClick, backgroundImage }) {
    return (
      <div 
        className="bg-gray-50 p-8 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden"
        onClick={onClick}
      >
        
        {backgroundImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
          </>
        )}
        

        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
          <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-gray-800">
            Explore
          </Button>
        </div>
      </div>
    )
}