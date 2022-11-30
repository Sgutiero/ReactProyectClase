import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards'


function App() {
  return (
    <div>
      
      <Navbar />

      <div className="App">

      <div className='contenedor-principal'>

        <Cards
          nombre='HTML5'
          imagen='2'
          skill='Maquetación inicial en paginas web'
          manejo='typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
        <Cards
          nombre='CSS3 y Bootstrap'
          imagen='3'
          skill='Estilos y diseño responsive de paginas web'
          manejo='typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
        <Cards 
          nombre='React JS'
          imagen='1'
          skill='Implementación de la libreria para trabajos front-end'
          manejo='typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
      
      </div>
    
    </div>

    </div>
  );
}

export default App;
