import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firbase.utils';

const SignIn = () => {
  const loguser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loguser}>Sign in with google pop up</button>
    </div>
  );
};

export default SignIn;
