import Layout from '../../layout';
import { Link } from 'react-router-dom'
import Product from '../../components/product';
import { ProductType } from '../../types/product.type';
import { clientProducts } from '../../dummyData/product';
import { clients } from "../../dummyData/client";

const Home = () => {
    return (
        <Layout>
            <div className="row justify-content-center">
                {(clients.map((client: { name: string; id: string; }) => (
                    <div className="col-1" key={client.name}>
                        <Link to={`/${client.id}`}>{client.name}</Link>
                    </div>
                )))}
            </div>
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
        </Layout>
    )
}

export default Home;