export default function Output({ red, green, blue }) {
  return(
    <div className="flex justify-center container mx-auto my-5" id="outputdiv" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
      <p className="text-center" id="outputtext">
        Output:<br/>
        R - {red}<br/>
        G - {green}<br/>
        B - {blue}<br/>
      </p>
    </div>
  );
};