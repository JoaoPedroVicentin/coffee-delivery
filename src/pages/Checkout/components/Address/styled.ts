import styled from "styled-components";

export const AddressContainer = styled.div`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    `

export const FormContainer = styled.div`
   background: ${props => props.theme['baseCard']};
   border-radius: 6px;
   padding: 2.5rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

export const FormHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme['yellowDark']};
`

export const FormTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme['baseSubtitle']};

    h1{
        font-size: 1rem;
        font-weight: 400;
        
    }
    h2{
        font-size: 0.875rem;
        font-weight: 400;
    }
`

export const FormBody = styled.div`
    display: grid;
    grid-template-columns: 1fr  1fr 1fr;
    grid-template-areas: "cep . ."
                         "rua rua rua"
                         "numero complemento complemento"
                         "bairro cidade uf";
    gap: 1rem;

    @media (max-width: 875px) {
        grid-template-columns: 1fr;
        grid-template-areas: "cep"
                             "rua"
                             "numero"
                             "complemento"
                             "bairro"
                             "cidade"
                             "uf";
    }

    input{
        width: 100%;
        height: 2.625rem;
        background: ${props => props.theme['baseInput']};
        color: ${props => props.theme['baseLabel']};
        padding: 0.75rem;
        border: 1px solid #E6E5E5;
        border-radius: 4px;
        font-size: 0.875rem;

        :focus{
            color: ${props => props.theme['baseText']};
            box-shadow: 0 0 0 2px ${(props) => props.theme['yellowDark']};
        }
    }

    span{
        color: red;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.8rem;
    }

    #CEP{
        grid-area: cep;
    }
    #Rua{
        grid-area: rua;
    }
    #Numero{
        grid-area: numero;
    }
    #Complemento{
        grid-area: complemento;
    }
    #Bairro{
        grid-area: bairro;
    }
    #Cidade{
        grid-area: cidade;
    }
    #UF{
        grid-area: uf;
    }
`