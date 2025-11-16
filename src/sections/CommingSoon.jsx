import { SectionTitle, SectionSubtitle } from "../components/SectionTitle.jsx";

export function CommingSoon() {
	return (
		<section className="snap-section coming-soon-wrapper">
			<div className="coming-soon-content">
				<SectionTitle text="Coming Soon" />
				<SectionSubtitle
					text="More projects, deep dives, and experiments are on the way. Stay tuned!"
					typewriter={true}
				/>
			</div>
		</section>
	);
}
