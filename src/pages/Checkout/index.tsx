import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Purchase } from "./components/Purchase";
import { CheckoutContainer } from "./styles";


export function Checkout() {
    return(
        <CheckoutContainer>
            <div>
                <Address/>
                <Payment/>
            </div>
            <Purchase/>
        </CheckoutContainer>
    )
}