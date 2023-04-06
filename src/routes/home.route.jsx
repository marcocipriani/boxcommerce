import { Outlet } from "react-router-dom";

import Directory from "../components/directory/directory.component";

const Home = () => {
	const categories = [
		{
			id: 0,
			title: "Platic Boxes",
			imageUrl:
				"https://images.unsplash.com/photo-1603847734787-9e8a3f3e9d60",
		},
		{
			id: 1,
			title: "Cardstock Boxes",
			imageUrl:
				"https://images.unsplash.com/photo-1532630174493-69e1fe9fead2",
		},
		{
			id: 2,
			title: "Shopping Bags",
			imageUrl:
				"https://images.unsplash.com/photo-1561715276-a2d087060f1d",
		},
		{
			id: 3,
			title: "Big Boxes",
			imageUrl:
				"https://images.unsplash.com/photo-1591270551371-3401a1a9382f",
		},
		{
			id: 4,
			title: "Other",
			imageUrl:
				"https://images.unsplash.com/photo-1573376670774-4427757f7963",
		},
	];

	return (
		<>
			<Directory categories={categories} />
			<Outlet />
		</>
	);
};

export default Home;
