import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<Signin />}></Route>

				<Route
					path="/home"
					element={
						<Protected>
							<Home />
						</Protected>
					}
				></Route>
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
