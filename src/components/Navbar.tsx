import React from 'react'
import {Button,Container, Nav, Navbar as NavBarBst } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useShoppingCard } from '../context/ShopingCardContect'

const Navbar = () => {

	const {openCard, cardQuantity} = useShoppingCard()

  return (
	<NavBarBst bg="dark" variant="dark" sticky='top'>
		<Container className='shadow-lg mb-3 mt-3' style={{ background: '#3c3c3c' , borderRadius: '10px'}}>
			<Nav className='me-auto mb-2 mt-2'>
				<Nav.Link  to='./' as={NavLink}>
					<h2>Home</h2>
				</Nav.Link>
				<Nav.Link to='./store' as={NavLink}>
					<h2>Store</h2>
				</Nav.Link>
				<Nav.Link to='./about' as={NavLink}>
					<h2>About</h2>
				</Nav.Link>
			</Nav>
				{cardQuantity > 0 && (
						<Button onClick={()=>openCard()} variant="dark" style={{ 
							width: '70px', 
							height: '70px', 
							borderRadius:'10px',
							position: 'relative',
							}}>
							<svg 
							version="1.1" id="Layer_1" 
							xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
							viewBox="0 0 300.005 300.005" 
							fill='white'
							>
								<g>
									<g>
										<g>
											<path d="M182.936,76.966h-0.002c0-18.516-15.066-33.58-33.58-33.58c-18.516,0-33.58,15.064-33.58,33.58v11.671h67.162V76.966z"/>
											<path d="M206.585,104.199h-8.09v10.911c2.498,2.179,4.113,5.351,4.113,8.93c0,6.57-5.325,11.897-11.894,11.897
												c-6.564,0-11.894-5.327-11.894-11.897c0-3.577,1.611-6.749,4.113-8.927v-10.914h-67.162v10.911c2.5,2.181,4.113,5.351,4.113,8.93
												c0,6.57-5.327,11.897-11.894,11.897c-6.57,0-11.894-5.327-11.894-11.897c0-3.577,1.613-6.751,4.113-8.93v-10.911h-8.09
												c-4.573,0-8.292,3.719-8.292,8.292v111.168c0,4.573,3.719,8.292,8.292,8.292h114.465c4.57,0,8.292-3.722,8.292-8.292V112.491
												C214.877,107.918,211.155,104.199,206.585,104.199z"/>
											<path d="M150,0C67.159,0,0.002,67.162,0.002,150S67.159,300.005,150,300.005S300.003,232.841,300.003,150S232.841,0,150,0z
												M230.439,223.659c0,13.152-10.704,23.854-23.854,23.854H92.121c-13.152,0-23.854-10.701-23.854-23.854V112.491
												c0-13.152,10.701-23.854,23.854-23.854h8.09V76.966c0-27.098,22.046-49.142,49.142-49.142s49.142,22.046,49.142,49.142v11.671
												h8.09c13.15,0,23.854,10.701,23.854,23.854V223.659z"/>
										</g>
									</g>
								</g>
							</svg>
							<div className='shopIcon'>{cardQuantity}</div>			
						</Button>
					)
				}
		</Container>
	</NavBarBst>
  )
}

export default Navbar