const checkId=(id, allDataArray)=>{
    for(let item of allDataArray){
        if(id===item.groupId){
            return false
        }
    }
    return true;
}

const validateData=(id, newGroupItem, allDataArray)=>{
    const errorMessage=[];
    if(!checkId(id, allDataArray)) errorMessage.add("This ID is already exist");
    return true;
}

export {validateData}