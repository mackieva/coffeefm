import Link from 'next/link';
import { works } from '../lib/defs';

export default function HowItWorks({ btn = true }) {
	return (
		<section className='works'>
			<h3>How it works</h3>
			<div className='workStepContainer'>
				{works.map((w) => (
					<div className='workStep'>
						<p className='stepNum'>{w.step}</p>
						<p className='stepLabel'>{w.label}</p>
						<p className='description'>{w.description}</p>
					</div>
				))}
			</div>
			{btn && (
				<Link href='/create/' className='btn'>
					Create your plan
				</Link>
			)}
		</section>
	);
}
