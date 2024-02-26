import Navbar from './Navbar';

export default function Header() {
	return (
		<header>
			<div className='container mx-auto flex flex-col items-center justify-between p-8 max-w-[1440px]'>
				<Navbar />
				<div className='h-[85vh] w-full flex items-center justify-start '>
					<h1 className='text-3xl sm:text-5xl sm:w-[70%] md:text-6xl lg:text-7xl  text-white uppercase border-2 border-white p-5 lg:w-[50%]'>
						Immersive experiences that deliver
					</h1>
				</div>
			</div>
		</header>
	);
}
