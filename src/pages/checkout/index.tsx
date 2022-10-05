import CheckoutDetail from "../../components/checkout-detail";
import CheckoutForm from "../../components/checkout-form";
import LayoutWithoutHero from "../../layout/without-hero";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const params = useParams();
    const { client, product_id } = params;

    return (
        <LayoutWithoutHero breadcrumb={{
            pageTitle: "Checkout Page",
            links: [
                {
                    link: "/",
                    title: "Home"
                },
                {
                    title: "Checkout"
                }
            ]
        }}>
            <section id="contact" className="contact">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="section-title">
                        <h3><span>Checkout</span></h3>
                    </div>
                    <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-6">
                            <CheckoutForm></CheckoutForm>
                        </div>
                        <div className="col-lg-6">
                            <CheckoutDetail {...{ client, product_id }}></CheckoutDetail>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutWithoutHero>
    )
}

export default Checkout;