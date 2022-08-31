import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { AddressContainer, FormBody, FormContainer, FormHeader, FormTitle } from "./styled";


export function Address() {
    const { register } = useFormContext()


    return(
        <AddressContainer>
            <FormContainer>
                <FormHeader>
                    <MapPinLine size={22}/>
                    <FormTitle>
                        <h1>Endereço de Entrega</h1>
                        <h2>Informe o endereço onde deseja receber o seu pedido</h2>
                    </FormTitle>
                </FormHeader>

                <FormBody>
                    <input id="CEP" placeholder="CEP" {...register("cep")}/>
                    <input id="Rua" placeholder="Rua" {...register("rua")}/>
                    <input id="Numero" placeholder="Número" {...register("numero")}/>
                    <input id="Complemento" placeholder="Complemento"/>
                    <input id="Bairro" placeholder="Bairro" {...register("bairro")}/>
                    <input id="Cidade" placeholder="Cidade" {...register("cidade")}/>
                    <input id="UF" placeholder="UF" {...register("uf")}/>
                </FormBody>
            </FormContainer>
        </AddressContainer>
    )
}