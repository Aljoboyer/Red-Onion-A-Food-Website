import {getIdToken,updateProfile,sendPasswordResetEmail,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import FirebaseInitialization from '../../src/Firebasesetup/Firebaseinit';

FirebaseInitialization()
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user,setUser] = useState({});
    const auth = getAuth();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState('')

   
    //creating user 
    const Registeruser = (email,password,name,url) => {
        setIsloading(true)
    createUserWithEmailAndPassword(auth, email, password,name,url)
    .then((result) => {
        const user = result.user;
        setUser(user)
        NamenadImgSet(name,url)
        })
    .catch((error) => {

    }).finally(() => setIsloading(false))
    }
    //sign in with Email and password'
    const LoginWithEmailandPassword = (email, password) => {
        setIsloading(true)
       return signInWithEmailAndPassword(auth, email, password)
            
    }
      //google sign in
      const SigninWithGoogle = () => {
       
        return signInWithPopup(auth, googleprovider)
        
    }
    //current user getting 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              getIdToken(user).then(idtoken => localStorage.setItem('idtoken', idtoken))
              setUser(user);
            } else {
              setUser({})
            }
            setIsloading(false)
          });
    },[])
    //Log out user
    const Logout = () => {
        
       return signOut(auth)
    }
  //password reset email
  const PasswordReset = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  //name and img set
  const NamenadImgSet = (name,url) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: url
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
    return{
        SigninWithGoogle,
        Registeruser,
        LoginWithEmailandPassword,
        Logout,
        user,
        isloading,
        error,
        PasswordReset,
        NamenadImgSet,
        setUser,
        setIsloading,
        setError,
    }
}

export default useFirebase;