import logo from './logo.svg';
import './App.css';
import { Body, FIlters, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={style}>
        <FIlters/>
        <Body/>
      </div>
    </div>
  );
}

export default App;

var style = {
  "display": "flex"
}