import React from 'react'
import {Row, Col} from 'react-bootstrap'
import StoreItems from '../components/StoreItems'

import storeItems from '../data/items.json'

const Store = () => {
  return (
	<>
		<Row lg={4} md={3} xs={2}>
			{
				storeItems.map(item=>(
					<Col className='mb-4' key={item.id}><StoreItems {...item}/></Col>
				))
			}
		</Row>
	</>
  )
}

export default Store