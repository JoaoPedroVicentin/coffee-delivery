import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentContainer, PaymentHeader, PaymentOptions, PaymentTitle } from "./styled";

export function Payment() {
    return(
        <PaymentContainer>
            <PaymentHeader>
                <CurrencyDollar size={22}/>
                <PaymentTitle>
                    <h1>Pagamento</h1>
                    <h2>O pagamento é feito na entrega. Escolha a forma que desejar pagar</h2>
                </PaymentTitle>
            </PaymentHeader>
            <PaymentOptions>
                <button><CreditCard color="#8047F8" size={16}/>CARTÃO DE CRÉDITO</button>
                <button><Bank color="#8047F8" size={16}/>CARTÃO DE DÉBITO</button>
                <button><Money color="#8047F8" size={16}/>DINHEIRO</button>
            </PaymentOptions>
        </PaymentContainer>
    )
}