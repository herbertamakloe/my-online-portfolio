import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import React from "react";
// import Mobilenav from "./components/MobileNav/Mobilenav";
import Hireme from "./pages/Hireme";
import Resume from "./pages/Resume";
// import "../src/css/App.css";

function App() {
	const location = useLocation();

	// const [open, setOpen] = useState(false);

	// function toggleDropdown() {
	// 	setOpen(!open);
	// }

	return (
		<div className="App">
			{/* NAVBAR */}
			{/* <Navbar toggleBtn={toggleDropdown} /> */}

			{/* PAGE TRANSITIONS */}
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact component={Home} />
					<Route path="/resume" component={Resume} />
					<Route path="/about" component={About} />
					<Route path="/hire-me" component={Hireme} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
