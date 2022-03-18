import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  // cart count system with session storage
  let itemCount;
  const items = JSON.parse(sessionStorage.getItem('productCount'));
  if (items === null) {
    // console.log(items);
    itemCount = 0;
  } else {
    // console.log(items);
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
