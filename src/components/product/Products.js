import { useDispatch } from "react-redux";
import { cartActions } from "store/cart-slice";

const PRODUCTS_DEMO = [
    {
        id: "pro1",
        price: 400,
        title: "Galaxy M12"
    },
    {
        id: "pro2",
        price: 40,
        title: "Samsung SDS"
    },
    {
        id: "pro3",
        price: 990,
        title: "Galaxy Z Flip3 5G "
    }
]

const Products = () => {

    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        console.log(' product ', product)
        dispatch(cartActions.addToCart(product));
    }

    return (
        <section className="products">
            {/* <div className="container pt-5">
                <div className="row align-items-center justify-content-between">

                    <div className="col-lg-2 col-md-3 col-sm-4 col-7">
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">42 Items</span>
                            </div>
                            <select name="" className="form-control form-control-sm">
                                <option value="">12</option>
                                <option value="">24</option>
                                <option value="">48</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3 col-5 text-right order-md-1">
                        <a href="#" className="btn btn-primary grid-view btn-sm">
                            <i className="fa fa-th-large"></i>
                        </a>
                        <a href="#" className="btn btn-primary list-view btn-sm">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>

                    <div className="col-md-3 order-md-0 mt-2 mt-md-0">
                        <select className="form-control form-control-sm">
                            <option value="">Sort By</option>
                            <option value="">Popylar</option>
                            <option value="">Name</option>
                        </select>
                    </div>

                </div>
            </div> */}

            <div className="container">
                <hr />
            </div>

            <div className="container">
                <div className="row">

                    {
                        PRODUCTS_DEMO &&
                        PRODUCTS_DEMO.map((product) => (
                            <div className="col-md-4 mb-3" key={product.id}>
                                <div className="card h-100">
                                    <div className="d-flex justify-content-between position-absolute w-100">
                                        <div className="label-new">
                                            <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <span className="ml-1">New</span>
                                            </span>
                                        </div>
                                        <div className="label-sale">
                                            <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
                                                <i className="fa fa-tag" aria-hidden="true"></i>
                                                <span className="ml-1">Sale</span>
                                            </span>
                                        </div>
                                    </div>

                                    <a href="#">
                                        <img src="https://picsum.photos/700/550" className="card-img-top" alt="Product" />
                                    </a>

                                    <div className="card-body px-2 pb-2 pt-1">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className="h4 text-primary">${product.price}</p>
                                            </div>

                                        </div>
                                        {/* <p className="text-warning d-flex align-items-center mb-2">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </p> */}
                                        <p className="mb-0">
                                            <strong>
                                                {product.title}
                                            </strong>
                                        </p>


                                        <div className="d-flex justify-content-between">
                                            <div className="col px-0">
                                                <button className="btn btn-outline-primary btn-block" onClick={() => addToCartHandler(product)}>
                                                    Add To Cart
                                                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className="ml-2">
                                                <a href="#" className="btn btn-outline-success" data-toggle="tooltip" data-placement="left" title="Add to Wishlist">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }






                </div>
            </div>


            <div className="container">
                <hr />
            </div>

            {/* <div className="container pb-5">
                <div className="row align-items-center justify-content-between">

                    <div className="col-lg-2 col-md-3 col-sm-4 col-7">
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">42 Items</span>
                            </div>
                            <select name="" className="form-control form-control-sm">
                                <option value="">12</option>
                                <option value="">24</option>
                                <option value="">48</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-5 text-right">
                        <a href="#" className="btn btn-primary grid-view btn-sm">
                            <i className="fa fa-th-large"></i>
                        </a>
                        <a href="#" className="btn btn-primary list-view btn-sm">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>

                </div>
            </div> */}
        </section>
    )
}

export default Products;