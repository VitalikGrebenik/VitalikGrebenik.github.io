import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useShoppingCard } from '../context/ShopingCardContect'

import storeItems from '../data/items.json'

type StoreItemsProps = {
	id: number,
	name: string,
	price: number,
	image: string
}

const StoreItems = ({id, name, price, image}: StoreItemsProps) => {

	const { getItemQuantity, increaseCardQuantity , decreaseCardQuantity, removeCart } = useShoppingCard()

	const chek = getItemQuantity(id)

  return (
	<Card>
		<Card.Img variant="top" src={image} 
		style={{ objectFit: "cover" }} 
		/>
		<Card.Body className='d-flex flex-column'>
			<Card.Title className='d-flex  align-items-baseline mb-2'>
				<span style={{color:'black', fontSize: '16px'}}>{name}</span>
			</Card.Title>
			<Card.Body className='d-flex justify-content-center align-items-baseline'>
				<span className='ms-2 text-muted' style={{color:'black', fontSize: '16px'}}>Цена: {price} руб.</span>
			</Card.Body>
			<div className='mt-auto'>
				{chek === 0 ?(
				<Button className='w-100' onClick={()=> increaseCardQuantity(id)}>+ Add to card</Button>): 
				<div className='d-flex flex-column align-items-center card__text' >
					<div className='d-flex justify-content-center align-items-center card__text'>
						<Button onClick={()=> decreaseCardQuantity(id)}>-</Button>
						<div className='card__text'>
							<span>
								{chek} in cart
							</span>
						</div>
						<Button onClick={()=> increaseCardQuantity(id)}>+</Button>
					</div>
					<Button variant='danger'className='w-100' onClick={()=> removeCart(id)}>delete</Button>
				</div>}
			</div>
		</Card.Body>

	</Card>
  )
}

export default StoreItems