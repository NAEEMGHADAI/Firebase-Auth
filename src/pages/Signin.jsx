import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../pages/css/Signin.css";

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
		<div className="signin">
			<Navbar />
			{/* <div className="signindiv">Welcome back to Skrate!!</div> */}
			<div className="signinButton">
				<h3 className="signindiv">Welcome back to Skrate!!</h3>
				<GoogleButton onClick={handleGoogleSignIn} />
			</div>
		</div>
	);
};

export default Signin;
