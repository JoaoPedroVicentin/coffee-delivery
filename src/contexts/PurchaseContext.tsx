import { createContext, ReactNode, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import { coffeeList } from "../assets/data/coffees";

export interface Coffee{
    id: string,
    name: string,
    description: string,
    value: number,
    category: string[]
    img: string
}

 interface FormPurchaseData {
    cep: string,
    rua: string,
    numero: string,
    complemento?: string,
    bairro: string,
    cidade: string,
    uf: string
    payment: string
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
    createPurchaseData: (data: FormPurchaseData) => void,
    purchaseData: FormPurchaseData
}

interface PurchaseContextProvidersProp{
    children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({children}: PurchaseContextProvidersProp){
    const [listPurchase, setListPurchase] = useState<Purchase[]>([])
    const [purchaseData, setPurchaseData] = useState<FormPurchaseData>({cep: '', rua: '', bairro: '', cidade: '', numero: '', uf: '', payment: ''})
    
    const navigate = useNavigate()

    function createPurchaseData(data: FormPurchaseData){
        const newPurchaseData: FormPurchaseData = {
            cep: data.cep,
            rua: data.rua,
            bairro: data.bairro,
            cidade: data.cidade,
            numero: data.numero,
            uf: data.uf,
            complemento: data.complemento,
            payment: data.payment
        }
        setPurchaseData(newPurchaseData)
        navigate("/success", {
            state: data,
        })
    }

    function handleNewPurchase(id: string, qtde:number){
        const coffeeAlreadyExistsInList = listPurchase.find((purchase) => purchase.coffee.id === id)

        if (!coffeeAlreadyExistsInList){
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
        } else {
            addQtdeCoffee(coffeeAlreadyExistsInList.id, qtde)
        }
    }

    function addQtdeCoffee(id:string, quantity?:number){
        let quantityTotal = 1
        if(quantity){quantityTotal = quantity}
        const updateQtde = listPurchase.map((purchase) => {
            if(purchase.id === id){
                const qtde = purchase.qtde + quantityTotal
                const value = purchase.coffee.value * qtde
                return{ ...purchase, qtde, value }
            } return purchase
        }) 
        console.log(updateQtde)
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
        console.log(updateQtde)
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

    return(
        <PurchaseContext.Provider value={{ coffeeList, handleNewPurchase, listPurchase, addQtdeCoffee,
        dropQtdeCoffee, subTotal, totalOrder, deletePurchase, createPurchaseData, purchaseData }}>
            {children}
        </PurchaseContext.Provider>
    )
}