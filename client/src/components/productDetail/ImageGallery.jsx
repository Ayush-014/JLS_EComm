function ImageGallery({ images, activeIndex, onThumbnailClick }) {
  return (
    <div>
      <div className="mb-4">
        <img 
          src={images[activeIndex]} 
          alt="Main product" 
          className="w-full h-auto rounded"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <button 
            key={index}
            onClick={() => onThumbnailClick(index)}
            className={`w-20 h-20 flex-shrink-0 border ${activeIndex === index ? 'border-black' : 'border-transparent'}`}
          >
            <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;