import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../style/navbar.scss'


const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false)


	const location = useLocation()
	useEffect(()=>{
		setOpenNavbar(false)
	}, [location])

  return (
	<div className='container'>
		<div className='navbar'>
			<div className='logo'>
				<Link to="/" className='logo'>
					<div className='bear'></div>
				</Link>
			</div>
			<div className={openNavbar ? 'menu active': 'menu'}>
				<div className='menu__item'>
					<Link to="/" className='menu__item-link'>Home</Link>
					<Link to="/Projects" className='menu__item-link'>Projects</Link>
				</div>
				<div className={openNavbar ? 'menu__item on': 'menu__item'}>
					<Link to="/">
						<div className='githab' onClick={() => window.open("https://github.com/VitalikGrebenik")}></div>
					</Link>
					<Link to="/">
						<div className='telegram' onClick={() => window.open("https://t.me/VitalikGrebenik")}></div>
					</Link>
					<Link to="/">
						<div className='insta' onClick={() => window.open("https://instagram.com/grebenikvitalik")}></div>
					</Link>
				</div>
			</div>
			<div className={openNavbar ? 'burger active-burger': 'burger'} onClick={()=>{setOpenNavbar((prev)=>!prev)}}>
				<span></span>
			</div>
		</div>
	</div>
  )
}

export default Navbar