import { Image, Infos, Intro, Items, Title } from "./styles";
import imageCoffee from "../../assets/imageCoffee.svg"

export function Home(){
    return(
        <Intro>
            <Infos>
                <Title>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </Title>
                <Items>
                    <p>Compra simples e segura</p>
                    <p>Embalagem mantém o café intacto</p>
                    <p>Entrega rápida e rastreada</p>
                    <p>O café chega fresquinho até você</p>
                </Items>
            </Infos>
            <Image>
                <img src={imageCoffee}/>
            </Image>
        </Intro>
    )
}