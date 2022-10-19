import LayoutWithoutHero from "../../layout/without-hero";

export default () => {

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
            <div className="success-msg">
                <h1>
                    Congrats!
                    Stripe has successfully processed your payment
                </h1>
            </div>
        </LayoutWithoutHero>
    );
};
