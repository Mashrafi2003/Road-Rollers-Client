import {initializeApp} from 'firebase/app';
import firebaseConfig from './firebase.config';

const intializeFirebase = () =>{
    initializeApp(firebaseConfig)
};
export default intializeFirebase;