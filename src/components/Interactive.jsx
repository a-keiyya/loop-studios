import VrMobile from '../assets/images/mobile/image-interactive.jpg';
import VrDesktop from '../assets/images/desktop/image-interactive.jpg';

export default function Interactive() {
	return (
		<section>
			<div className='container mx-auto my-8 p-6 flex flex-col gap-6 max-w-[1440px] relative lg:p-12'>
				<img
					src={VrMobile}
					className='block md:hidden'
					alt='VR'
				/>
				<img
					src={VrDesktop}
					className='hidden md:block lg:w-2/3'
					alt='VR'
				/>
				<div className='flex flex-col items-center justify-center gap-4 bg-white lg:w-[420px] lg:absolute lg:bottom-1 lg:right-[5%] text-center md:p-7 xl:right-[14%]'>
					<h2 className='uppercase text-4xl'>
						The leader in <br /> interactive vr
					</h2>
					<p className='text-darkGray'>
						Founded in 2011, Loopstudios has been
						producing world-class virtual reality
						projects for some of the best
						companies around the globe. Our
						award-winning creations have
						transformed businesses through digital
						experiences that bind to their brand.
					</p>
				</div>
			</div>
		</section>
	);
}
