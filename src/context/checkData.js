const checkIdExist=(id, allDataArray)=>{
    for(let item of allDataArray){
        if(id===item.groupId){
            return false
        }
    }
    return true;
}

const checkStudentCount = (studentCount)=>{
    if(studentCount>0 && studentCount<36500){
        return true;
    }
    return false;
}

const checkLanguage = (language)=>{
    if(language==="Thai" || language==="English"){
        return true;
    }
    return false;
}

const checkDuration = (duration)=>{
    if(duration==="60" || duration==="90" || duration==="120" || duration==="180"){
        return true;
    }
    return false;
}

const validateData=(id, newGroupItem, allDataArray)=>{
    const errorMessage=[];
    if(!checkIdExist(id, allDataArray)) errorMessage.add("This ID is already exist");
    if(!checkStudentCount(newGroupItem.studentCount)) errorMessage.add("Invalid student count");
    if(!checkLanguage(newGroupItem.groupLanguage)) errorMessage.add("Invalid language");
    if(!checkDuration(newGroupItem.groupDuration)) errorMessage.add("Invalid duration");
    
    return [errorMessage.length===0, errorMessage]
}

export {validateData}