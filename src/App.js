import './App.css';
import LinkButton from './components/LinkButton';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="heading">
          <img  id="logo" src={logo} alt="No Image Found" />
          <h1>KNOW TECHNOLOGY INNOVATIVE PROJECT</h1>
        </div>
        <LinkButton/>
      </div>
    </div>
  );
}

export default App;
