import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { Coffee, PurchaseContext } from "../../../../../contexts/PurchaseContext";
import { ProductContainer ,InfosProduct, ValuesProduct, CounterProduct, ButtonCountProduct, DeleteProduct } from "./styled";

interface PurchaseProps {
    id: string
    coffee: Coffee,
    qtde: number,
    value: number
}

export function Product({id, coffee, qtde, value}:PurchaseProps){

    const {addQtdeCoffee, dropQtdeCoffee} = useContext(PurchaseContext)

    function handleAddQtde(){
        addQtdeCoffee(id)
    }

    function handleDropQtde(){
        dropQtdeCoffee(id)
    }

    return(
        <ProductContainer>
            <img src={coffee.img}/>
            <InfosProduct>
                <p>{coffee.name}</p>
                <div>
                    <CounterProduct>
                        <ButtonCountProduct onClick={handleAddQtde}><Minus size={14}/></ButtonCountProduct>
                            <span>{qtde}</span>
                        <ButtonCountProduct onClick={handleDropQtde}><Plus size={14}/></ButtonCountProduct>
                    </CounterProduct>
                    <DeleteProduct>
                        <Trash color="#8047F8" size={14}/> REMOVER
                    </DeleteProduct>
                </div>
            </InfosProduct>
            <ValuesProduct>R$ {value.toFixed(2)}</ValuesProduct>
        </ProductContainer>
    )
}