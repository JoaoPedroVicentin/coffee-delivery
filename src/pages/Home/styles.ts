import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 6rem;

    @media (max-width: 550px) {
        padding: 0 2rem;
    }
`

export const Intro = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    gap: 1rem;

    @media (max-width: 1169px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;

@media (max-width: 1169px) {
        gap: 2rem;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 2rem;

    @media (max-width: 1169px) {
        padding-right: 0;
    }

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme['baseTitle']};

        @media (max-width: 460px) {
            font-size: 2.5rem;
        }
        
    }
    p{
        color: ${props => props.theme['baseSubtitle']};
        font-size: 1.25rem;
        line-height: 130%;
    }
`

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 555px) {
        grid-template-columns: 1fr;
    }
    
    p{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
    }
`
export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;

        @media (max-width: 1169px) {
            width:75%;
        }
    }
`

export const Icon = styled.span`
    color: ${props => props.theme['white']};
    padding: 0.5rem;
    border-radius: 9999px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Cart = styled(Icon)`
    background: ${props => props.theme['yellowDark']};
`
export const Pack = styled(Icon)`
    background: ${props => props.theme['baseText']};
`
export const Clock = styled(Icon)`
    background: ${props => props.theme['yellow']};
`
export const CoffeeIcon = styled(Icon)`
    background: ${props => props.theme['purple']};
`

export const CoffeeList = styled.section`
    font-family: 'Baloo 2';
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem 0;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;

        h1{
            font-size: 2rem;
            line-height: 130%;
        }

        @media (max-width: 995px) {
            flex-direction: column;
            gap: 0.75rem;
        }
    }
`

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem 0;
    gap: 3rem 0.5rem;

    @media (max-width: 1259px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 995px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 727px) {
        grid-template-columns: 1fr;
    }

`
