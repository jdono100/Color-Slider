const Slider = ({ name, val, set }) => {
  const handleChange = function(event) {
    set(event.target.value);
  }
  return (
    <div className="flex justify-center container mx-auto my-5">
      <form className="slider-wrapper">
        <p>{name}</p>
        <input className="rounded-lg overflow-hidden bg-gray-400"
        type="range"
        min="0"
        max="255"
        step="1"
        value={val}
        onChange={handleChange}/>
        <p>{val}</p>
      </form>
    </div>
  );
};

export default Slider;