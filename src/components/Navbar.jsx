import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();
	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h3>Skrate</h3>
			{user?.displayName ? (
				<button onClick={handleSignOut}>Logout</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default Navbar;
