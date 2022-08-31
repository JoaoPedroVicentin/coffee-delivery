import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageSuccess from '../../assets/imageSuccess.svg'
import { MapIcon, TimerIcon, DollarIcon, ConfirmPurchase, SuccessContainer, ConfirmHeader, ConfirmBody, ConfirmInfo } from './styles'

export function Success() {
    return(
        <SuccessContainer>
            <ConfirmPurchase>
                <ConfirmHeader>
                    <h1>Uhu! Pedido Confirmado0</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </ConfirmHeader>
                <ConfirmBody>
                    <ConfirmInfo>
                        <MapIcon>
                            <MapPin weight='fill'/>
                        </MapIcon>
                        <span>
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                            <p>Farrapos - Porto Alegre, RS</p>
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
                            <strong>Cartão de Crédito</strong>
                        </span>
                    </ConfirmInfo>
                </ConfirmBody>
            </ConfirmPurchase>
            <img src={imageSuccess} alt=""/>
        </SuccessContainer>
    )
}
