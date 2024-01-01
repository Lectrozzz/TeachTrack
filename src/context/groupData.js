import { fetchData, insertData, updateData, deleteData } from '../backend/firebase.js';

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
        this.currentLesson="";
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

const getAllGroupData = async () =>{
    if(allDataArray.length===0) await fetchNewData();
    return allDataArray;
}

const getGroupDataById = async (id)=>{
    const allDataArray = await getAllGroupData();
    for(let item of allDataArray){
        if(item.groupId===id){
            return item;
        }
    }
    return null;
}

const addGroupData = async (id, newGroupItem) =>{
    await insertData(id, newGroupItem);
    fetchNewData();
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
