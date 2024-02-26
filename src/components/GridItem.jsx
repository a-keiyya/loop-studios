export default function GridItem({
	mobileImage,
	desktopImage,
	title,
}) {
	return (
		<div className='grid-item hover:text-black'>
			<div className='grid-item-overlay'></div>
			<img
				src={mobileImage}
				className='lg:hidden'
				alt={title}
			/>
			<img
				src={desktopImage}
				className='hidden lg:block'
				alt={title}
			/>
			<h3 className='uppercase text-2xl absolute bottom-2 left-4 w-20 z-20'>
				{title}
			</h3>
		</div>
	);
}
