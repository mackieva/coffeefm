import HeroBanner from '../ui/HeroBanner';
import Headquarters from '../ui/Headquarters';
import { aboutHero, aboutCommitment, aboutQuality } from '../lib/defs';
import Image from 'next/image';

export default function About() {
	return (
		<>
			<HeroBanner {...aboutHero} />
			<section className='commitment'>
				<Image
					src={aboutCommitment.bgImgD}
					alt={aboutCommitment.heading}
					width={485}
					height={635}
				/>
				<div className='commitmentCopy'>
					<h3>{aboutCommitment.heading}</h3>
					<p>{aboutCommitment.para}</p>
				</div>
			</section>
			<section className='quality alt'>
				<div className='qualityCopy'>
					<h3>{aboutQuality.heading}</h3>
					<p>{aboutQuality.para}</p>
				</div>
				<Image
					src={aboutQuality.bgImgD}
					alt={aboutQuality.heading}
					width={485}
					height={635}
				/>
			</section>
			<Headquarters />
		</>
	);
}
