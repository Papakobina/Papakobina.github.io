import React from "react";
import { useRef } from "react";
import logo from './Logo.png';
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
                <img src={logo} alt='logo'  height='45' width='100'/>
				</div>
				<div className="logoTitle">
                	<h1>Volta Energy</h1>
				</div>
            </div>
            <div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Blog</a>
				<a href="/#">Contact</a>
				<a href="/#">About</a>
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