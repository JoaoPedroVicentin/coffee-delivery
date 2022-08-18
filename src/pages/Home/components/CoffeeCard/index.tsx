import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { ButtonCart, ButtonCount, CoffeeCard, Span } from "./style"

export function CoffeeCardContainer() {
    return(
        <CoffeeCard>
            <img src="src\assets\coffees\Expresso.svg"/>
            <Span>TRADICIONAL</Span>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
                <p>R$ <strong>9,90</strong></p>
                <form>
                    <div>
                        <ButtonCount><Minus weight="bold"/></ButtonCount>
                        <span>0</span>
                        <ButtonCount><Plus weight="bold"/></ButtonCount>
                    </div>
                    <ButtonCart><ShoppingCartSimple weight="fill" size={22}/></ButtonCart>
                </form>
            </div>
        </CoffeeCard>
    )
}