import styled from 'styled-components'

export const CoffeeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 16rem;
    padding: 2rem 0;
    background: ${props => props.theme['baseCard']};
    color: ${props => props.theme['baseSubtitle']};
    border-radius: 6px 36px;

    img{
        width: 7.5rem;
        margin-top: -3.5rem;
    }

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;  
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        color: ${props => props.theme['baseLabel']};

        margin: 0.5rem 1rem 1.5rem 0.5rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        gap: 1.8125rem;
        
        p{
            margin: auto 0;
            gap: 0.2rem;
            color: ${props => props.theme['baseSubtitle']};
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            text-align: right;

            strong{
                font-family: 'Baloo 2';
                font-weight: 800;
                font-size: 24px;
            }
        }

        form{
            display: flex;
            gap: 0.5rem;
            div{
                border-radius: 6px;
                background: ${props => props.theme['baseButton']};
                gap: 0.5rem           
            }
        }
    }

`

export const Span = styled.span`
    background: ${props => props.theme['yellowLight']};
    color: ${props => props.theme['yellowDark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    margin: 0.75rem 0;
`

export const ButtonCart = styled.button`
    background: ${props => props.theme['purpleDark']};
    color: ${props => props.theme['white']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    :hover{
        background: ${props => props.theme['purple']};
    }
`

export const ButtonCount = styled.button`
    padding: 0 0.25rem;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['purple']};
    cursor: pointer;

    :focus{
        box-shadow: 0 0 0 2px transparent;
    }
`