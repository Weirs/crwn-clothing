import { initializeApp} from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider

} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvfXXo-e927kt2x5_SnUFrXDJKFYDUGck",
    authDomain: "crwn-clothing-db-53057.firebaseapp.com",
    projectId: "crwn-clothing-db-53057",
    storageBucket: "crwn-clothing-db-53057.appspot.com",
    messagingSenderId: "434729763486",
    appId: "1:434729763486:web:2de6922ecba2b69587f18f"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
        prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(
        userDocRef,
        {
          displayName,
          email,
          createdAt
        }
      );
    } catch (error) {
      console.log('error creating the user',error.message);
    }
  }

  return userDocRef;
}