import { useEffect, useState } from "react";

function TypeWriter({ text = [], speed = 50, pauseDuration = 1500, className = "", style = {} }) {
	const [subDisplayText, setSubDisplayText] = useState("");
	const [mainDisplayText, setMainDisplayText] = useState("");
	const [index, setIndex] = useState(0);

	const isTextList = Array.isArray(text);

	useEffect(() => {
		let t = -1;
		let subDone = false;

		const current = isTextList ? text[index] : text;
		const parts = current.includes("|") ? current.split("|") : [isTextList ? "I am a " : "", current];

		const subText = parts[0];
		const mainText = parts[1];

		setSubDisplayText("");
		setMainDisplayText("");

		const interval = setInterval(() => {
			// RESET PHASE
			if (t === -11) {
				setSubDisplayText("");
				setMainDisplayText("");
			}

			// TYPE subText
			if (!subDone) {
				if (t < subText.length) {
					t++;
					if (t >= 0) {
						setSubDisplayText((prev) => prev + subText.charAt(t));
					}
					return;
				}
				subDone = true;
				t = -1;
				return;
			}

			// TYPE mainText
			if (t < mainText.length) {
				t++;
				if (t >= 0) {
					setMainDisplayText((prev) => prev + mainText.charAt(t));
				}
				return;
			}

			// FULL LINE DONE → APPLY PAUSE
			clearInterval(interval);

			setTimeout(() => {
				setIndex((prev) => (prev + 1) % text.length);
			}, pauseDuration); // <-- REAL PAUSE HERE
		}, speed);

		return () => clearInterval(interval);
	}, [index, text, speed]);

	return (
		<span>
			{subDisplayText}
			<span className={`${className} blink-cursor`} style={style}>
				{mainDisplayText}
			</span>
		</span>
	);
}

export default TypeWriter;
