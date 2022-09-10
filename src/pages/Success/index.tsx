import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import imageSuccess from '../../assets/imageSuccess.svg'
import { PurchaseContext } from '../../contexts/PurchaseContext'
import { MapIcon, TimerIcon, DollarIcon, ConfirmPurchase, SuccessContainer, ConfirmHeader, ConfirmBody, ConfirmInfo } from './styles'

export function Success() {

    const {purchaseData} = useContext(PurchaseContext)

    return(
        <SuccessContainer>
            <ConfirmPurchase>
                <ConfirmHeader>
                    <h1>Uhu! Pedido Confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </ConfirmHeader>
                <ConfirmBody>
                    <ConfirmInfo>
                        <MapIcon>
                            <MapPin weight='fill'/>
                        </MapIcon>
                        <span>
                            <p>Entrega em <strong>{purchaseData.rua}, {purchaseData.numero}</strong></p>
                            <p>{purchaseData.bairro} - {purchaseData.cidade}, {purchaseData.uf}</p>
                        </span>
                    </ConfirmInfo>
                    <ConfirmInfo>
                        <TimerIcon>
                            <Timer weight='fill'/>
                        </TimerIcon>
                        <span>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </span>    
                    </ConfirmInfo>
                    <ConfirmInfo>
                        <DollarIcon>
                            <CurrencyDollar/>
                        </DollarIcon>
                        <span>
                            <p>Pagamento na entrega</p>
                            <strong>{purchaseData.payment}</strong>
                        </span>
                    </ConfirmInfo>
                </ConfirmBody>
            </ConfirmPurchase>
            <img src={imageSuccess} alt=""/>
        </SuccessContainer>
    )
}
