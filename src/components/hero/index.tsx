import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
         <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Best products & brands <br/><span>In our store</span></h1>
            <h2>Trendy Products, Factory Prices, Excellent Service</h2>
            <div className="d-flex">
               <Link to="/products" className="btn-get-started scrollto">View Products</Link>
            </div>
         </div>
      </section>
    )
};

export default Hero;