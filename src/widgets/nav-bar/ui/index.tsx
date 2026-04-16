import { routes } from '@config/routes.config';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

export const Navbar: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<nav className='flex flex-col inset-x-0 w-full sticky top-0 z-30 bg-background border-b border-b-border'>
			{children}
		</nav>
	);
};

export const NavbarInner: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className='max-w-[1350px] w-full pt-3 pb-1 md:pb-2 flex gap-4 mx-auto items-center px-4 lg:px-6 justify-between md:min-h-[68px]'>
			{children}
		</div>
	);
};

export const NavbarLogo: React.FC = () => {
	return (
		<a
			href={routes.home}
			className='w-fit shrink-0 h-10 flex items-center'
		>
			<svg
				viewBox='0 0 911 168'
				fill='none'
				role='img'
				aria-labelledby='polymarket-logo-title'
				xmlns='http://www.w3.org/2000/svg'
				className='max-[400px]:w-auto h-6.5 w-auto cursor-pointer [&amp;_path]:fill-text-primary px-2.5'
			>
				<title id='polymarket-logo-title'>Polymarket clone</title>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M395.676 132.183V29.2346H378.683V132.183H395.676ZM228.862 96.1278V132.186H211.188V34.6007H249.334C256.841 34.6007 263.335 35.93 268.817 38.5885C274.299 41.247 278.474 44.9332 281.34 49.6475C284.206 54.3613 285.639 59.7346 285.639 65.7666C285.639 72.0667 284.217 77.4955 281.374 82.053C278.53 86.6104 274.391 90.0957 268.954 92.5088C263.517 94.9218 256.978 96.1278 249.334 96.1278H228.862ZM228.861 82.1873H249.334C255.658 82.1873 260.332 80.7347 263.358 77.8307C266.383 74.9261 267.896 70.9493 267.896 65.9003C267.896 62.7729 267.236 59.9019 265.917 57.2879C264.598 54.674 262.55 52.5741 259.775 50.9878C257 49.4015 253.52 48.6083 249.334 48.6083H228.861V82.1873ZM329.499 133.53C336.551 133.53 342.67 131.944 347.856 128.772C353.043 125.599 357.013 121.22 359.765 115.635C362.517 110.05 363.893 103.727 363.893 96.6673V95.2599C363.893 88.2002 362.517 81.8775 359.765 76.2924C357.013 70.7073 353.032 66.3172 347.823 63.122C342.613 59.9273 336.46 58.33 329.363 58.33C322.357 58.33 316.26 59.9273 311.074 63.122C305.888 66.3172 301.919 70.7073 299.166 76.2924C296.414 81.8775 295.037 88.2002 295.037 95.2599V96.6673C295.037 103.727 296.414 110.05 299.166 115.635C301.919 121.22 305.899 125.599 311.108 128.772C316.317 131.944 322.448 133.53 329.499 133.53ZM316.397 113.559C319.309 117.938 323.676 120.127 329.5 120.127C333.366 120.127 336.608 119.088 339.224 117.01C341.84 114.933 343.774 112.129 345.025 108.599C346.276 105.069 346.901 101.093 346.901 96.6691V95.2617C346.901 90.8825 346.276 86.9173 345.025 83.3649C343.774 79.8125 341.829 76.9866 339.19 74.8862C336.551 72.7863 333.276 71.7361 329.363 71.7361C325.496 71.7361 322.266 72.7863 319.673 74.8862C317.08 76.9866 315.157 79.8125 313.906 83.3649C312.655 86.9173 312.029 90.8825 312.029 95.2617V96.6691C312.029 103.55 313.486 109.18 316.397 113.559ZM435.067 156.07C431.586 159.667 426.616 161.465 420.155 161.465C417.926 161.465 415.22 161.063 412.035 160.259V147.457L415.174 147.592C419.223 147.592 422.305 146.888 424.421 145.48C426.536 144.073 428.208 141.604 429.437 138.074L431.757 131.908L405.825 59.657H424.182L439.536 108.316L454.413 59.657H472.497L443.085 143.168C441.22 148.172 438.547 152.473 435.067 156.07ZM498.752 132.19V79.7777C501.482 74.5498 506.099 71.9359 512.605 71.9359C516.882 71.9359 520.121 72.9635 522.329 75.0188C524.537 77.074 525.641 80.5373 525.641 85.4074V132.19H542.632V83.8662L542.563 82.3245C543.562 79.1519 545.259 76.6277 547.647 74.7507C550.036 72.8743 553.005 71.9359 556.555 71.9359C560.874 71.9359 564.116 72.9079 566.278 74.8514C568.44 76.795 569.521 80.2467 569.521 85.2065V132.19H586.512V85.2737C586.512 75.9347 584.443 69.1094 580.3 64.798C576.162 60.486 570.177 58.33 562.356 58.33C557.392 58.33 553.005 59.3021 549.181 61.2456C545.364 63.1891 542.197 65.9038 539.698 69.3891C537.833 65.6358 535.171 62.8539 531.714 61.0447C528.256 59.2349 524.206 58.33 519.566 58.33C515.016 58.33 510.956 59.1006 507.385 60.6423C503.813 62.1841 500.777 64.4067 498.275 67.3112L497.728 59.6703H481.76V132.19H498.752ZM636.991 131.319C633.76 132.793 630.099 133.53 626.002 133.53C621.179 133.53 616.862 132.592 613.038 130.715C609.215 128.839 606.234 126.247 604.101 122.941C601.963 119.634 600.894 115.925 600.894 111.815C600.894 104.085 603.816 98.1645 609.662 94.0534C615.508 89.9429 623.8 87.8876 634.533 87.8876H644.771V83.1958C644.771 79.3533 643.702 76.348 641.564 74.181C639.425 72.014 636.264 70.9302 632.075 70.9302C629.576 70.9302 627.368 71.3552 625.456 72.2039C623.544 73.0527 622.068 74.2146 621.022 75.6892C619.976 77.1638 619.453 78.8167 619.453 80.649H602.462C602.462 76.7614 603.723 73.1088 606.245 69.6907C608.773 66.2726 612.364 63.5243 617.03 61.4465C621.691 59.3687 627.025 58.33 633.033 58.33C638.676 58.33 643.656 59.2685 647.979 61.1449C652.302 63.0218 655.678 65.8367 658.113 69.59C660.548 73.3433 661.762 77.9233 661.762 83.3295V115.3C661.762 121.913 662.698 127.163 664.563 131.05V132.19H647.229C646.497 130.626 645.864 128.369 645.318 125.421C642.993 127.878 640.222 129.844 636.991 131.319ZM629.28 120.189C625.689 120.189 622.888 119.261 620.889 117.408C618.884 115.553 617.885 113.151 617.885 110.202C617.885 106.404 619.407 103.455 622.458 101.355C625.503 99.2552 629.989 98.205 635.898 98.205H644.771V111.744C643.499 114.067 641.482 116.056 638.734 117.709C635.98 119.362 632.83 120.189 629.28 120.189ZM695.797 82.7934V132.19H678.806V59.6703H694.977L695.454 67.8473C697.319 64.809 699.644 62.4631 702.415 60.8097C705.193 59.1568 708.401 58.33 712.038 58.33C712.997 58.33 714.072 58.4192 715.281 58.5981C716.484 58.777 717.384 58.9779 717.977 59.2013L717.837 74.9516C715.565 74.5944 713.311 74.4155 711.085 74.4155C703.485 74.4155 698.388 77.2083 695.797 82.7934ZM745.183 132.183V108.657L752.627 101.218L774.122 132.183H793.774L763.546 89.8242L790.909 59.6633H770.438L750.239 82.1161L745.183 88.2824V29.2346H728.262V132.183H745.183ZM851.354 129.643C846.577 132.234 840.796 133.53 834.02 133.53C826.832 133.53 820.55 132 815.181 128.939C809.818 125.879 805.698 121.689 802.833 116.372C799.968 111.055 798.533 105.09 798.533 98.4771V95.7289C798.533 88.2674 799.986 81.7102 802.903 76.058C805.814 70.4057 809.818 66.0375 814.908 62.9547C820.004 59.8718 825.74 58.33 832.108 58.33C839.07 58.33 844.916 59.8272 849.646 62.8209C854.376 65.8141 857.914 70.0033 860.256 75.3876C862.598 80.7718 863.772 87.0163 863.772 94.1206V101.158H815.664C815.977 104.866 816.959 108.151 818.598 111.01C820.231 113.87 822.451 116.104 825.252 117.713C828.047 119.322 831.312 120.126 835.043 120.126C842.684 120.126 848.826 117.177 853.469 111.279L862.546 119.925C859.861 123.812 856.131 127.052 851.354 129.643ZM846.984 89.0953H816.001C816.773 83.5993 818.528 79.3325 821.259 76.2942C823.985 73.2553 827.582 71.7361 832.039 71.7361C837.042 71.7361 840.732 73.2443 843.097 76.2606C845.462 79.2763 846.758 83.1304 846.984 87.8222V89.0953ZM910.974 131.921C907.702 132.993 904.018 133.529 899.921 133.529C893.913 133.529 889.183 131.898 885.725 128.636C882.268 125.374 880.542 120.169 880.542 113.02V72.0013H868.531V59.6691H880.542V41.9753H897.533V59.6691H910.497V72.0013H897.533V111.88C897.533 114.919 898.166 116.986 899.445 118.08C900.717 119.175 902.629 119.722 905.174 119.722C906.993 119.722 908.928 119.499 910.974 119.052V131.921Z'
					fill='currentColor'
				/>
				<path
					d='M136.267 152.495C136.267 159.76 136.267 163.392 133.891 165.192C131.516 166.993 128.019 166.012 121.024 164.049L8.63192 132.51C4.41793 131.328 2.31093 130.737 1.09248 129.129C-0.125977 127.522 -0.125977 125.333 -0.125977 120.957V47.0434C-0.125977 42.6667 -0.125977 40.4783 1.09248 38.8709C2.31093 37.2634 4.41792 36.6722 8.63191 35.4897L121.024 3.95096C128.019 1.98834 131.516 1.00703 133.891 2.80771C136.267 4.60839 136.267 8.24049 136.267 15.5047V152.495ZM27.9043 122.228L120.966 148.345V96.1133L27.9043 122.228ZM15.1738 110.111L108.217 84L15.1738 57.8887V110.111ZM27.9033 45.7725L120.966 71.8877V19.6553L27.9033 45.7725Z'
					fill='currentColor'
				/>
			</svg>
		</a>
	);
};

