import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Purchase } from "./components/Purchase";
import { CheckoutContainer, FormColumn } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { useContext } from "react";
import { PurchaseContext } from "../../contexts/PurchaseContext";

enum PaymentMethods {
    credit = "Cartão de Crédito",
    money = "Dinheiro",
    debit = "Cartão de Débito"
}

const formValiadation = zod.object({
    cep: zod.string().nonempty("Digite seu cep").min(8, "Mínimo de 8 carácteres").regex(/^([0-9]+)$/i, { message: 'Deve conter apenas números' }),
    rua: zod.string().nonempty("Digite sua rua"),
    numero: zod.string().nonempty("Digite seu número").regex(/^([0-9]+)$/i, { message: 'Deve conter apenas números' }),
    bairro: zod.string().nonempty("Digite seu bairro"),
    cidade: zod.string().nonempty("Digite sua cidade"),
    complemento: zod.string(),
    uf: zod.string().nonempty("Digite seu estado").length(2, "Digite um valor válido"),
    payment: zod.nativeEnum(PaymentMethods, {
        errorMap:() => {
            return {message: "Informe o método de pagamento"}
        } 
    })
})

type FormData = zod.infer<typeof formValiadation>

export function Checkout() {

    const {createPurchaseData} = useContext(PurchaseContext)

    const newForm = useForm<FormData>({
        resolver: zodResolver(formValiadation),
        defaultValues:{
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            uf: '',
            complemento: '',
        },
    })

    const { handleSubmit } = newForm

    function handleNewPurchase(data: FormData){
        createPurchaseData(data)
        console.log(data)
    }

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit(handleNewPurchase)}>
            <FormProvider {...newForm}>
                <FormColumn>
                    <h1>Complete seu pedido</h1>
                    <Address />
                    <Payment />
                </FormColumn>
                <FormColumn>
                    <h1>Cafés selecionados</h1>
                    <Purchase />
                </FormColumn>
            </FormProvider>
            </form>
        </CheckoutContainer>
    )
}
