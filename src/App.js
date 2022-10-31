import logo from './logo.svg';
import './App.css';
import RouterMap from './router';
import MTab from './components/tabs'

function App() {
  return (
    <div className="App">
      <RouterMap></RouterMap>
      <MTab></MTab>
    </div>
  );
}

export default App;
