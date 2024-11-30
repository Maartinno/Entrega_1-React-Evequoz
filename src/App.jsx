import React from 'react'; // Importa React
import NavBar from './components/NavBar/NavBar'; // Importa el componente NavBar
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Importa el componente ItemListContainer

// Componente principal de la aplicación
function App() {
  return (
    <div>
      {/* Componente de navegación */}
      <NavBar />

      {/* Contenedor principal con un saludo personalizado */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App; // Exporta el componente principal
