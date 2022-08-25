import { Cart, Clock, CoffeeIcon, CoffeeList, Filter, HomeContainer, Icon, Image, Infos, Intro, Items, List, Pack, Title } from "./styles";
import imageCoffee from "../../assets/imageCoffee.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCardContainer } from "./components/CoffeeCard";

interface Coffee{
    id: number,
    name: string,
    description: string,
    value: number,
    category: string[]
    img: string
}

export const coffeeList: Coffee[] = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: 'src\assets\coffees\Expresso.svg'
    },
    {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: 'src\assets\coffees\Americano.svg'
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: 'src\assets\coffees\ExpressoCremoso.svg'
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        value: 9.90,
        category: ['TRADICIONAL', 'GELADO'],
        img: 'src\assets\coffees\CaféGelado.svg'
    },
    {
        id: 5,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: 'src\assets\coffees\CaféComLeite.svg'
    },
    {
        id: 6,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e expuma cremosa',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: 'src\assets\coffees\Latte.svg'
    }
]

export function Home(){

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
                <Filter>
                    <a href="#">TRADICIONAL</a>
                    <a href="#">ESPECIAL</a>
                    <a href="#">COM LEITE</a>
                    <a href="#">ALCOÓLICO</a>
                    <a href="#">GELADO</a>
                </Filter>
                </header>
                <List>
                    {coffeeList.map(coffee => {
                        return (
                            <CoffeeCardContainer key={coffee.id} 
                            name={coffee.name} 
                            description={coffee.description} 
                            category={coffee.category}
                            value={coffee.value}
                            img={coffee.img}/>
                        )
                    })}
                </List>
            </CoffeeList>
        </HomeContainer>
    )
}