import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className="container">
            <div className="shopping-cart">
                <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">3</span>
                    <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$2,229.97</span>
                    </div>
                </div> {/*end shopping-cart-header */}

                <ul className="shopping-cart-items">
                    {
                        cartItems &&
                        cartItems.map((item, index) => (
                            <li className="clearfix" key={index}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                                <span className="item-name">{item.title}</span>
                                <span className="item-price">$ {item.price}</span>
                               
                                <button className="btn btn-primary">-</button>
                                <span className="item-quantity">{item.quantity}</span>
                                <button className="btn btn-primary">+</button>
                            </li>
                        ))
                    }
                </ul>

                {/* <a href="#" className="button">Checkout</a> */}
            </div> {/*end shopping-cart */}
        </div>
    )

}

export default Cart;