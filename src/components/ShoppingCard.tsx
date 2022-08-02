import {Offcanvas, Stack} from 'react-bootstrap';
import { useShoppingCard } from '../context/ShopingCardContect';
import CardItems from './CardItems';
import StoreItems from '../data/items.json'

type ShoppingCardProps={
	isOpen: boolean
}

const ShoppingCard = ({isOpen}:ShoppingCardProps) => {

	const {closeCard, cardItems} = useShoppingCard()

  return (
	<Offcanvas show={isOpen} placement='end' onHide={closeCard}>
		<Offcanvas.Header closeButton>
			<Offcanvas.Title className='card__text'>
				Shop
			</Offcanvas.Title>
		</Offcanvas.Header>
		<Offcanvas.Body>
			<Stack gap={3}>
				{cardItems.map(item=>(
					<CardItems key={item.id} {...item}/>
				))}
			</Stack>
			<div className='ms-auto fw-bold fs-5 card__text'>
					Cумма ${cardItems.reduce((total, cardItem)=>{
						const item = StoreItems.find(i=> i.id === cardItem.id)
						return total + (item?.price || 0)*cardItem.quantity
					},0)}
			</div>
			
		</Offcanvas.Body>
	</Offcanvas>
  )
}

export default ShoppingCard