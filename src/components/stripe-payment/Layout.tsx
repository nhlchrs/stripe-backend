import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./index";
import { loadStripe } from "@stripe/stripe-js";


const Layout = (props: any) => {
    console.log(props)
    const [stripePromise, setStripePromise] = useState<any | null>(null);
    const [clientSecret, setClientSecret] = useState<string | null>("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/stripe-onboarding/config`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/stripe-checkout`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "testuser@test.com",
                "name": "Test User",
                "amount": props.price,
                "stripe_account_id": props.stripe_account_id
            }),
        }).then(async (result) => {
            var { data } = await result.json();
            setClientSecret(data);
        }).catch(err => {
            console.log(err.message)
        });
    }, []);
    return (
        <>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <StripeCheckoutForm client_secret={clientSecret} />
                </Elements>
            )}
        </>
    );
}

export default Layout;
