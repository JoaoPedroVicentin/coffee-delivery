import styled from "styled-components";

export const PurchaseContainer = styled.div`
    background: ${props => props.theme['baseCard']};
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2.5rem;
`

export const ValuePurchase = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
`

export const ValueDescription = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    }

    strong{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
    }
`

export const ButtonPurchase = styled.button`
    background: ${props => props.theme['yellow']};
    width: 100%;
    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    :hover{
        background: ${props => props.theme['yellowDark']};
    }

    a{
        text-decoration: none;
        color: ${props => props.theme['white']};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`