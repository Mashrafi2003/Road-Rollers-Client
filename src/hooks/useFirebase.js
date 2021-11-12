import { useEffect, useState } from "react";
import intializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile , signInWithPopup , signInWithEmailAndPassword , GoogleAuthProvider    } from "firebase/auth";

intializeFirebase()
const useFirebase = () => {
    const [user , setUser] = useState({})
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [admin , setAdmin] = useState(false)

    


    // Creating New Users Functionality Starts Here Email and Password

    const registerUser = (email , password ,name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth , email , password)
        .then((userCredential) => {
            // Signed in 
            setError('');
            const newUser = {email , displayName: name };
            setUser(newUser);
            saveUser(email , name)
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              setError(error.message);
            });
            history.replace('/')
            // ...
          })
          .catch((error) => {
            setError(error.message);
            // ..
          })
          .finally(()=>{
            setIsLoading(false);
          })
    }

    // Creating New Users Functionality Ends Here

    // Sign In With User and Password Functionality Starts Here

    const signInUser = (email , password , location , history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
        const destination = location.state?.from || '/'
        history.replace(destination);
        setError('');
    // ...
  })
        .catch((error) => {
            setError(error.message);
         })
         .finally(()=>{
          setIsLoading(false);
        })
    }



    // Sign In With User and Password Functionality Ends Here

    

    // Logout Any User From The UI Starts 
    const logOut = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>{
            setIsLoading(false);
          })
    }
        // Logout Any User From The UI Ends 


        // Sign in Using Google Auth Provider Functionality Starts
        
        const signinWithGoogle = (location , history) =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
          const user = result.user;
          setError('')
          })
        .catch((error) => {
        setError(error.message)
  })
  .finally(()=>{
    setIsLoading(false);
  })
        }


        // Sign in Using Google Auth Provider Functionality Ends

    // Observe Users State from Every Browser  
    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
             
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data))
    },[user?.email])

    // Saving Resgiter Data From UI on The Database
    const saveUser = (email , displayName)=>{
      const user = {email , displayName};
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }
    


    return{
        user,
        registerUser,
        logOut,
        signInUser,
        isLoading,
        error,
        signinWithGoogle,
        admin


        


    }
}

export default useFirebase;