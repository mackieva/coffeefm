import Image from 'next/image';
export default function ImageCopy({ details }) {
	return (
		<section className='commitment'>
			<Image
				src={details.bgImgD}
				alt={details.heading}
				width={485}
				height={635}
			/>
			<div className='commitmentCopy'>
				<h3>{details.heading}</h3>
				<p>{details.para}</p>
			</div>
		</section>
	);
}
