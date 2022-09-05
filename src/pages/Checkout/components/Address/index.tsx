import { MapPinLine } from "phosphor-react";
import { AddressContainer, FormBody, FormContainer, FormHeader, FormTitle } from "./styled";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

export function Address() {

    const { register, formState } = useFormContext()

    const { errors } = formState as unknown as ErrorsType

    return (
        <AddressContainer>
            <FormContainer>
                <FormHeader>
                    <MapPinLine size={22} />
                    <FormTitle>
                        <h1>Endereço de Entrega</h1>
                        <h2>Informe o endereço onde deseja receber o seu pedido</h2>
                    </FormTitle>
                </FormHeader>

                <FormBody>
                    <div id="CEP">
                        <input placeholder="CEP" {...register('cep')} />
                        <span>{errors.cep?.message}</span>
                    </div>
                    <div id="Rua">
                        <input placeholder="Rua" {...register('rua')} />
                        <span>{errors.rua?.message}</span>
                    </div>
                    <div id="Numero">
                        <input placeholder="Número" {...register('numero')} />
                        <span>{errors.numero?.message}</span>
                    </div>
                    <div id="Complemento">
                        <input placeholder="Complemento (opcional)" {...register('complemento')} />
                        <span>{errors.complemento?.message}</span>
                    </div>
                    <div id="Bairro">
                        <input placeholder="Bairro" {...register('bairro')} />
                        <span>{errors.bairro?.message}</span>                     
                    </div>
                    <div id="Cidade">
                        <input placeholder="Cidade" {...register('cidade')} />
                        <span>{errors.cidade?.message}</span>
                    </div>
                    <div id="UF">
                        <input placeholder="UF" max={2} {...register('uf')} />
                        <span>{errors.uf?.message}</span>
                    </div>
                </FormBody>
            </FormContainer>
        </AddressContainer>
    )
}