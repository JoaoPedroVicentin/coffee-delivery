import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { useContext, useState } from "react"
import { PurchaseContext } from "../../../../contexts/PurchaseContext"
import { ButtonCart, ButtonCount, Tags, CoffeeCard, Span, Description, Buy, Counter } from "./style"

interface CoffeeProps {
    id: string
    name: string,
    description: string,
    value: number,
    category: string[]
    img: string,
}

export function CoffeeCardContainer({ id, name, description, value, category, img }: CoffeeProps) {

    const {handleNewPurchase} = useContext(PurchaseContext)

    const [qtde, setQtde] = useState(0)

    function addQtde(){

    }

    function dropQtde(){

    }

    function newPurchase(){
        handleNewPurchase(id, qtde)
    }

    return (
        <CoffeeCard>
            <img src={img} />
            <Tags>
                {category.map(tag => {
                    return (
                        <Span>{tag}</Span>
                    )
                })}
            </Tags>
            <Description>
                <h1>{name}</h1>
                <p>{description}</p>
            </Description>
            <Buy>
                <p>R$ <strong>{value.toFixed(2)}</strong></p>
                <div>
                    <Counter>
                        <ButtonCount onClick={addQtde}><Minus weight="bold" /></ButtonCount>
                        <span>{qtde}</span>
                        <ButtonCount onClick={dropQtde}><Plus weight="bold" /></ButtonCount>
                    </Counter>
                    <ButtonCart onClick={newPurchase}><ShoppingCartSimple weight="fill" size={22} /></ButtonCart>
                </div>
            </Buy>
        </CoffeeCard>
    )
}