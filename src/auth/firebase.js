import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


//https://firebase.google.com/docs/auth/web/start
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId:process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

 export const createUser= async(email, password,navigate,displayName)=>{
    // yeni bir kullanıcı oluşturmak için kullanılan firebase methodu
    try {
     let userCredential=await createUserWithEmailAndPassword(auth, email, password) ;
     await updateProfile(auth.currentUser, {
        displayName: displayName,
      })
     navigate('/');
     console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
}
export const signIn= async(email, password,navigate)=>{
   // mevcut kullanıcı girişi için kullanılan method
    try {
     let userCredential=await signInWithEmailAndPassword(auth, email, password);
     navigate('/');
    //  sessionStorage.setItem("user" ,JSON.stringify(userCredential.user ))
     console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
}
 export const userObserver=(serCurrentUser)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
            serCurrentUser(user)
        } else {
         serCurrentUser(false)
      }})
 }

 export const logOut=()=>{
    signOut(auth)
 }

 export const signUpProvider=(navigate)=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
   console.log(result);
   navigate('/');
  }).catch((error) => {
    console.log(error);
  });
 }