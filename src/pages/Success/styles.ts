import styled from "styled-components";

export const SuccessContainer = styled.main`
    padding: 2rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    img{
        margin: auto auto 0 auto;
        bottom: 0;
        width: 75%;
    }

    @media (max-width: 1028px) {
        grid-template-columns: 1fr;
        gap: 2rem
    }

    @media (max-width: 550px) {
        padding: 2rem 1rem;
    }
`

export const ConfirmPurchase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
`

export const ConfirmHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: ${props => props.theme['yellowDark']};
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: ${props => props.theme['baseSubtitle']};
    }
`

export const ConfirmBody = styled.div`
    border: 1px solid red;
    border-image: linear-gradient(to left, #8047f8, #dbac2c );
    border-image-slice: 1;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ConfirmInfo = styled.div`
    display: flex;
    gap: 0.75rem;

    p{
        font-size: 1rem;
        line-height: 130%;
    }
`

export const InfoIcon = styled.span`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    height: 2rem;
    width: 2rem;
    color: ${props => props.theme['white']};
`

export const MapIcon = styled(InfoIcon)`
    background: ${props => props.theme['purple']};
`

export const TimerIcon = styled(InfoIcon)`
    background: ${props => props.theme['yellow']};
`

export const DollarIcon = styled(InfoIcon)`
    background: ${props => props.theme['yellowDark']};
`
