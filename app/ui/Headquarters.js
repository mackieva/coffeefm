import { headquarters } from '../lib/defs';
import Image from 'next/image';

export default function Headquarters() {
	return (
		<section className='headquarters'>
			<h2 className='mb-10'>Our headquarters</h2>
			<div className='headquartersContainer'>
				{headquarters.map((h) => (
					<div key={h.id} className='headquartersItem'>
						<Image
							src={h.img}
							alt={h.label}
							height={h.imgh}
							width={h.imgw}
							className='mb-5'
						/>
						<h3>{h.label}</h3>
						<p>{h.st}</p>
						<p>{h.city}</p>
						<p>{h.zip}</p>
						<p>x{h.phone}</p>
					</div>
				))}
			</div>
		</section>
	);
}
