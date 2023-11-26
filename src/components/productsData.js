

// const productsData = [
//     {
//         id: 1,
//         // img: photo1,
//         title: 'ring1',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 2,
//         // img: photo2,
//         title: 'ring22',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 3,
//         // img: photo3,
//         title: 'ring33',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 4,
//         // img: photo4,
//         title: 'ring44',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 5,
//         // img: photo5,
//         title: 'ring55',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 6,
//         // img: photo6,
//         title: 'ring66',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 7,
//         // img: photo7,
//         title: 'ring77',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
//     {
//         id: 8,
//         // img: photo8,
//         title: 'ring88',
//         rating: '5.0',
//         price: '329',
//         description: 'Hand-made from recicled gold',
//         materials: ["yellow gold", "diamond"],
//         quantity: 14,
//     },
// ]


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHoIJMqLKl86UX8I1nmownqBgh9X9D9uU",
  authDomain: "mangatagallo.firebaseapp.com",
  projectId: "mangatagallo",
  storageBucket: "mangatagallo.appspot.com",
  messagingSenderId: "852075277671",
  appId: "1:852075277671:web:30ac1343aa9fb9f36a93c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const productsCollectionRef = collection(db, "products")

export async function getProducts(){
    const snapshot = await getDocs(productsCollectionRef)
    const products = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return products
}

export async function getProduct(id){
    const docRef = doc(db, "products", id)
    const snapshot = await  getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

// white cream hands oil photo by Mathilde Langevin
// Alesia Kozik -ulei trandafiri uscati
//
//
//
