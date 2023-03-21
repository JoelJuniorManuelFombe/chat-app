import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
const cookies = new Cookies();



export const Login = () => {
    const authWithGoogle = async () => {
        try {
            await signInWithPopup( auth, provider );
            RequestCookies.set("auth-token", result.user.refreshToken)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button type="submit" onClick={authWithGoogle}>Login Google</button>
        </div>
    );
};