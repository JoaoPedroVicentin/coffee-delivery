import { CaretLeft, Coffee, Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { createContext, useContext, useState } from "react"
import { ButtonCart, ButtonCount, Tags, CoffeeCard, Span, Description, Buy, Counter } from "./style"
import { coffeeList } from "../.."

interface CoffeeProps{
    name: string,
    description: string,
    value: number,
    category: string[]
    img: string
}

export function CoffeeCardContainer({ name, description, value, category, img }: CoffeeProps) {

    return(
                <CoffeeCard>
                    <img src={img}/>
                    <Tags>
                        {category.map( tag => {
                            return(
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