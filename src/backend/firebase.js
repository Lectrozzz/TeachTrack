// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STOREAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MSG_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const fetchData = async() => {
    const testArray=[];
    try{
        const querySnapshot = await getDocs(collection(db, "studyGroup"));
        querySnapshot.docs.forEach((doc) => (
                testArray.push({...doc.data(), id:doc.id})
        ));
        return testArray;
    }
    catch(e){
        console.log(e.message);
    }   
}

const insertData = async (id, newGroupItem) =>{
    try{
        await setDoc(doc(db, "studyGroup", id),{
            groupId: newGroupItem.groupId,
            studentCount: newGroupItem.studentCount,
            groupLanguage: newGroupItem.groupLanguage,
            groupDuration: newGroupItem.groupDuration,
            groupCourse: newGroupItem.groupCourse,
            groupType: newGroupItem.groupType,
            groupLocation: newGroupItem.groupLocation,
            roundCount: newGroupItem.roundCount,
            currentLesson: newGroupItem.currentLesson,
            nextClass: newGroupItem.nextClass,
            note: newGroupItem.note,
            activeStatus: newGroupItem.activeStatus
        });
        // Alert message will be changed later
        alert("New study group has been added");
    }
    catch(e){
        console.log(e.message);
    }
}

const updateData = async(id, field, updatedData)=>{
    const studyGroupRef=doc(db, "studyGroup", id);

    switch(field){
        case "studentCount":{
            try{
                await updateDoc(studyGroupRef,{studentCount:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "groupLanguage":{
            try{
                await updateDoc(studyGroupRef,{groupLanguage:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "groupDuration":{
            try{
                await updateDoc(studyGroupRef,{groupDuration:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "groupCourse":{
            try{
                await updateDoc(studyGroupRef,{groupCourse:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "groupType":{
            try{
                await updateDoc(studyGroupRef,{groupType:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "groupLocation":{
            try{
                await updateDoc(studyGroupRef,{groupLocation:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "roundCount":{
            try{
                await updateDoc(studyGroupRef,{roundCount:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }    
        }
        case "currentLesson":{
            try{
                await updateDoc(studyGroupRef,{currentLesson:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }  
        }
        case "nextClass":{
            try{
                await updateDoc(studyGroupRef,{nextClass:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }  
        }
        case "note":{
            try{
                await updateDoc(studyGroupRef,{note:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }  
        }
        case "activeStatus":{
            try{
                await updateDoc(studyGroupRef,{activeStatus:updatedData});
                break;
            }
            catch(e){ console.log(e.message) }  
        }
    }
}

const deleteData= async (id) =>{
    try{
        console.log(id);
        await deleteDoc(doc(db, "studyGroup", id));
        // Alert message will be changed later
        alert(id+" has been deleted");
    }
    catch(e){
        console.log(e.message);
    }
}

export {fetchData, insertData, updateData, deleteData};


