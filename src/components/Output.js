export default function Output({ red, green, blue }) {
  return(
    <div className="flex justify-center mx-auto my-5 w-6/12 border-4 border-gray-800 rounded-md" id="outputdiv" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: `1px 1px solid purple`}}>
      <p className="text-center text-gray-800 font-bold text-xl" id="outputtext">
        Output:<br/>
        R - {red}<br/>
        G - {green}<br/>
        B - {blue}<br/>
      </p>
    </div>
  );
};