import React from "react";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";
const Home = () => {
	const { user } = UserAuth();
	return (
		<div>
			<Navbar />
			<p>Skrate</p>
			<div>
				<p>Hello, {user?.displayName}</p>
			</div>
		</div>
	);
};

export default Home;
