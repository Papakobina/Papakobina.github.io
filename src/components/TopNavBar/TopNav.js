import React from "react";
import { useRef } from "react";
import logo from './Logo.jpg';
import { FaBars, FaTimes } from "react-icons/fa";
import './TopNav.css'


    
function TopNavBarComponent(){
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
            <div className="Logo">
				<div className="logoimage">
                <img src={logo} alt='logo'  height='100' width='100'/>
				</div>
				<div className="logoTitle">
                	<h1>Zec Supplies Inc</h1>
				</div>
            </div>
            <div className="links">
			<nav ref={navRef}>
				<a href="/#" className="home">Home</a>
				<a href="/blog" className="Blog">Products</a>
				<a href="/contact" className="Contact">Contact</a>
				{/* <a href="/about" className="About">About</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            </div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default TopNavBarComponent;