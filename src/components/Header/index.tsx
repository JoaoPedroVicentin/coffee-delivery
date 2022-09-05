import { Action, Cart, HeaderContainer, Location } from "./styles";
import logoCoffeeDelivery from "../../assets/logoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { PurchaseContext } from "../../contexts/PurchaseContext";
import { NavLink } from "react-router-dom";

export function Header() {

    const { listPurchase } = useContext(PurchaseContext)

    return(
        <HeaderContainer>
            <NavLink to={"/"}>
                <img src={logoCoffeeDelivery} alt=""/>
            </NavLink>
            <Action>
                <Location>
                    <MapPin weight="fill" color='#8047f8' size={22}/>
                    <p>Assis, SP</p>
                </Location>
                <NavLink to="/checkout">
                <Cart>
                    {listPurchase.length >= 1 && <span>{listPurchase.length}</span>}
                    <ShoppingCart weight="fill" size={22}/>
                </Cart>
                </NavLink>
            </Action>
        </HeaderContainer>
    )
}