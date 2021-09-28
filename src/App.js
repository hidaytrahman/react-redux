import Header from 'components/Header';
import Products from 'components/product/Products';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {

    const loadData = async () => {

      const getCart = async () => {
        const response = await fetch('https://react-app-61002-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
        return await response.json();
      }

      try {
        const data = await getCart();
        console.log(' data ', data);
      } catch (err) {
        throw new Error('Coundnt store the cart data')
      }
    }

    loadData();

  }, []);

  return (
    <div className="App">
      <Header />

      <Products />
    </div>
  );
}

export default App;
