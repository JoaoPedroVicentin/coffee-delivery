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

    const {addQtdeCoffee, dropQtdeCoffee, deletePurchase} = useContext(PurchaseContext)

    function handleAddQtde(){
        addQtdeCoffee(id)
    }

    function handleDropQtde(){
        dropQtdeCoffee(id)
    }

    function handleDelete(){
        deletePurchase(id)
    }

    return(
        <ProductContainer>
            <img src={coffee.img}/>
            <InfosProduct>
                <p>{coffee.name}</p>
                <div>
                    <CounterProduct>
                        <ButtonCountProduct type="button" onClick={handleDropQtde}><Minus size={14}/></ButtonCountProduct>
                            <span>{qtde}</span>
                        <ButtonCountProduct type="button" onClick={handleAddQtde}><Plus size={14}/></ButtonCountProduct>
                    </CounterProduct>
                    <DeleteProduct onClick={handleDelete}>
                        <Trash color="#8047F8" size={14}/> REMOVER
                    </DeleteProduct>
                </div>
            </InfosProduct>
            <ValuesProduct>R$ {value.toFixed(2)}</ValuesProduct>
        </ProductContainer>
    )
}