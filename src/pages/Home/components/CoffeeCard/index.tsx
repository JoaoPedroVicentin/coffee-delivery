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

    const [qtde, setQtde] = useState(1)

    function addQtde(){
        setQtde((state) => {
            return state + 1
        })
    }

    function dropQtde(){
        setQtde((state) => {
            if(qtde > 1){
                return state - 1
            } else { return state }
        })
    }

    function newPurchase(){
        handleNewPurchase(id, qtde)
        setQtde(1)
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
                        <ButtonCount onClick={dropQtde}><Minus weight="bold" /></ButtonCount>
                        <span>{qtde}</span>
                        <ButtonCount onClick={addQtde}><Plus weight="bold" /></ButtonCount>
                    </Counter>
                    <ButtonCart onClick={newPurchase}><ShoppingCartSimple weight="fill" size={22} /></ButtonCart>
                </div>
            </Buy>
        </CoffeeCard>
    )
}