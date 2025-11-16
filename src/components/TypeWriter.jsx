import { useEffect, useState } from "react";

function TypeWriter({ text = [], speed = 50, className = "", style = {} }) {
	const [subDisplayText, setSubDisplayText] = useState("");
	const [mainDisplayText, setMainDisplayText] = useState("");
	const [index, setIndex] = useState(0);

	const isTextList = Array.isArray(text);

	useEffect(() => {
		// internal typing counter
		let t = -1;

		// track whether subText is finished
		let subDone = false;

		// pick the current item
		const current = isTextList ? text[index] : text;

		// support "sub|main" syntax
		const parts = current.includes("|") ? current.split("|") : [isTextList ? "I am " : "", current];

		const subText = parts[0];
		const mainText = parts[1];

		// reset displayed texts
		setSubDisplayText("");
		setMainDisplayText("");

		const interval = setInterval(() => {
			/* ---------------------------
				RESET PHASE (t === -11)
			----------------------------*/
			if (t === -11) {
				setSubDisplayText("");
				setMainDisplayText("");
			}

			/* ---------------------------
				TYPE subText FIRST
			----------------------------*/
			if (!subDone) {
				if (t < subText.length) {
					t++;
					if (t >= 0) {
						setSubDisplayText((prev) => prev + subText.charAt(t));
					}
					return;
				}

				// subText is fully typed → switch to mainText
				subDone = true;
				t = -1;
				return;
			}

			/* ---------------------------
				TYPE mainText NEXT
			----------------------------*/
			if (t < mainText.length) {
				t++;
				if (t >= 0) {
					setMainDisplayText((prev) => prev + mainText.charAt(t));
				}
				return;
			}

			/* ---------------------------
				PAUSE (t = -25)
			----------------------------*/
			t = -25;

			// done → go to next index
			clearInterval(interval);
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % text.length);
			}, speed);
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
