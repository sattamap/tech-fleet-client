import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
   
    
    
    const createUser = (name, email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Add the user's first name and last name to their profile
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: `${name}`,
              photoURL: photoURL || "" ,
            });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            throw error; // Propagate the error to the caller
          });
      };

      
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user in auth state", currentUser);
            setUser(currentUser);
            setLoading(false);
          });
      
          return () => {
            unSubscribe();
          };
      }, []);

  
      const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };


    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading,
        setLoading,
        isDarkMode,
        toggleTheme
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node ,
}

export default AuthProvider;
