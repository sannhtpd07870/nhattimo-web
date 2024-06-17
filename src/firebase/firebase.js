import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // google authentication
const gihtubProvider = new GithubAuthProvider(); // github authentication
const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication

/**
 * `createUserWithEmailAndPassword()` method from firebase auth is used to create new user
 * using email and password
 *
 * @param {string} email
 * @param {string} password
 * @returns
 *
 * Email -> email variable takes users email address from email input
 * password -> password variable takes user password from password input
 *
 */
export async function CreateNewUser(email, password) {
    // let's add some validation
    if (!email) throw new Error("Email can not be empty");
    if (!password) throw new Error("Password can not be Empty");

    const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    /**
     * after successfull login it will return users credentials like
     * email, userId, token, etc.
     */
    return userCredentials;
}

/**
 * If user alredy exists in firebase and want to login.
 * In last video we have seen how to create user "signup"
 * In this video we will see how to login existing user.
 */
export async function LoginUser(email, password) {
    // let's add some validation
    if (!email) throw new Error("Email can not be empty");
    if (!password) throw new Error("Password can not be Empty");

    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

export const GoogleAuth = async () => {
    const userAuth = await signInWithPopup(auth, provider);
    return userAuth;
};

export const GithubAuth = async () => {
    const userAuth = await signInWithPopup(auth, gihtubProvider);
    return userAuth;
};

export const FacebookAuth = async () => {
    try {
        const fbAuth = signInWithPopup(auth, fbAuthProvider);
        return fbAuth;
    } catch (error) {
        console.log(error);
    }
};
