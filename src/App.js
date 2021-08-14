import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider name="red"/>
      <Slider name="green"/>
      <Slider name="blue"/>
    </div>
  );
}

export default App;