import logo from './logo.svg';
import cards from './cards.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a>home </a>
        <a>   projects    </a>
        <a>   media</a>
      </header>
      <header className='App-logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Cards">
      <header className="App-header">
        <h1 className="text-content title">hi, i'm neha washikar</h1>
        <p className="text-content subtitle">
          i am a computer science student at sjsu, with an interest in ai, web development, 
          and product design. i like painting, playing volleyball, cooking, and going on new adventures.
        </p>
      </header>
        <p>
        <img src={cards} className="App-logo" alt="cards" />
        </p>
      </div>
      
      
    </div>
  );
}

export default App;
