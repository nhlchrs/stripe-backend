import React, { useState } from 'react';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';

const StripeCheckoutForm = ({ client_secret }: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | undefined | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean | undefined>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const { error } = await stripe!.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!,
        });
        if (error) {
            setMessage(error.message);
            setIsProcessing(false);
            return;
        }
        else {
            setIsProcessing(true)
            await stripe
                .confirmCardPayment(location.state !== null ? location?.state?.client_secret : client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement)!,
                        billing_details: {
                            name: 'Nihal Chaurasia',
                        },
                    },
                    setup_future_usage: 'off_session',
                })
                .then(function (result) {
                    console.log(result, "Resulttt");
                    if (result?.error) {
                        setIsProcessing(false);
                        setMessage(result.error?.message)
                        return;
                    }
                    setMessage("Payment Successfull!")
                    navigate("/success");
                }).catch(err => console.log(err.message));
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} >
            <CardElement id="payment-element" />
            {message && <div id="payment-message" className="pt-3 pb-3"> {message} </div>}
            <button type='submit' disabled={isProcessing || !stripe || !elements} id="submit" >
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button>
        </form >
    )
}
export default StripeCheckoutForm;