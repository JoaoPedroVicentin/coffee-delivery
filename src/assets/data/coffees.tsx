import expressoTradicional from "../coffees/Expresso.svg";
import expressoAmericano from "../coffees/Americano.svg";
import expressoCremoso from "../coffees/ExpressoCremoso.svg";
import expressoGelado from "../coffees/CaféGelado.svg";
import cafeComLeite from "../coffees/CaféComLeite.svg";
import latte from "../coffees/Latte.svg";
import capuccino from "../coffees/Capuccino.svg";
import macchiato from "../coffees/Macchiato.svg";
import mocaccino from "../coffees/Mocaccino.svg";
import chocolateQuente from "../coffees/ChocolateQuente.svg";
import cubano from "../coffees/Cubano.svg";
import havaiano from "../coffees/Havaiano.svg";
import arabe from "../coffees/Árabe.svg";
import irlandes from "../coffees/Irlandês.svg";

export const coffeeList = [
    {
        id: '1',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: expressoTradicional,
    },
    {
        id: '2',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: expressoAmericano
    },
    {
        id: '3',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        value: 9.90,
        category: ['TRADICIONAL'],
        img: expressoCremoso
    },
    {
        id: '4',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        value: 9.90,
        category: ['TRADICIONAL', 'GELADO'],
        img: expressoGelado
    },
    {
        id: '5',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: cafeComLeite
    },
    {
        id: '6',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e expuma cremosa',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: latte
    },
    {
        id: '7',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses igauis de café, leite e espuma',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: capuccino
    },
    {
        id: '8',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: macchiato
    },
    {
        id: '9',
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        value: 9.90,
        category: ['TRADICIONAL', 'COM LEITE'],
        img: mocaccino
    },
    {
        id: '10',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        value: 9.90,
        category: ['ESPECIAL', 'COM LEITE'],
        img: chocolateQuente
    },
    {
        id: '11',
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        value: 9.90,
        category: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        img: cubano
    },
    {
        id: '12',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        value: 9.90,
        category: ['ESPECIAL'],
        img: havaiano
    },
    {
        id: '13',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        value: 9.90,
        category: ['ESPECIAL'],
        img: arabe
    },
    {
        id: '14',
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantily',
        value: 9.90,
        category: ['ESPECIAL', 'ALCOÓLICO'],
        img: irlandes
    }
]