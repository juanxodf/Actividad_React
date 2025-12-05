import React, { useState } from 'react';

const FLAVORS = [
  { id: 'fresa', label: '🍓 Fresa' },
  { id: 'chocolate', label: '🍫 Chocolate' },
  { id: 'vainilla', label: '🍨 Vainilla' },
  { id: 'menta', label: '🌿 Menta' },
];

function IceCreamBuilder() {

interface Flavor {
    id: string;
    label: string;
}

type SelectedFlavors = Flavor[];

  const [selectedFlavors, setSelectedFlavors] = useState<SelectedFlavors>([]);

const handleDragStart = (event: React.DragEvent<HTMLLIElement>, flavorId: string): void => {
    event.dataTransfer!.setData('text/plain', flavorId);
};

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const flavorId = event.dataTransfer!.getData('text/plain');
    const flavor = FLAVORS.find((f) => f.id === flavorId);
    if (flavor) {
      setSelectedFlavors((prev) => [...prev, flavor]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setSelectedFlavors([]);
  };

  return (
    <section>
      <h2>2. Arrastra sabores a tu cucurucho</h2>
      <p>Arrastra los sabores desde la izquierda y suéltalos sobre el cucurucho.</p>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        {/* Lista de sabores */}
        <div>
          <h3>Sabores disponibles</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {FLAVORS.map((flavor) => (
              <li
                key={flavor.id}
                draggable
                onDragStart={(event) => handleDragStart(event, flavor.id)}
                style={{
                  padding: '0.5rem 1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '999px',
                  cursor: 'grab',
                }}
              >
                {flavor.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Zona de drop */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            flex: 1,
            minHeight: '220px',
            border: '2px dashed #aaa',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '1rem',
          }}
          data-testid="drop-zone"
        >
          <div style={{ fontSize: '4rem' }}>🧇</div>
          {/* Bolas en columna */}
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            {selectedFlavors.length === 0 ? (
              <p style={{ color: '#888' }}>Suelta aquí tus bolas de helado</p>
            ) : (
              selectedFlavors.map((flavor, index) => (
                <div key={index} style={{ fontSize: '2rem' }}>
                  {flavor.label}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <button onClick={handleReset} style={{ marginTop: '1rem' }}>
        Reiniciar helado
      </button>
    </section>
  );
}

export default IceCreamBuilder;
