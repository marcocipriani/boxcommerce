import { Routes, Route } from "react-router-dom";

import Home from "./routes/home.route";
import SignIn from "./routes/signin.route";
import Navigation from "./components/navigation/navigation.component";

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="signin" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
