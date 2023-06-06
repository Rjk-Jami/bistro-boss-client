import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../components/hooks/useCart';

//TODO : provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_pk);

const Payment = () => {
    const [cart] = useCart()
    //call back function and initial value
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price)




    return (
        <div>
            <SectionTitle heading={'PAYMENT'} subHeading={"please proceed to payment"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;