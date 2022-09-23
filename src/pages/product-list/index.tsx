import Layout from '../../layout';
import LayoutWithoutHero from '../../layout/without-hero';
import { Link } from 'react-router-dom'
import Product from '../../components/product';
import { ProductType } from '../../types/product.type';
import { clientProducts } from '../../dummyData/product';
import { clients } from "../../dummyData/client";

const ProductList = () => {
    return (
        <LayoutWithoutHero breadcrumb={{
            pageTitle: "Products Page",
            links: [
                {
                    link: "/",
                    title: "Home"
                },
                {
                    title: "Products"
                }
            ]
        }}>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h3>New <span>Products</span></h3>
                    </div>
                </div>
                <div className="row">
                    {Object.values(clientProducts).map((products: ProductType[]) =>
                        products.map((product: ProductType, index) => (
                            <Product {...product} key={`product-${index}`}></Product>
                        ))
                    )}
                </div>
            </section>
        </LayoutWithoutHero>
    )
}

export default ProductList;