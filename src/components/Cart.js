import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "store/cart-slice";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const cartItems = cart.items;
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {

        dispatch(cartActions.removeFromCart(id))
    }

    const addToCartHandler = (item) => {
        dispatch(cartActions.addToCart(item));



    }

    useEffect(() => {

        // save item to cart
        const saveCartItem = async () => {
            const response = await fetch('https://react-app-61002-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            console.log('response ', response)

            return response.json();

        }

        try {
            const data = saveCartItem();
            console.log(' data ', data);
        } catch (err) {
            throw new Error('Coundnt store the cart data')
        }


    }, [cart]);


    return (
        <div className="container">

            <div className="shopping-cart">

                {
                    cartItems && cartItems.length > 0 ?
                        <>
                            <div className="shopping-cart-header">
                                <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">3</span>
                                <div className="shopping-cart-total">
                                    <span className="lighter-text">Total:</span>
                                    <span className="main-color-text">${totalAmount}</span>
                                </div>
                            </div> {/*end shopping-cart-header */}

                            <ul className="shopping-cart-items">
                                {
                                    cartItems.map((item, index) => (
                                        <li className="clearfix" key={index}>
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                                            <span className="item-name">{item.title}</span>
                                            <span className="item-price">$ {item.price}</span>

                                            <button className="btn btn-primary" onClick={() => removeFromCartHandler(item.id)}>-</button>
                                            <span className="item-quantity">{item.quantity}</span>
                                            <button className="btn btn-primary" onClick={() => addToCartHandler(item)}>+</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>

                        : <div className="alert alert-danger">No items in the cart</div>
                }

                {/* <a href="#" className="button">Checkout</a> */}
            </div> {/*end shopping-cart */}
        </div>
    )

}

export default Cart;