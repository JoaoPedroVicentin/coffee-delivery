import { createContext, FormEvent, ReactNode, useEffect, useMemo, useState } from "react"
import {v4 as uuidv4} from 'uuid';

export interface Coffee{
    id: string,
    name: string,
    description: string,
    value: number,
    category: string[]
    img: string
}

 interface Purchase {
    id:string
    coffee: Coffee,
    qtde: number
    value: number
}

interface PurchaseContextType{
    coffeeList: Coffee[],
    handleNewPurchase: (id: string, qtde: number) => void
    listPurchase: Purchase[],
    addQtdeCoffee: (id:string) => void,
    dropQtdeCoffee: (id:string) => void,
    subTotal: number,
    totalOrder: number,
    deletePurchase: (id:string) => void
}

interface PurchaseContextProvidersProp{
    children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({children}: PurchaseContextProvidersProp){
    const [listPurchase, setListPurchase] = useState<Purchase[]>([])
    

    function handleNewPurchase(id: string, qtde:number){
        {coffeeList.map(coffee => {
            if(coffee.id === id){
                setListPurchase((state) => [...state, 
                    {
                        id:uuidv4(),
                        coffee: coffee,
                        qtde: qtde,
                        value: coffee.value * qtde
                    }
                ])
            }
        })}
    }

    function addQtdeCoffee(id:string){
        const updateQtde = listPurchase.map((purchase) => {
            if(purchase.id === id){
                const qtde = purchase.qtde + 1
                const value = purchase.coffee.value * qtde
                return{ ...purchase, qtde, value }
            } return purchase
        }) 
        setListPurchase(updateQtde)
    }

    function dropQtdeCoffee(id:string){
        const updateQtde = listPurchase.map((purchase) => {
            if(purchase.id === id){
                if(purchase.qtde === 1){
                    return purchase
                }
                const qtde = purchase.qtde - 1
                const value = purchase.coffee.value * qtde
                return{ ...purchase, qtde, value }
            } return purchase
        }) 
        setListPurchase(updateQtde)
    }

    function deletePurchase(id: string){
        const listWithoutPurchase = listPurchase.filter(purchase => {
            return purchase.id != id
        }) 
        setListPurchase(listWithoutPurchase)
    }

    const subTotal = useMemo(() => {
        const value = listPurchase.reduce((acc, curr) => {
          const temp = acc + curr.value
          return temp
        }, 0)
    
        return value
      }, [listPurchase])
    
      const totalOrder = subTotal + 3.50

    const coffeeList = [
        {
            id: uuidv4(),
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            value: 9.90,
            category: ['TRADICIONAL'],
            img: 'src/assets/coffees/Expresso.svg',
        },
        {
            id: uuidv4(),
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            value: 9.90,
            category: ['TRADICIONAL'],
            img: 'src/assets/coffees/Americano.svg',
        },
        {
            id: uuidv4(),
            name: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            value: 9.90,
            category: ['TRADICIONAL'],
            img: 'src/assets/coffees/ExpressoCremoso.svg'
        },
        {
            id: uuidv4(),
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            value: 9.90,
            category: ['TRADICIONAL', 'GELADO'],
            img: 'src/assets/coffees/CaféGelado.svg'
        },
        {
            id: '5',
            name: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            value: 9.90,
            category: ['TRADICIONAL', 'COM LEITE'],
            img: 'src/assets/coffees/CaféComLeite.svg',
        },
        {
            id: uuidv4(),
            name: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e expuma cremosa',
            value: 9.90,
            category: ['TRADICIONAL', 'COM LEITE'],
            img: 'src/assets/coffees/Latte.svg',
        },
        {
            id: uuidv4(),
            name: 'Capuccino',
            description: 'Bebida com canela feita de doses igauis de café, leite e espuma',
            value: 9.90,
            category: ['TRADICIONAL', 'COM LEITE'],
            img: 'src/assets/coffees/Capuccino.svg',
        },
        {
            id: uuidv4(),
            name: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            value: 9.90,
            category: ['TRADICIONAL', 'COM LEITE'],
            img: 'src/assets/coffees/Macchiato.svg',
        },
        {
            id: uuidv4(),
            name: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            value: 9.90,
            category: ['TRADICIONAL', 'COM LEITE'],
            img: 'src/assets/coffees/Mocaccino.svg',
        },
        {
            id: uuidv4(),
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            value: 9.90,
            category: ['ESPECIAL', 'COM LEITE'],
            img: 'src/assets/coffees/ChocolateQuente.svg',
        },
        {
            id: uuidv4(),
            name: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            value: 9.90,
            category: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
            img: 'src/assets/coffees/Cubano.svg'
        },
        {
            id: uuidv4(),
            name: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            value: 9.90,
            category: ['ESPECIAL'],
            img: 'src/assets/coffees/Havaiano.svg',
        },
        {
            id: uuidv4(),
            name: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            value: 9.90,
            category: ['ESPECIAL'],
            img: 'src/assets/coffees/Árabe.svg',
        },
        {
            id: uuidv4(),
            name: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantily',
            value: 9.90,
            category: ['ESPECIAL', 'ALCOÓLICO'],
            img: 'src/assets/coffees/Irlandês.svg',
        }
    ]

    return(
        <PurchaseContext.Provider value={{ coffeeList, handleNewPurchase, listPurchase, addQtdeCoffee, dropQtdeCoffee, subTotal, totalOrder, deletePurchase }}>
            {children}
        </PurchaseContext.Provider>
    )
}