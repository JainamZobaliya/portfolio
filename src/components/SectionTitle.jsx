import TypeWriter from "./TypeWriter";

export function SectionTitle({ text, ...props }) {
	return <h1 className="sectionTitle">{props.typewriter ? <TypeWriter text={text} /> : text}</h1>;
}

export function SectionSubtitle({ text, ...props }) {
	return <h5 className="bioSubTitle">{props.typewriter ? <TypeWriter className="bolder" text={text} speed={props?.speed ?? 100} /> : text}</h5>;
}
