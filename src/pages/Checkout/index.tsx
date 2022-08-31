import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Purchase } from "./components/Purchase";
import { CheckoutContainer, FormColumn } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    rua: zod.string().min(1, "Informe a Rua"),
    numero: zod.string().min(1, "Informe o Numerro"),
    complemento: zod.string(),
    bairro: zod.string().min(1, "Informe o Bairro"),
    cidade: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe o UF")
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    function handleConfirmOrder(data: ConfirmOrderFormData){
        console.log(data)
    } 

    return (
        <CheckoutContainer>
            <FormProvider {...confirmOrderForm}>
                <form onSubmit={handleSubmit(handleConfirmOrder)}>
                    <FormColumn>
                        <h1>Complete seu pedido</h1>
                        <Address />
                        <Payment />
                    </FormColumn>
                    <FormColumn>
                        <h1>Cafés selecionados</h1>
                        <Purchase />
                    </FormColumn>
                </form>
            </FormProvider>
        </CheckoutContainer>
    )
}
