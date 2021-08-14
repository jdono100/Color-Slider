import ColorBrowser from './components/ColorBrowser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-20">
        <ColorBrowser />
      </div>
    </div>
  );
}

export default App;