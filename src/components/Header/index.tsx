import { Action, Cart, HeaderContainer, Location } from "./styles";
import logoCoffeeDelivery from "../../assets/logoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt=""/>
            <Action>
                <Location>
                    <MapPin weight="fill" color='#8047f8' size={22}/>
                    <p>Assis, SP</p>
                </Location>
                <Cart href="/checkout">
                    <ShoppingCart weight="fill" size={22}/>
                </Cart>
            </Action>
        </HeaderContainer>
    )
}