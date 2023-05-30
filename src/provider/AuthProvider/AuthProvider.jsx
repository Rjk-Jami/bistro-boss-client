import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = ( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    


const logOut = ()=>{
    return signOut(auth)
}

const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
})
    return ()=>{
        setLoading(true)
       return unsubscribe();
    }
},[])

const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName:name, photoURL: photo
      })
}

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        updateUserProfile



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;