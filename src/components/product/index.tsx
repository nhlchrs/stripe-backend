import { Link } from 'react-router-dom'
import { ProductType } from "../../types/product.type";

const Product = ({id, image, price, title, client}: ProductType) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch pb-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="card icon-box">
                <div className="img-wrap text-center border-bottom">
                    <img src={image} alt={title} title={title}/>
                </div>
                <div className="card-body p-4 text-center">
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{title}
                    </p>
                    <Link to={`/checkout/${client}/${id}`} className="btn btn-primary">Add to cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Product;