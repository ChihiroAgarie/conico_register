import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import Constants from 'expo-constants';
import { Content } from '../lib/types/content'

const firebaseConfig = {
    apiKey: "AIzaSyDCiAyghu3sJRDkESYFqj2P_cHPqCK4KUM",
    authDomain: "gs-product-2201.firebaseapp.com",
    projectId: "gs-product-2201",
    storageBucket: "gs-product-2201.appspot.com",
    messagingSenderId: "521751296039",
    appId: "1:521751296039:web:f788769e41de4f8fa6f602",
    measurementId: "G-EVVYB907ZC"
};

const app = initializeApp(firebaseConfig);
// const app = initializeApp(Constants.manifest.extra.firebase);
// firebase.initializeApp(Constants.manifest.extra.firebase);
const db = getFirestore(app);

export const getContents = async () => {
    // firebaseが該当しないので書き換え
    // const snapshot = await firebase.firestore().collection("contents").get();
    const dataCol = collection(db, 'contents');
    const snapshot = await getDocs(dataCol);
    const contents = snapshot.docs.map(doc => doc.data() as Content);
    return contents;
    // console.log(contents);
}

