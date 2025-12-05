import './App.css';
import IceCreamInfo from './components/IceCremInfo';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🍦 Diseña tu helado</h1>
        <p>Crea el helado perfecto eligiendo sabores y complementos.</p>
      </header>

      <main>
        <IceCreamInfo />
      </main>
    </div>
  );
}

export default App;
