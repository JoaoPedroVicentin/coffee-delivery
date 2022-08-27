import { Minus, Plus, Trash } from "phosphor-react";
import { ProductContainer ,InfosProduct, ValuesProduct, CounterProduct, ButtonCountProduct, DeleteProduct } from "./styled";


export function Product(){
    return(
        <ProductContainer>
            <img src="src\assets\coffees\Expresso.svg"/>
            <InfosProduct>
                <p>Expresso Tradicional</p>
                <div>
                    <CounterProduct>
                        <ButtonCountProduct><Minus size={14}/></ButtonCountProduct>
                            <span>0</span>
                        <ButtonCountProduct><Plus size={14}/></ButtonCountProduct>
                    </CounterProduct>
                    <DeleteProduct>
                        <Trash color="#8047F8" size={14}/> REMOVER
                    </DeleteProduct>
                </div>
            </InfosProduct>
            <ValuesProduct>R$ 9,90</ValuesProduct>
        </ProductContainer>
    )
}