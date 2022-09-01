import { Cart, Clock, CoffeeIcon, CoffeeList, HomeContainer, Image, Infos, Intro, Items, List, Pack, Title } from "./styles";
import imageCoffee from "../../assets/imageCoffee.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCardContainer } from "./components/CoffeeCard";
import { useContext} from "react";
import { PurchaseContext } from "../../contexts/PurchaseContext";


export function Home(){

    const {coffeeList} = useContext(PurchaseContext)

    return(
        <HomeContainer>
            <Intro>
                <Infos>
                    <Title>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Title>
                    <Items>
                        <p><Cart><ShoppingCart weight="fill"/></Cart>Compra simples e segura</p>
                        <p><Pack><Package weight="fill"/></Pack>Embalagem mantém o café intacto</p>
                        <p><Clock><Timer weight="fill"/></Clock>Entrega rápida e rastreada</p>
                        <p><CoffeeIcon><Coffee weight="fill"/></CoffeeIcon>O café chega fresquinho até você</p>
                    </Items>
                </Infos>
                <Image>
                    <img src={imageCoffee}/>
                </Image>
            </Intro>

            <CoffeeList>
                <header>
                <h1>Nossos Cafés</h1>
                </header>
                <List>
                    {coffeeList.map(coffee => {
                        return (
                            <CoffeeCardContainer key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                description={coffee.description}
                                category={coffee.category}
                                value={coffee.value}
                                img={coffee.img} />
                        )
                    })}
                </List>
            </CoffeeList>
        </HomeContainer>
    )
}