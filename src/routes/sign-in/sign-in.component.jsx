import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firbase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const loguser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loguser}>Sign in with google pop up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
