import {
	signInWithGooglePopup,
	createUserProfileDocument,
} from "../firebase";

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		createUserProfileDocument(response);
	};

	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</>
	);
};

export default SignIn;
