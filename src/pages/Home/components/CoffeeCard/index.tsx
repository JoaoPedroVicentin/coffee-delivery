import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { ButtonCart, ButtonCount, Tags, CoffeeCard, Span, Description, Buy, Counter } from "./style"

export function CoffeeCardContainer() {
    return(
        <CoffeeCard>
            <img src="src\assets\coffees\Expresso.svg"/>
            <Tags>
                <Span>ESPECIAL</Span>
                <Span>ALCOÓLICO</Span>
                <Span>GELADO</Span>
            </Tags>
            <Description>
                <h1>Expresso Tradicional</h1>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </Description>
            <Buy>
                <p>R$ <strong>9,90</strong></p>
                <form>
                    <Counter>
                        <ButtonCount><Minus weight="bold"/></ButtonCount>
                        <span>0</span>
                        <ButtonCount><Plus weight="bold"/></ButtonCount>
                    </Counter>
                    <ButtonCart><ShoppingCartSimple weight="fill" size={22}/></ButtonCart>
                </form>
            </Buy>
        </CoffeeCard>
    )
}