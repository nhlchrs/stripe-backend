type Props = {
    image: string;
    price: number;
    title: string;
};
const Product = ({image, price, title}: Props) => {
    return (
        <div className="card icon-box">
            <div className="img-wrap text-center border-bottom">
                <img src={image} />
            </div>
            <div className="card-body p-4">
                <h5 className="card-title">{price}</h5>
                <p className="card-text">{title}
                </p>
                <a href="product-page.html" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default Product;