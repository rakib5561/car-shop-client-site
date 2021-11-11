import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth"
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication()
const useFirebase = () =>{

    const [user, setUser] = useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    },[]);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{    
        //Google Sing In 
         signInWithPopup(auth, googleProvider)

            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
    }

    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});
            })
    }
    
        return{
        user,
        loginWithGoogle,
        logOut

    }

}
export default useFirebase;