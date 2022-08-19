import { MapPinLine } from "phosphor-react";
import { AddressContainer, FormBody, FormContainer, FormHeader, FormTitle } from "./styled";

export function Address() {
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
                    <input id="CEP" placeholder="CEP"/>
                    <input id="Rua" placeholder="Rua"/>
                    <input id="Numero" placeholder="Número"/>
                    <input id="Complemento" placeholder="Complemento"/>
                    <input id="Bairro" placeholder="Bairro"/>
                    <input id="Cidade" placeholder="Cidade"/>
                    <input id="UF" placeholder="UF"/>
                </FormBody>
            </FormContainer>
        </AddressContainer>
    )
}