import { useContext } from "react";
import { PurchaseContext } from "../../../../contexts/PurchaseContext";
import { Product } from "./Products";
import { ButtonPurchase, PurchaseContainer, ValueDescription, ValuePurchase } from "./styled";

export function Purchase() {

    const { listPurchase, subTotal, totalOrder } = useContext(PurchaseContext)

    return (
        <PurchaseContainer>
            {listPurchase.map(purchase => {
                return (
                    <Product key={purchase.id}
                        id={purchase.id}
                        coffee={purchase.coffee}
                        qtde={purchase.qtde}
                        value={purchase.value} />
                )
            })}
            {listPurchase.length === 0 && (
                <h2>O seu carrinho está vazio</h2>
            )}
            {listPurchase.length > 0 && (
                <ValuePurchase>

                    <ValueDescription>
                        <p>Total de itens</p>
                        <p>R$ {subTotal.toFixed(2)}</p>
                    </ValueDescription>
                    <ValueDescription>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </ValueDescription>
                    <ValueDescription>
                        <strong>Total</strong>
                        <strong>R$ {totalOrder.toFixed(2)}</strong>
                    </ValueDescription>
                </ValuePurchase>
            )}
            <ButtonPurchase disabled={!listPurchase.length} type="submit"><a>CONFIRMAR PEDIDO</a></ButtonPurchase>
            

        </PurchaseContainer>
    )
}