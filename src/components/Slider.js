const Slider = () => {
  return(
    <div className="flex justify-center container mx-auto my-2">
      <input type="range" min="0" max="255" value="0" className="slider"></input>
    </div>
  );
};

export default Slider;