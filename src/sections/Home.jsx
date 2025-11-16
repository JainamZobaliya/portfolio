import { SectionTitle, SectionSubtitle } from "../components/SectionTitle.jsx";
import { CommingSoon } from "./CommingSoon.jsx";

function BioImage({ src }) {
	return <img className="bio-img-wrapper bioImage unselectable" src={src} draggable="false" />;
}

export function Home(props) {
	return (
		<>
			<section className="snap-section home-wrapper">
				<div className="section-text-wrapper">
					<SectionTitle text={props.data.title} />
					<SectionSubtitle text={props.data.subTitles} typewriter={true} speed={80} />
				</div>
				<BioImage src={props.data.main_image} />
			</section>
			<CommingSoon />
		</>
	);
}
