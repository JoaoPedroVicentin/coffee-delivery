import styled from "styled-components";

export const CheckoutContainer = styled.main`
    padding: 2rem 6rem;
    

    form{
        gap: 2rem;
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;

        @media (max-width: 1339px) {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 550px) {
        padding: 2rem 0.5rem;
    }
`

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 130%;
`
