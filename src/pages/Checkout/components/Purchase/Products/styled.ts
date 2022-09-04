import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    width: 100%;
    img{
        width: 4rem;
    }

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #E6E5E5;
`

export const InfosProduct = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['baseSubtitle']};

    div{
        display: flex;
        gap: 0.5rem;

        @media (max-width: 550px) {
            flex-direction: column;
        }
    }
`

export const ValuesProduct = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme['baseText']};
`

export const CounterProduct = styled.div`
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme['baseButton']};
        padding: 0rem 0.5rem;
        gap: 0.5rem;
        border: none;
    `

export const ButtonCountProduct = styled.button`
    padding: 0;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['purple']};
    cursor: pointer;

    :focus{
        box-shadow: 0 0 0 2px transparent;
        color: ${props => props.theme['purpleDark']};
    }
`

export const DeleteProduct = styled.button `
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['baseButton']};
    color: ${props => props.theme['baseText']};
    padding: 0.5rem;
    gap: 0.25rem;
    border: none;
    font-size: 0.75rem;
    cursor: pointer;

    :hover{
        background: ${props => props.theme['baseHover']};
    }

    :focus{
        box-shadow: 0 0 0 2px transparent;
    }
`