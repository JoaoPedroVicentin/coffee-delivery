import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { MethodPayment, PaymentContainer, PaymentHeader, PaymentOptions, PaymentTitle } from "./styled";
import { useFormContext } from "react-hook-form";

export function Payment() {

    const { register, formState: {errors} } = useFormContext()

    const paymentError = errors?.payment?.message as unknown as string

    return (
        <PaymentContainer>
            <PaymentHeader>
                <CurrencyDollar size={22} />
                <PaymentTitle>
                    <h1>Pagamento</h1>
                    <h2>O pagamento é feito na entrega. Escolha a forma que desejar pagar</h2>
                </PaymentTitle>
            </PaymentHeader>
            <PaymentOptions>
                <MethodPayment>
                    <input id="credit" value="Cartão de Crédito" type="radio" {...register('payment')}/>
                    <label htmlFor="credit">
                        <div>
                            <CreditCard color="#8047F8" size={16} />CARTÃO DE CRÉDITO
                        </div>
                    </label>
                </MethodPayment>
                <MethodPayment>
                    <input id="debit" value="Cartão de Débito" type="radio" {...register('payment')} />
                    <label htmlFor="debit">
                        <div>
                            <Bank color="#8047F8" size={16} />CARTÃO DE DÉBITO    
                        </div>
                    </label>
                </MethodPayment>
                <MethodPayment>
                    <input id="money" value="Dinheiro" type="radio" {...register('payment')} />
                    <label htmlFor="money">
                        <div>
                            <Money color="#8047F8" size={16} />DINHEIRO
                        </div>
                    </label>
                </MethodPayment>
            </PaymentOptions>
            <span>{paymentError}</span>
        </PaymentContainer>
    )
}