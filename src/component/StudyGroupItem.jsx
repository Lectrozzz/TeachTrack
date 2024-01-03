// Import react
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Checkbox, Button, useToast } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Import context
import { updateGroupData } from "../context/groupData.js";

// Import assets
import "../assets/style/studyGroupItem.css"

const StudyGroupItem = (props) =>{
    const toast = useToast();
    const groupObj=props.obj;
    
    const [roundCount ,setRoundCount]=useState(groupObj.roundCount);
    const [currentLesson ,setCurrentLesson]=useState(groupObj.currentLesson);
    const [nextClass ,setNextClass]=useState(groupObj.nextClass);
    const [activeStatus ,setActiveStatus]=useState(groupObj.activeStatus);

    useEffect(()=>{
        props.fetchData();
    }, [activeStatus])

    const submitUpdatedData = async (field, newData) =>{
        await updateGroupData(groupObj.groupId,field, newData);
    }

    const activeStatusHandler = async () =>{
        const newActiveStatus = !activeStatus;
        await submitUpdatedData("activeStatus", newActiveStatus);
        setActiveStatus(newActiveStatus);
    }

    const saveDataHandler = () =>{
        submitUpdatedData("roundCount", roundCount);
        submitUpdatedData("currentLesson", currentLesson);
        submitUpdatedData("nextClass", nextClass);
        toast({
            position: "top",
            title: "Data Updated",
            description: "Study Group progress has been updated.",
            status: "success",
            duration: 5000,
            isClosable: true,
        })
    }

    return(
        <div className={`itemContainer ${(activeStatus) ? "activeContainer" : "inactiveContainer"}`}>
            <div className='groupIdContainer' >
                <Link to={`/editgroup/${groupObj.groupId}`} >
                    <h2 className={(activeStatus) ? "activeHeader":"inactiveHeader"}>{groupObj.groupId}</h2> 
                </Link>
            </div>
            <div className="gridItem1 gridItemEnd">
                <label htmlFor="activeStatus" className={(activeStatus) ? "activeText":"inactiveText"} >{(activeStatus) ? "ACTIVE":"INACTIVE"}</label>
                <Checkbox isChecked={activeStatus} onChange={activeStatusHandler} colorScheme='green' size='lg'></Checkbox>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="roundCount">Round</label><br />
                    <input id="roundCount" name="roundCount" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="number" value={roundCount} min="0" disabled={!activeStatus} onChange={(e)=>setRoundCount(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="previousClass">Current Lesson</label><br />
                    <input id="previousClass" name="previousClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="text" value={currentLesson} disabled={!activeStatus} onChange={(e)=>setCurrentLesson(e.target.value)}/>
                </div>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="nextClass">Next Class</label><br />
                    <input id="nextClass" name="nextClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="date" value={nextClass} disabled={!activeStatus} onChange={(e) => setNextClass(e.target.value)} />
                </div>
            </div>
            <div className="gridItem3 gridItemCenter ">
                <Button rightIcon={<CheckIcon /> } isDisabled={!activeStatus} size='sm' variant={(activeStatus) ? "blueButton": "inactiveFormButton"} zIndex="10" onClick={saveDataHandler} >Save</Button>
            </div>
        </div>
    );
};

export default StudyGroupItem;