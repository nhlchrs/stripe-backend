import { CheckoutDetailType } from "../../types/checkout-detail.type";
import { clientProducts } from "../../dummyData/product";

const CheckoutDetail = ({client, product_id}: CheckoutDetailType) => {
    let product = clientProducts[client as string].find(product => product.id === product_id);
    
    return (
        <form action="#" method="post" className="php-email-form">
            <div className="row aos-init mb-4 aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-8 col-md-6 border-bottom">
                    <div className="info-box">
                        <h3>Product</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 border-bottom">
                    <div className="info-box">
                        <h3>Total</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 border-bottom">
                    <ul className="qty">
                        <li>{product?.title} × 1 </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 border-bottom">
                    <ul className="qty">
                        <li><b>${product?.price}</b></li>
                    </ul>
                </div>
                <div className="col-lg-8 col-md-6 border-bottom">
                    <ul className="qty">
                        <li><b>Subtotal</b></li>
                        <li><b>Shipping</b></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 border-bottom">
                    <ul className="qty">
                        <li><span>${product?.price}</span></li>
                        <li><span>Included</span></li>
                    </ul>
                </div>
                <div className="col-lg-8 col-md-6 border-bottom">
                    <ul className="qty">
                        <li>Total</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 border-bottom">
                    <ul className="qty">
                        <li><span>${product?.price}
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12">
                    <ul className="qty">
                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-1" />
                                    <label htmlFor="payment-1">Check Payments</label>
                            </div>
                        </li>
                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-1"/>
                                    <label htmlFor="payment-1">Cash On Delivery</label>
                            </div>
                        </li>
                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-1" />
                                    <label htmlFor="payment-1">Stripe</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mb-3"><button type="button" className="btn btn-primary">Place Order</button></div>
        </form>
    )
}

export default CheckoutDetail;