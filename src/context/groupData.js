import { fetchData, insertData, updateData, deleteData } from '../backend/firebase.js';
import { validateData } from './checkData.js';

// Global data
let allDataArray = [];
let activeArray = [];
let inactiveArray = [];

class groupItem{
    constructor(groupId, studentCount, groupLanguage, groupDuration, groupCourse, groupType, groupLocation, note){
        // Group Id
        this.groupId=groupId;
        //Group details
        this.studentCount=studentCount;
        this.groupLanguage=groupLanguage;
        this.groupDuration=groupDuration;
        this.groupCourse=groupCourse;
        this.groupType=groupType;
        this.groupLocation=groupLocation;
        // Group progress
        this.roundCount=0;
        this.previousClass="";
        this.nextClass="";
        this.note=note;
        this.activeStatus=true;
    }
}

const createGroup = (groupId, studentCount, groupLanguage, groupDuration, groupCourse, groupType, groupLocation, note) =>{
    let newGroup = new groupItem(groupId, studentCount, groupLanguage, groupDuration, groupCourse, groupType, groupLocation, note);
    return newGroup;
}

const initializeData = async ()=>{
    await fetchNewData();
}

const fetchNewData = async ()=>{
    //fetch data from backend
    const fetchedArray = await fetchData();
    // console.log(fetchedArray);
    allDataArray = [...fetchedArray];
    activeArray = [...fetchedArray.filter((item) => item.activeStatus)];
    inactiveArray = [...fetchedArray.filter((item) => !item.activeStatus)];
}

const getGroupData = () =>{
    return [activeArray, inactiveArray];
};

const getAllGroupData = () =>{
    return allDataArray;
}

const getGroupDataById = (id)=>{
    for(let item of allDataArray){
        if(item.groupId===id){
            return item;
        }
    }
}

const addGroupData = async (id, newGroupItem) =>{
    if(validateData(id, newGroupItem, allDataArray)){
        await insertData(id, newGroupItem);
        fetchNewData();
    }
}

const updateGroupData = async (id, field, newData) =>{
    await updateData(id, field, newData);
    fetchNewData();
}

const deleteGroupData = async (id)=>{
    await deleteData(id);
    fetchNewData();
}

export {createGroup, getGroupData, getAllGroupData, getGroupDataById, addGroupData, updateGroupData, deleteGroupData, initializeData};


const loadDummyData = ()=> {
    // const group1= new groupItem("c176_private_pk","Python Start Year1", "Private Class", "Im Park Samyan", 1, 16, "M5L4 first half", "", true);
    // addData(group1.groupId, group1);

    const group2= new groupItem("c425_private_Idea","Python Start Year1", "Private Class", "Online", 1, 7, "M3L4", "", "", true);
    addGroupData(group2.groupId, group2);
}

