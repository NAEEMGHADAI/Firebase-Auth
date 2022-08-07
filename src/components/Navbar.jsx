import React from "react";
import { UserAuth } from "../context/AuthContext";
import cover from "../img/cover.png";
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
		<div className="row">
			<div className="col-2">
				<h3>Skrate</h3>
			</div>
			<div className="col-9"></div>
			<div className="col">
				{user?.displayName ? (
					<button onClick={handleSignOut}>Logout</button>
				) : (
					<div>{/* <img src={cover} alt="cover" width="50%" /> */}</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
