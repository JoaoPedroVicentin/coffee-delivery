import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 6rem;
`

export const Intro = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    gap: 1rem;
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 2rem;

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme['baseTitle']};
        
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
    }
`
export const Filter = styled.div`
    display: flex;
    gap: 0.5rem;

    a{
        border: 1px solid ${props => props.theme['yellow']};
        color: ${props => props.theme['yellowDark']};
        text-decoration: none;
        border-radius: 100px;
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
    }
`
export const List = styled.div`

`
