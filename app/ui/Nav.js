import Link from 'next/link';
import { links } from '../lib/defs';

export default function Nav() {
	return (
		<nav className='textNavLinks'>
			{links.map((link) => (
				<Link href={link.url} key={link.id}>
					{link.name}
				</Link>
			))}
		</nav>
	);
}
