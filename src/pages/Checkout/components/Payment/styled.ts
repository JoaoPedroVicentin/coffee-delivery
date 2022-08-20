import styled from "styled-components";

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background: ${props => props.theme['baseCard']};
    border-radius: 6px;
    gap: 2rem;
    color: ${props => props.theme['purple']};
`

export const PaymentHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
`

export const PaymentTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    
    h1{
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme['baseSubtitle']};
    }

    h2{
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme['baseText']};
    }
`

export const PaymentOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    @media (max-width: 820px) {
        display: grid;
        grid-template-columns: 1fr;
    }

    button{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        background: ${props => props.theme['baseButton']};
        color: ${props => props.theme['baseText']};
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 160%;
        padding: 1rem;
        border-radius: 6px;
        text-decoration: none;
        border: none;

        :hover{
            background: ${props => props.theme['baseHover']};
            cursor: pointer;
        }

        :focus{
            background: ${props => props.theme['purpleLight']};
            box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
        }
    }
`