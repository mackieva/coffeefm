import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
	return (
		<header>
			<Image
				src='/assets/shared/desktop/logo.svg'
				width={236}
				height={36}
				alt='CoffeeRoasters Logo - Text and Bean'
			/>
			<Nav />
		</header>
	);
}
