import { useState } from 'react'
import LayoutWithoutHero from '../../layout/without-hero'
import SubscriptionForm from './subscription-form';
const Subscription = () => {
    const [formData, setformData] = useState<{
        form_name: string | undefined;
        price_id: string | undefined;
    }>
        ({
            price_id: "",
            form_name: ""
        })

    const handleForm = (form_name?: string | undefined) => {
        let price_id = form_name === 'basic' ? process.env.REACT_APP_BASIC_STRIPE_SUBSCRIPTION : form_name === 'starter' ? process.env.REACT_APP_STARTER_STRIPE_SUBSCRIPTION : process.env.REACT_APP_ENTERPRISE_STRIPE_SUBSCRIPTION;
        setformData(prevState => ({
            ...prevState,
            form_name,
            price_id
        }))

    }

    return (
        <LayoutWithoutHero breadcrumb={{
            pageTitle: "Registration Page",
            links: [
                {
                    link: "/",
                    title: "Home"
                },
                {
                    title: "Subscription"
                }
            ]
        }}>
            <div className="container mb-5 mt-5 subscription__table">
                <div className='subscription__title py-4'>
                    <h1 className='text-center'>Subscription Plan</h1>
                </div>
                <div className="pricing card-deck flex-column flex-md-row mb-3">
                    <div className="card card-pricing text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Basic Tier</span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">₹<span className="price">100</span><span className="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Up to 5 users</li>
                                <li>Basic support on Github chec</li>
                                <li>No Monthly updates ❌ </li>
                                <li>No Free cancelation ❌ </li>
                            </ul>
                            {formData.form_name === "basic" && <SubscriptionForm price_id={formData.price_id} />}
                            {formData.form_name !== "basic" && <button type="button" onClick={() => handleForm("basic")} className="btn btn-outline-secondary mb-3">Order now</button>}
                        </div>
                    </div>
                    <div className="card card-pricing popular  text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter Tier</span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">₹<span className="price">500</span><span className="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Up to 20 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates ❌ </li>
                                <li>Free cancelation ✔ </li>
                            </ul>
                            {formData.form_name === "starter" && <SubscriptionForm price_id={formData.price_id} />}
                            {formData.form_name !== "starter" && <button type="button" onClick={() => handleForm("starter")} className="btn btn-outline-secondary mb-3">Order now</button>}
                        </div>
                    </div>
                    <div className="card card-pricing popular  text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise Tier</span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">₹<span className="price">1000</span><span className="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Up to 100 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates  ✔ </li>
                                <li>Free cancelation ✔ </li>
                            </ul>
                            {formData.form_name === "enterprise" && <SubscriptionForm price_id={formData.price_id} />}
                            {formData.form_name !== "enterprise" && <button type="button" onClick={() => handleForm("enterprise")} className="btn btn-outline-secondary mb-3">Order now</button>}
                        </div>
                    </div>

                </div>
            </div >
        </LayoutWithoutHero >
    )
}

export default Subscription