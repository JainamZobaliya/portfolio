import TypeWriter from "../components/TypeWriter";

function BioTitle({ text, ...props }) {
	return <h1 className="bioTitle">{props.typewriter ? <TypeWriter text={text} /> : text}</h1>;
}

function BioSubTitle({ text, ...props }) {
	return <h5 className="bioSubTitle">{props.typewriter ? <TypeWriter className="bolder" text={text} speed={props?.speed ?? 100} /> : text}</h5>;
}

function BioImage({ src }) {
	return <img className="bio-img-wrapper bioImage unselectable" src={src} draggable="false" />;
}

export function Home(props) {
	return (
		<>
			<div className="home-wrapper">
				<div className="bio-text-wrapper">
					<BioTitle text={props.data.title} />
					<BioSubTitle text={props.data.subTitles} typewriter={true} speed={80} />
				</div>
				<BioImage src={props.data.main_image} />
			</div>
		</>
	);
}
