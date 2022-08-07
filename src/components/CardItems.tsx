import React from 'react'
import { useShoppingCard } from '../context/ShopingCardContect'
import StoreItems from '../data/items.json'

import {Stack, Button} from 'react-bootstrap';

type CardItemsProps ={
	id: number,
	quantity: number
}

const CardItems = ({id, quantity}:CardItemsProps) => {

	const {removeCart} = useShoppingCard()

	const item = StoreItems.find(i=>i.id===id)
	if(item == null) return null

  return (
	<Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
		<img src={item.image} alt="img" style={{width: '120px', objectFit: 'cover'}}/>
		<div className='me-auto card__text'>
			<div className='card__text' style={{fontSize: '18px'}}>
				{item.name}{quantity>1&&<span className='text-muted' style={{fontSize: '20px',padding:'0 10px'}}>x{quantity}</span>}
			</div>
			<div className='text-muted' style={{fontSize: '25px'}}>
				Цена: {item.price}
			</div>
			<div className='card__text' style={{fontSize: '15px'}}>
				Oбщая цена: {item.price*quantity}
			</div>
		</div>
		<Button variant='outline-danger' size='lg' onClick={()=>removeCart(item.id)}>&times;</Button>
	</Stack>
  )
}

export default CardItems