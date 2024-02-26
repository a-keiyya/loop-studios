import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Hamburger from '../assets/images/icon-hamburger.svg';
import CloseIcon from '../assets/images/icon-close.svg';
import { navlinks } from '../data';

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className='flex items-center justify-between w-full text-white '>
			{/* LOGO */}
			<img
				src={Logo}
				alt='Logo'
				className='z-10'
			/>
			<ul className='hidden space-x-6 md:flex'>
				{navlinks.map((link, index) => (
					<li
						key={index}
						className='cursor-pointer hover:border-b-2 '
					>
						<a href={link}>{link}</a>
					</li>
				))}
			</ul>

			{/* HAMBURGER & CLOSE ICON */}
			<div
				className='md:hidden cursor-pointer z-10'
				onClick={() => setNavOpen(!navOpen)}
			>
				{!navOpen ? (
					<img
						src={Hamburger}
						alt='hamburger icon'
					/>
				) : (
					<img src={CloseIcon} alt='close icon' />
				)}
			</div>

			{/* MOBILE MENU */}
			{navOpen && (
				<div className='absolute bg-black h-screen w-screen top-0 left-0 '>
					<ul className='h-full w-full flex flex-col items-start justify-center space-y-7 p-7'>
						{navlinks.map((link, index) => (
							<li
								key={index}
								className='cursor-pointer hover:border-b-2 uppercase text-xl'
							>
								<a href={link}>{link}</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
