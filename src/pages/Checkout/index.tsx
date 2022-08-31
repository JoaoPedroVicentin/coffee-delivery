import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Purchase } from "./components/Purchase";
import { CheckoutContainer, FormColumn } from "./styles";


export function Checkout() {
    return(
        <CheckoutContainer>
            <FormColumn>
                <h1>Complete seu pedido</h1>
                <Address/>
                <Payment/>
            </FormColumn>
            <FormColumn>
                <h1>Cafés selecionados</h1>
                <Purchase/>
            </FormColumn>
        </CheckoutContainer>
    )
}
