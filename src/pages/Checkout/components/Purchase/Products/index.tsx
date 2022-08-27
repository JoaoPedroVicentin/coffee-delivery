import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { Coffee, PurchaseContext } from "../../../../../contexts/PurchaseContext";
import { ProductContainer ,InfosProduct, ValuesProduct, CounterProduct, ButtonCountProduct, DeleteProduct } from "./styled";

interface PurchaseProps {
    coffee: Coffee,
    qtde: number,
    value: number
}

export function Product({coffee, qtde, value}:PurchaseProps){


    return(
        <ProductContainer>
            <img src={coffee.img}/>
            <InfosProduct>
                <p>{coffee.name}</p>
                <div>
                    <CounterProduct>
                        <ButtonCountProduct><Minus size={14}/></ButtonCountProduct>
                            <span>{qtde}</span>
                        <ButtonCountProduct><Plus size={14}/></ButtonCountProduct>
                    </CounterProduct>
                    <DeleteProduct>
                        <Trash color="#8047F8" size={14}/> REMOVER
                    </DeleteProduct>
                </div>
            </InfosProduct>
            <ValuesProduct>R$ {value}</ValuesProduct>
        </ProductContainer>
    )
}