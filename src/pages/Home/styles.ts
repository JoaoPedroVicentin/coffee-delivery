import styled from 'styled-components'

export const Intro = styled.section`
    background: ${props => props.theme['yellow']};
    position: relative;
    height: calc(100vh - 10rem);

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    padding: 0 10rem;
    gap: 1rem;
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${props => props.theme['purple']};
`

export const Title = styled.div`
`

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['purple']};

    img{
        width: 29.75rem;
    }
`