import {createContext, useContext, ReactNode, useState} from 'react'
import ShoppingCard from '../components/ShoppingCard'
import { useLocalStorege } from '../hooks/useLocalStorege'

type ShoppingCardProviderProps={
	children: ReactNode,
}

type CartItem={
	id: number,
	quantity: number
}


type ShoppingCardContext = {
	openCard: ()=> void
	closeCard: ()=> void
	getItemQuantity: (id: number) => number,
	increaseCardQuantity: (id: number) => void,
	decreaseCardQuantity: (id: number) => void,
	removeCart: (id: number) => void
	cardQuantity : number
	cardItems: CartItem[]
}

const ShoppingCardContext = createContext({} as ShoppingCardContext)

export function useShoppingCard(){
	return useContext(ShoppingCardContext)
}


export function ShoppingCardProvider({children}:
	ShoppingCardProviderProps){
		const [isOpen, setIsOpen] = useState(false)
		const[cardItems, setCardItems] = useLocalStorege<CartItem[]>('shopping-cart',[])

		const cardQuantity = cardItems.reduce((quantity, item)=>
			item.quantity + quantity, 0
		)
		const openCard = () => setIsOpen(true)
		const closeCard = () => setIsOpen(false)


		function getItemQuantity(id: number){
			return cardItems.find(item=>item.id === id)?.quantity || 0
		}

		function increaseCardQuantity(id: number){
			setCardItems(currItem=>{
				if(currItem.find(item=> item.id === id )==null){
					return [...currItem, {id, quantity: 1}]
				} else{
					return currItem.map(item=>{
						if(item.id === id){
							return {...item, quantity: item.quantity + 1}
						} else {
							return item
						}
					})
				}
			})
		}

		function decreaseCardQuantity(id: number){
			setCardItems(currItem=>{
				if(currItem.find(item=> item.id === id )?.quantity === 1){
					return currItem.filter(item =>item.id !== id)
				} else{
					return currItem.map(item=>{
						if(item.id === id){
							return {...item, quantity: item.quantity - 1}
						} else {
							return item
						}
					})
				}
			})
		}

		function removeCart (id: number){
			setCardItems(currItem=>{
				return currItem.filter(item =>item.id !== id)
			})
		}



		

	return (
		<ShoppingCardContext.Provider value={{ getItemQuantity, 
		increaseCardQuantity , 
		decreaseCardQuantity, 
		removeCart,
		cardItems,
		cardQuantity,
		openCard, 
		closeCard
		}}>
		{children}
		<ShoppingCard isOpen={isOpen}/>
		</ShoppingCardContext.Provider>)
}