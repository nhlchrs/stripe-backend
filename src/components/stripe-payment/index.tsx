import React, { useState } from 'react';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const StripeCheckoutForm = (props: any) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<any | null>(null);
    const [isProcessing, setIsProcessing] = useState<any | null>(false);

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
                .confirmCardPayment(props.client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement)!,
                        billing_details: {
                            name: 'Nihal Chaurasia',
                        },
                    },
                })
                .then(function (result) {
                    console.log(result, "Resulttt");
                    if (result?.error) {
                        setIsProcessing(false);
                        setMessage(result.error?.message)
                        return;
                    }
                    setMessage("Payment Successfull!")
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