import HeroBanner from '../ui/HeroBanner';
import HowItWorks from '../ui/HowItWorks';
import { createHero } from '../lib/defs';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function Create() {
	return (
		<>
			<HeroBanner {...createHero} />
			<section className='my-8'>
				<HowItWorks btn={false} dark={true} />
			</section>
			<section className='mt-10 mb-10'>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yeah, It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>Is it accessible...for real?</AccordionTrigger>
						<AccordionContent>
							Yes. Like I said. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</>
	);
}
