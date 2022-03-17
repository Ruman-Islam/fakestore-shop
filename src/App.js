import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  let itemCount = null;
  const items = JSON.parse(sessionStorage.getItem('productCount'));
  if (items === null) {
    itemCount = 0;
  } else {
    itemCount = items;
  }
  const [cartCount, setCartCount] = useState(itemCount);

  const setCount = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="App">
      <Menubar cartCount={cartCount} />
      <AllProducts setCount={setCount} />
    </div>
  );
}

export default App;