export const NavbarSearchSuggestions = () => {
	return (
		<div className='min-w-[400px] w-full z-50 absolute top-full bg-background dark:bg-background'>
			<div className='border border-t-0 bg-background dark:bg-background rounded-t-none rounded-b-lg shadow-md lg:p-2 mt-4 lg:pt-3 lg:mt-0 p-0 flex flex-col overflow-hidden z-[1001]'>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col pb-2 lg:p-2 gap-2'>
						<p
							data-polykit='true'
							data-slot='search-suggestion-section-label'
							className='text-[10px] font-medium text-text-secondary uppercase tracking-wider'
						>
							Browse
						</p>
						<div className='flex gap-2 flex-wrap'>
							<a href='/predictions?_sort=newest'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<path
											d='m3.5417,3.6104l-1.7538,4.5807c-.1547.4042.1872.8238.6143.7539l4.8771-.7986c.4271-.0699.6173-.5768.3418-.9105l-3.1233-3.7821c-.2735-.3312-.8025-.2446-.9561.1566Z'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
										<circle
											cx='13.5'
											cy='4.5'
											r='2.75'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											data-color='color-2'
										/>
										<path
											d='m14.25,12.5167h0c-1.274.9216-2.2147,2.2316-2.681,3.7333h0s0,0,0,0c-.9216-1.274-2.2316-2.2147-3.7333-2.681h0,0c1.274-.9216,2.2147-2.2316,2.681-3.7333h0s0,0,0,0c.9216,1.274,2.2316,2.2147,3.7333,2.681h0Z'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										New
									</p>
								</div>
							</a>
							<a href='/predictions'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<path
											d='M1.75,12.25l3.646-3.646c.195-.195,.512-.195,.707,0l3.293,3.293c.195,.195,.512,.195,.707,0l6.146-6.146'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											data-color='color-2'
										/>
										<polyline
											points='11.25 5.75 16.25 5.75 16.25 10.75'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										Trending
									</p>
								</div>
							</a>
							<a href='/predictions?_sort=volume'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<path
											d='M6.962,16.25c-.28-2.75,1.803-2.097,1.875-4.501,1.581,.851,2.239,2.987,2.2,4.465'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											data-color='color-2'
										/>
										<path
											d='M11.037,16.214c3.901-1.516,4.725-5.833,1.964-9.85'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
										<path
											d='M10.533,7.37s.696-3.766-2.044-5.62c-.364,4.375-5.109,4.531-5.109,9.237,0,2.117,1.096,4.402,3.582,5.263'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										Popular
									</p>
								</div>
							</a>
							<a href='/predictions?_sort=liquidity'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<path
											d='m9,16.25c3.038,0,5.5-2.47,5.5-5.517,0-4.191-3.083-5.983-5.5-8.983-2.417,3-5.5,4.792-5.5,8.983,0,3.047,2.462,5.517,5.5,5.517Z'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
										<path
											d='m9,13.25c-1.3784,0-2.5-1.1289-2.5-2.5166'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											data-color='color-2'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										Liquid
									</p>
								</div>
							</a>
							<a href='/predictions?_sort=ending_soon'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<polyline
											points='9 4.75 9 9 12.25 11.25'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											data-color='color-2'
										/>
										<path
											d='M9,1.75c4.004,0,7.25,3.246,7.25,7.25s-3.246,7.25-7.25,7.25'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
										/>
										<circle
											cx='3.873'
											cy='14.127'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='1.75'
											cy='9'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='3.873'
											cy='3.873'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='6.226'
											cy='15.698'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='2.302'
											cy='11.774'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='2.302'
											cy='6.226'
											r='.75'
											fill='currentColor'
										/>
										<circle
											cx='6.226'
											cy='2.302'
											r='.75'
											fill='currentColor'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										Ending Soon
									</p>
								</div>
							</a>
							<a href='/predictions?_sort=competitive'>
								<div className='py-1.5 rounded-lg border flex items-center pr-3 pl-2.5 text-text hover:bg-neutral-50 gap-1.5 cursor-pointer'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18px'
										height='18px'
										viewBox='0 0 18 18'
									>
										<path
											d='M13.25 13.25V15.25C13.25 15.802 12.802 16.25 12.25 16.25H6.75C6.198 16.25 5.75 15.802 5.75 15.25V13.25'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
											data-color='color-2'
											fill='none'
										/>
										<path
											d='M12.25 5.75C12.25 6.855 11.355 7.75 10.25 7.75H7.58002'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
											fill='none'
										/>
										<path
											d='M4.018 6.751C3.848 6.457 3.75 6.115 3.75 5.75V5.25C3.75 3.593 5.093 2.25 6.75 2.25H12.25C13.907 2.25 15.25 3.593 15.25 5.25V10.25C15.25 11.907 13.907 13.25 12.25 13.25H5.25C3.593 13.25 2.25 11.907 2.25 10.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H6C6.966 6.75 7.75 7.534 7.75 8.5C7.75 9.467 6.966 10.25 6 10.25H5.25'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
											fill='none'
										/>
									</svg>
									<p className='text-body-base font-medium ml-0.5'>
										Competitive
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-2 py-2 lg:px-2'>
						<p
							data-polykit='true'
							data-slot='search-suggestion-section-label'
							className='text-[10px] font-medium text-text-secondary uppercase tracking-wider'
						>
							Topics
						</p>
						<div className='grid grid-cols-2 gap-2'>
							<a
								className='w-full'
								href='/event/bitcoin-up-or-down-august-22-9pm-et/live'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Live Crypto'
											loading='lazy'
											decoding='async'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-live-crypto.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-live-crypto.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-live-crypto.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-live-crypto.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-live-crypto.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Live Crypto
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/politics'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Politics'
											loading='lazy'
											decoding='async'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-politics.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-politics.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-politics.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-politics.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-politics.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Politics
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/middle-east'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Middle East'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-middle-east.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-middle-east.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-middle-east.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-middle-east.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-middle-east.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Middle East
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/crypto'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Crypto'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-crypto.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-crypto.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-crypto.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-crypto.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-crypto.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Crypto
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/sports/live'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Sports'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fsports%2Fnba.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fsports%2Fnba.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fsports%2Fnba.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fsports%2Fnba.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fsports%2Fnba.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Sports
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/pop-culture'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Pop Culture'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-pop-culture.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-pop-culture.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-pop-culture.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-pop-culture.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-pop-culture.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Pop Culture
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/tech'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='Tech'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-tech.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-tech.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-tech.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-tech.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-tech.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										Tech
									</p>
								</div>
							</a>
							<a
								className='w-full'
								href='/predictions/ai'
							>
								<div className='flex items-center border rounded-lg gap-x-2 hover:bg-surface p-2'>
									<div className='size-8 shrink-0 relative border rounded-lg overflow-hidden'>
										<img
											alt='AI'
											loading='lazy'
											decoding='async'
											data-nimg='fill'
											className='object-cover'
											sizes='96px'
											srcSet='/_next/image?url=%2Fimages%2Fnav-markets-ai.png&amp;w=96&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 96w, /_next/image?url=%2Fimages%2Fnav-markets-ai.png&amp;w=256&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 256w, /_next/image?url=%2Fimages%2Fnav-markets-ai.png&amp;w=600&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 600w, /_next/image?url=%2Fimages%2Fnav-markets-ai.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4 1024w'
											src='https://polymarket.com/_next/image?url=%2Fimages%2Fnav-markets-ai.png&amp;w=1024&amp;q=75&amp;dpl=dpl_G6De2WyuUFJQJkxnZBgukYQP9BQ4'
											style={{
												position: 'absolute',
												height: '100%',
												width: '100%',
												inset: '0px',
												color: 'transparent',
											}}
										/>
									</div>
									<p className='text-body-base font-medium text-text ml-0.5 line-clamp-1'>
										AI
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const NavbarSearchGroup = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative flex items-center w-full max-w-[600px] min-w-[400px]'>
			{children}
		</div>
	);
};

export const NavbarLinks = ({
	links,
}: {
	links: { label: string; href: string; disabled?: boolean }[];
}) => {
	return (
		<div className='flex overflow-x-auto no-scrollbar h-12 items-center gap-2'>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className='inline-flex items-center px-2.5 py-1 rounded-md text-body-base font-semibold text-text-secondary hover:text-text'
				>
					{link.label}
				</Link>
			))}
		</div>
	);
};

export const NavbarActions: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className='flex items-center gap-2'>{children}</div>;
};
