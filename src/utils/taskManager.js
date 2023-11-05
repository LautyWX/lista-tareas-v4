import {collection, doc , addDoc , updateDoc, deleteDoc} from 'firebase/firestore';
import db from "./firebase.js";

export const handleNewTarea = async (tarea) =>{
    const collectionRef= collection(db,"task");
    await addDoc(collectionRef,tarea)
}

export const handleDelete = async (id) => {
    const docRef = doc(db,"task",id);
    await deleteDoc(docRef);
}

export const handleEdit = async (id) => {
    const docRef = doc(db,"task",id);

    const newName = prompt("ingrese el nuevo nombre")

    await updateDoc(docRef,{
        "name":newName
    })
}
