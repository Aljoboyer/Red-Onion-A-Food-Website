import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseInitialization = () => {
    return initializeApp(firebaseConfig)
}

export default FirebaseInitialization;