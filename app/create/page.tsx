import HeroBanner from '../ui/HeroBanner';
import HowItWorks from '../ui/HowItWorks';
import { createHero } from '../lib/defs';

export default function Create() {
	return (
		<>
			<HeroBanner {...createHero} />
			<section className='blueBg'>
				<HowItWorks btn={false} />
			</section>
		</>
	);
}
