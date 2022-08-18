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
   margin: 2rem 0;
   border-radius: 6px;
   padding: 2.5rem;
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

export const FormBody = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1.5rem 0;

    input{
        background: ${props => props.theme['baseInput']};
        color: ${props => props.theme['baseLabel']};
        padding: 0.75rem;
        border: 1px solid #E6E5E5;
        border-radius: 4px;
        font-size: 0.875rem;

        :focus{
            color: ${props => props.theme['baseText']};
        }
    }
`