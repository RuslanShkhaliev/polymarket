import Image from 'next/image';

interface AvatarProps {
	src: string;
	alt?: string;
}
export const Avatar = ({ src, alt = '' }: AvatarProps) => {
	return (
		<div className='relative rounded-sm overflow-hidden w-10 h-10 bg-transparent'>
			<div className='w-10 h-10 min-w-10 opacity-0 overflow-hidden bg-skeleton-bg/50 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[skeletonShimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-skeleton-bg before:to-transparent absolute top-0 left-0 rounded-[inherit] hidden' />
			<Image
				alt={alt}
				loading='lazy'
				decoding='async'
				fill
				src={src}
				className='object-cover absolute inset-0'
			/>
		</div>
	);
};
