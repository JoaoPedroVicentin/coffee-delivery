import { Product } from "./Products";
import { ButtonPurchase, PurchaseContainer, ValueDescription, ValuePurchase} from "./styled";

export function Purchase() {
    return(
        <PurchaseContainer>
            <Product/>
            <Product/>
            <ValuePurchase>
                <ValueDescription>
                    <p>Total de itens</p>
                    <p>R$ 29,70</p>    
                </ValueDescription>
                <ValueDescription>
                    <p>Entrega</p>
                    <p>R$ 3,50</p>    
                </ValueDescription>
                <ValueDescription>
                    <strong>Total</strong>
                    <strong>R$ 33,20</strong>    
                </ValueDescription>
            </ValuePurchase>
            <ButtonPurchase><a href="/success">CONFIRMAR PEDIDO</a></ButtonPurchase>
        </PurchaseContainer>
    )
}