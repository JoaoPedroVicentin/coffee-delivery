import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 0 6rem;
    height: 6.5rem;
    background: ${props => props.theme['background']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    @media (max-width: 550px) {
        padding: 2rem 1rem;
    }
`

export const Action = styled.div`
    gap: 0.75rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;

    background: ${props => props.theme['purpleLight']};
    color: ${props => props.theme['purpleDark']};
`

export const Cart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    cursor: inherit;
    background: ${props => props.theme['yellowLight']};
    color: ${props => props.theme['yellowDark']};

    span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: 1.5rem;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    border-radius: 50%;
    background: ${props => props.theme['yellowDark']};
    color: ${props => props.theme['white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

`