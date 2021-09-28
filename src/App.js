import Header from 'components/Header';
import Products from 'components/product/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'store/cart-slice';
import './App.css';

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {

    const loadData = async () => {

      const getCart = async () => {
        const response = await fetch('https://react-app-61002-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
        return await response.json();
      }

      try {
        const data = await getCart();
        console.log(' data ', data);
        // set data from the db to state
        dispatch(cartActions.replaceCart(data));

      } catch (err) {
        throw new Error('Coundnt store the cart data')
      }
    }

    loadData();

  }, []);



  useEffect(() => {
    // save item to cart
    const saveCartItem = async () => {
      const response = await fetch('https://react-app-61002-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      return response.json();
    }

    try {
      // save data from state to db
      const data = saveCartItem();
      console.log(' data ', data);
    } catch (err) {
      throw new Error('Coundnt store the cart data')
    }


  }, [cart]);

  return (
    <div className="App">
      <Header />

      <Products />
    </div>
  );
}

export default App;
