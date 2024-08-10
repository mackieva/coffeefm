import Link from 'next/link';

export default function HeroBanner({
	bgImgD,
	bgImgM,
	heading,
	para,
	btnLink,
	btnText,
}) {
	return (
		<section
			className='heroBanner'
			style={{ backgroundImage: `url(${bgImgD})` }}
		>
			<h2>{heading}</h2>
			<p>{para}</p>
			<Link href={btnLink} className='btn'>
				{btnText}
			</Link>
		</section>
	);
}
