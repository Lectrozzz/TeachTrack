// Import react
import { useMemo, useState, useEffect } from 'react';
import { useNavigate, Link} from "react-router-dom";

// Import context
import { updateGroupData } from "../context/groupData.js";

// Import assets
import "../assets/style/studyGroupItem.css"

const StudyGroupItem = (props) =>{
    const groupObj=props.obj;
    
    const [roundCount ,setRoundCount]=useState(groupObj.roundCount);
    const [currentLesson ,setCurrentLesson]=useState(groupObj.currentLesson);
    const [nextClass ,setNextClass]=useState(groupObj.nextClass);
    const [activeStatus ,setActiveStatus]=useState(groupObj.activeStatus);

    useEffect(()=>{
        console.log("StudyGroupItem rendered");
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

    const nextClassHandler = (e) =>{
        const newNextClass = e.target.value;
        submitUpdatedData("nextClass", newNextClass);
        setNextClass(newNextClass);
    }

    const roundCountHandler = (e)=>{
        const newRoundCount = parseInt(e.target.value);
        submitUpdatedData("roundCount", newRoundCount);
        setRoundCount(newRoundCount);
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
                <input type="checkbox" name="activeStatus" id="activeStatus" checked={activeStatus} onChange={activeStatusHandler}/>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="roundCount">Round</label><br />
                    <input id="roundCount" name="roundCount" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="number" value={roundCount} min="0" disabled={!activeStatus} onChange={roundCountHandler} />
                </div>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="previousClass">Current Lesson</label><br />
                    <input id="previousClass" name="previousClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="text" value={currentLesson} disabled={!activeStatus} onChange={(e)=>setCurrentLesson(e.target.value)} onBlur={()=>submitUpdatedData("currentLesson", currentLesson)}/>
                </div>
            </div>
            <div className="gridItem1">
                <div>
                    <label htmlFor="nextClass">Next Class</label><br />
                    <input id="nextClass" name="nextClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="date" value={nextClass} disabled={!activeStatus} onChange={(e) => nextClassHandler(e)} />
                </div>
            </div>
        </div>
    );
};

export default StudyGroupItem;