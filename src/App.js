// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from './components/Cabecera.js';
import Listado from './components/Listado.js';
import { useState } from 'react';

function App() {
  //estado carrito
  const [cartItems, setCartItems] = useState(0);

  //método para aumentar cantidad en carrito
  function onAdd(){
      setCartItems(cartItems + 1)
  }

  return (
    <div className="App">
      <Cabecera cartItems={cartItems}/>
      <Listado onAdd={onAdd}/>
    </div>
  );
}

export default App;
