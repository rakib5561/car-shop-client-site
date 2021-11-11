import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth"
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication()
const useFirebase = () =>{
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    },[]);

    //handle name from  user
    const handleName =(e)=>{
       setName(e.target.value);
    }
    // handle email from user input
    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
    // handle password
    const handlePassword = (e)=>{
       setPassword(e.target.value);
    }

    // handle user name for display ui
    const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName:name})
            .then(resul =>{
               
            }) 
    }


    // create e new user email and pass
    const RegisterNewUser = (e) =>{
        e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
                .then(result =>{
                    setUserName();
                    alert('Register successfull');
                })
    }

   

    const googleProvider = new GoogleAuthProvider();
     //Google Sing In 
    const loginWithGoogle = () =>{    
        
         signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
    }

    // using email and password for login
    const LogInUser = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result =>{
               e.target.reset();
            })
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
        logOut,
        handleName,
        handleEmail,
        handlePassword,
        RegisterNewUser,
        LogInUser
    }
}
export default useFirebase;