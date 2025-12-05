import './App.css';
import IceCreamInfo from './components/IceCremInfo';
import ScoopsCounter from './components/ScoopsCounter';

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
      </main>
      
    </div>
  );
}

export default App;
