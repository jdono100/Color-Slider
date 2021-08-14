import React, { useState } from 'react';
import Slider from './Slider';
import Output from './Output';

export default function ColorBrowser () {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  return (
      <div>
          <Slider name="Red" val={red} set={setRed} />
          <Slider name="Green" val={green} set={setGreen} />
          <Slider name="Blue" val={blue} set={setBlue} />
          <Output red={red} green={green} blue={blue}/>
      </div>
  );
};