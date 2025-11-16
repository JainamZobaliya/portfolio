import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./sections/Home.jsx";

function App() {
	let data = {
		title: "Jainam Zobaliya",
		subTitles: ["Senior Software Engineer", "I build | Reliable Systems", "Backend Engineer", "I love | Crafting Scalable Services", "System Design Enthusiast", "I | Turn Logic Into Products"],
		main_image: "/me.jpg",
	};
	return (
		<Routes>
			<Route path="/" element={<Home data={data} />} />
		</Routes>
	);
}

export default App;
