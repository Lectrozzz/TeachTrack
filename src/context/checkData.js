const checkIdExist=(id, allDataArray)=>{
    for(let item of allDataArray){
        if(id===item.groupId){
            return false
        }
    }
    return true;
}

const checkIdFormat = (id)=>{
    // [\u0E00-\u0E7F] is Thai unicode range
    const IdRegex = /^([a-zA-Z]|[0-9]|[\u0E01-\u0E59]|[!@#$%^&*()_+{}\[\]:;<>,.?~\-|=])+$/;
    // debug
    // for(let text of id){
    //     if(!IdRegex.test(text))console.log("Invalid characters",text);
    // }
    return IdRegex.test(id);
}   

const checkStudentCount = (studentCount)=>{
    if(studentCount>0 && studentCount<30){
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

const validateAllData=(id, newGroupItem, allDataArray)=>{
    const errorMessage=[];
    if(!checkIdExist(id, allDataArray)) errorMessage.push("This ID is already exist");
    if(!checkIdFormat(id)) errorMessage.push("Invalid ID format");
    if(!checkStudentCount(newGroupItem.studentCount)) errorMessage.push("Student count should be between 1-30");
    if(!checkLanguage(newGroupItem.groupLanguage)) errorMessage.push("Invalid language");
    if(!checkDuration(newGroupItem.groupDuration)) errorMessage.push("Invalid duration");
    
    return [errorMessage]
}

export {validateAllData}