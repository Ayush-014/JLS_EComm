function QuantitySelector({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center border border-gray-300 rounded w-32">
      <button 
        onClick={onDecrement}
        className="px-3 py-2 text-lg hover:bg-gray-100"
      >
        -
      </button>
      <span className="flex-1 text-center">{quantity}</span>
      <button 
        onClick={onIncrement}
        className="px-3 py-2 text-lg hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;