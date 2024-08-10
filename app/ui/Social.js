import { social } from '../lib/defs';
import Link from 'next/link';
import Image from 'next/image';

export default function Social() {
	return (
		<div className='socialLinks'>
			{social.map((l) => (
				<Link href={l.url} key={l.id} target='_blank'>
					<Image src={l.image} alt={`${l.name} icon`} height={24} width={24} />
				</Link>
			))}
		</div>
	);
}
