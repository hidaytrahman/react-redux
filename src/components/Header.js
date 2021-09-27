import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "store/ui-slice";
import Cart from "./Cart";

const Header = () => {
    const isCartVisible = useSelector(state => state.ui.isCartVisible);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const cartToggleHandler = () => {
        dispatch(uiActions.toggleCart())
    }

    return (
        <header className="App-header">
            <nav>
                <div className="container">
                    <ul className="navbar-left">
                        BuyHatKe
                    </ul> {/*end navbar-left */}

                    <ul className="navbar-right">
                        <li>
                            <button className="btn btn-secondary" id="cart" onClick={cartToggleHandler}>
                                <i className="fa fa-shopping-cart"></i> Cart <span className="badge">{totalQuantity}</span>
                            </button>
                        </li>
                    </ul> {/*end navbar-right */}
                </div> {/*end container */}
            </nav>


            {isCartVisible && <Cart />}


        </header>
    )
}

export default Header;