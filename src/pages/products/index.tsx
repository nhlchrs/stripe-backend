import LayoutWithoutHero from "../../layout/without-hero";
import Product from "../../components/product";
import { clientProducts } from "../../dummyData/product";
import { useParams } from "react-router-dom";

const Products = () => {
    const params = useParams();
    const { client } = params;

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
            <main id="main">
                <section id="services" className="services">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h3>New <span>Products</span></h3>
                        </div>
                    </div>

                    <div className="row">
                        {
                            !!client && clientProducts[`${client}`].map((product, index) => (
                                <Product {...product} key={`product-${index}`}></Product>
                            ))
                        }
                    </div>
                </section>
            </main>
        </LayoutWithoutHero>
    )
}

export default Products;