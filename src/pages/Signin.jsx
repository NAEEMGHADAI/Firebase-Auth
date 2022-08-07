import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const { googleSignIn, user } = UserAuth();
	const navigate = useNavigate();
	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (user != null) {
			navigate("/home");
		}
	}, [user]);
	return (
		<div>
			<Navbar />
			<p>Sign In</p>
			<div>
				<GoogleButton onClick={handleGoogleSignIn} />
			</div>
		</div>
	);
};

export default Signin;
