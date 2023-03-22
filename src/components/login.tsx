import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
const cookies = new Cookies();



export const Login = ({props}: any) => {
    const {isAuthenticated} = props

    const authWithGoogle = async () => {
        try {
            let result = await signInWithPopup( auth, provider );
            cookies.set("auth-token", result.user.refreshToken);
            // localStorage.setItem("auth-token", result.user.refreshToken);
            isAuthenticated(true);
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