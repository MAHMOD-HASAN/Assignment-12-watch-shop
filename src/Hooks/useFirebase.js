import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

// initialize firebase app 
firebaseInitialization();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // sign in with google
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
         signInWithPopup(auth, googleProvider)
         .then(result => {
            // google sign in succesfull
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
         })
         .catch((error) => {
             setError(error.message);
         })
         .finally(() => setLoading(false))
    }

    // login with email and password
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // successfully login
            const destination = location?.state?.from || '/';
            history.replace(destination);
              setError('');
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setLoading(false))
    }

    // registration with email & password
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // successfully registered
            const newUser = {email, displayName : name};
            setUser(newUser);

            updateProfile(auth.currentUser, {
              displayName: name,
            }).then(() => {
              // Profile updated!

            }).catch((error) => {
              setError(error.message);
            });

            history.push('/');
              setError('');
          })
          .catch((error) => {
            setError('You already exist! You should login');
          })
          .finally(() => setLoading(false))
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setError('');
          }).catch((error) => {
             setError(error.message);
          });
    }


    // user state observer
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
            setLoading(false);
          });
          return () => unsubscribe;
    }, [])


    return {
        user,
        error,
        loading,
        setError,
        signInWithGoogle,
        registerUser,
        logOut,
        loginUser,
    }
}

export default useFirebase;