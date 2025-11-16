import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./sections/Home.jsx";
import mainImage from "/me.jpg";

function App() {
	let data = {
		title: "Jainam Zobaliya",
		subTitles: [
			"Senior Software Engineer",
			"I build | Reliable Systems",
			"Backend Engineer",
			"I love | Crafting Scalable Services",
			"System Design Enthusiast",
			"I | Turn Logic Into Products",
		],
		// Use Vite's asset handling so paths are correct for both dev and GitHub Pages
		main_image: mainImage,
	};
	return (
		<Routes>
			<Route path="/" element={<Home data={data} />} />
		</Routes>
	);
}

export default App;
