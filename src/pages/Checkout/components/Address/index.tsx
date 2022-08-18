import { MapPinLine } from "phosphor-react";
import { AddressContainer, FormBody, FormContainer, FormHeader, FormTitle } from "./styled";

export function Address() {
    return(
        <AddressContainer>
            <h1>Complete seu pedido</h1>

            <FormContainer>
                <FormHeader>
                    <MapPinLine size={22}/>
                    <FormTitle>
                        <h1>Endereço de Entrega</h1>
                        <h2>Informe o endereço onde deseja receber o seu pedido</h2>
                    </FormTitle>
                </FormHeader>

                <FormBody>
                    <input placeholder="CEP"/>
                    <input placeholder="Rua"/>
                    <input placeholder="Número"/>
                    <input placeholder="Complemento"/>
                    <input placeholder="Bairro"/>
                    <input placeholder="Cidade"/>
                    <input placeholder="UF"/>
                </FormBody>
            </FormContainer>
        </AddressContainer>
    )
}