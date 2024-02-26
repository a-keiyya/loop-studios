import Button from './Button';
import GridItem from './GridItem';
import { gridItems } from '../data';

export default function Creations() {
	return (
		<section>
			<div className='container mx-auto p-6 my-7 flex flex-col gap-6 max-w-[1440px]'>
				<div className='flex items-center justify-center w-full md:justify-between'>
					<h2 className='uppercase text-4xl '>
						Our creations
					</h2>
					<button className='uppercase tracking-widest border border-black py-2 px-5 hover:bg-black hover:text-white transition-all ease-in-out duration-200 hidden md:block'>
						See all
					</button>
				</div>
				<div className='grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:w-[90%] md:gap-6 mx-auto'>
					{gridItems.map((item, index) => (
						<GridItem
							key={index}
							title={item.title}
							mobileImage={item.mobileImage}
							desktopImage={item.desktopImage}
						/>
					))}
				</div>
				<button className='uppercase tracking-widest border border-black py-2 px-5 hover:bg-black hover:text-white transition-all ease-in-out duration-200 md:hidden'>
					See all
				</button>
			</div>
		</section>
	);
}
