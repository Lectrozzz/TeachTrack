import { insertData, updateData, deleteData } from '../backend/firebase.js';
import { fetchStorage, getDataArrayStorage, getStatusArrayStorage } from './storage.js';

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

const getGroupData = async () =>{
    const [activeArray, inactiveArray] = await getStatusArrayStorage();
    return [activeArray, inactiveArray];
};

const getAllGroupData = async () =>{
    const allDataArray = await getDataArrayStorage();
    return allDataArray;
}

const getGroupDataById = async (id)=>{
    const allDataArray = await getAllGroupData();
    return allDataArray.find((item)=>item.groupId===id);
}

const addGroupData = async (id, newGroupItem) =>{
    await insertData(id, newGroupItem);
    await fetchStorage();
}

const updateGroupData = async (id, field, newData) =>{
    await updateData(id, field, newData);
    await fetchStorage();
}

const deleteGroupData = async (id)=>{
    await deleteData(id);
    await fetchStorage();
}

export {createGroup, getGroupData, getAllGroupData, getGroupDataById, addGroupData, updateGroupData, deleteGroupData};
