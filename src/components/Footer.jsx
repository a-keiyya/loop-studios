import { navlinks } from '../data';
import Logo from '../assets/images/logo.svg';
import { socialIcons } from '../data';

export default function Footer() {
	return (
		<footer className='bg-black'>
			<div className='container mx-auto mt-7 p-7 flex flex-col items-center justify-center gap-7 md:flex-row md:justify-between w-full'>
				<div className='gap-6 md:flex flex-col items-start justify-center'>
					<img src={Logo} alt='Logo' />
					<ul className='text-white text-center gap-9 flex-container'>
						{navlinks.map((item, index) => (
							<li
								key={index}
								className='cursor-pointer hover:underline underline-offset-4'
							>
								<a href={item}>{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col items-center justify-center gap-4 md:items-end'>
					<ul className='gap-4 flex md:items-end '>
						{socialIcons.map((icon, index) => (
							<li
								key={index}
								className='cursor-pointer hover:border-b'
							>
								<a
									href={icon.href}
									className='text-white'
								>
									<img src={icon.icon} alt='' />
								</a>
							</li>
						))}
					</ul>
					<p className='text-darkGray '>
						&copy; 2024 Loopstudios. All rights
						reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
