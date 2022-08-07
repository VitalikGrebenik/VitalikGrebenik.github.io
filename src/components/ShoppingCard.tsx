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
	<Offcanvas show={isOpen} placement='end' responsive="lg" onHide={closeCard}>
		
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

			</Offcanvas.Body>
			<Offcanvas.Header>
			<div className='card__text mb-4'>
						Oбщая цена заказа : {cardItems.reduce((total, cardItem)=>{
							const item = StoreItems.find(i=> i.id === cardItem.id)
							return total + (item?.price || 0)*cardItem.quantity
						},0)}
			</div>
			</Offcanvas.Header>
		
	</Offcanvas>
  )
}

export default ShoppingCard