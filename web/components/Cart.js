import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;

export default function Cart({ children }) {
    return (
        <CartProvider 
            mode="payment"
            cartMode="checkout-session" 
            stripe={stripeKey} 
            currency={"usd"}>
            {children}
        </CartProvider>
    );
}