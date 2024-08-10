import HeroBanner from './ui/HeroBanner';
import HowItWorks from './ui/HowItWorks';
import { homeHero, collection, chooseReasons } from './lib/defs';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			{/* HERO BANNER */}
			<HeroBanner {...homeHero} />
			<section className='collectionSect'>
				<h2 className='alternateBig text-center'>our collection</h2>
				<div className='collectionSect__list'>
					{collection.flatMap((c) => (
						<div>
							<Image src={c.img} alt={c.name} width={255} height={193} />
							<h3>{c.name}</h3>
							<p>{c.description}</p>
						</div>
					))}
				</div>
			</section>
			<section className='choose'>
				<h2>Why Choose Us?</h2>
				<p>
					A large part of our role is choosing which particular coffees will be
					featured in our range. This means working closely with the best coffee
					growers to give you a more impactful experience on every level.
				</p>
				<div className='chooseReasons w-full flex justify-center gap-8'>
					{chooseReasons.map((r) => (
						<div className='chooseReason'>
							<Image src={r.img} alt={r.label} height={72} width={72} />
							<h3>{r.label}</h3>
							<p>{r.description}</p>
						</div>
					))}
				</div>
			</section>
			<HowItWorks />
		</>
	);
}
