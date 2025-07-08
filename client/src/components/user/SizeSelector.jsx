function SizeSelector({ sizes, selectedSize, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map(size => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`w-12 h-12 flex items-center justify-center border rounded 
            ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;