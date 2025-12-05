import { useState } from 'react';

function ScoopsCounter() {
  const [scoops, setScoops] = useState(1);

  const increase = () => setScoops((prev) => Math.min(prev + 1, 5));
  const decrease = () => setScoops((prev) => Math.max(prev - 1, 1));

  return (
    <section>
      <h2>1. Elige cuántas bolas quieres</h2>
      <p>Puedes elegir entre 1 y 5 bolas.</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent:'center'}}>
        <button onClick={decrease}>-1</button>
        <span style={{ fontSize: '1.5rem' }}>{scoops} 🍧</span>
        <button onClick={increase}>+1</button>
      </div>
    </section>
  );
}

export default ScoopsCounter;
