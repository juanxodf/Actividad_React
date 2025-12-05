import './App.css';
import IceCreamInfo from './components/IceCremInfo';
import ScoopsCounter from './components/ScoopsCounter';
import IceCreamBuilder from './components/IceCreamBuilder';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🍦 Diseña tu helado</h1>
        <p>Crea el helado perfecto eligiendo sabores y complementos.</p>
      </header>

      <main>
        <IceCreamInfo />
        <hr />
        <ScoopsCounter />
        <hr />
        <IceCreamBuilder />
      </main>
        
    </div>
  );
}

export default App;
