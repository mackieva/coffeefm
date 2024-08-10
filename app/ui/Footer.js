import Image from 'next/image';
import Nav from './Nav';
import Social from './Social';

export default function Footer() {
	return (
		<footer>
			<Image
				src='/assets/shared/desktop/logo.svg'
				width={236}
				height={36}
				alt='CoffeeRoasters Logo - Text and Bean'
			/>
			<Nav />
			<Social />
		</footer>
	);
}
