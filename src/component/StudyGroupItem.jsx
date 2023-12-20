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
    const [previousClass ,setPreviousClass]=useState(groupObj.previousClass);
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
            <div className="gridItem3 flexItemContainer">
                <div>
                    <Link to={`/editgroup/${groupObj.groupId}`} >
                        <h2 className={(activeStatus) ? "activeHeader":"inactiveHeader"}>{groupObj.groupId}</h2> 
                    </Link>
                </div>
                <div>
                    <label htmlFor="activeStatus" className={(activeStatus) ? "activeText":"inactiveText"} >{(activeStatus) ? "ACTIVE":"INACTIVE"}</label>
                    <input type="checkbox" name="activeStatus" id="activeStatus" checked={activeStatus} onChange={activeStatusHandler}/>
                </div>
            </div>
            <div className="gridItem1 flexActiveStart">
                <div>
                    <label htmlFor="roundCount">Round</label><br />
                    <input id="roundCount" name="roundCount" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="number" value={roundCount} min="0" disabled={!activeStatus} onChange={roundCountHandler} />
                </div>
            </div>
            <div className="gridItem1 flexActiveCenter">
                <div>
                    <label htmlFor="previousClass">Previous</label><br />
                    <input id="previousClass" name="previousClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="text" value={previousClass} disabled={!activeStatus} onChange={(e)=>setPreviousClass(e.target.value)} onBlur={()=>submitUpdatedData("previousClass", previousClass)}/>
                </div>
            </div>
            <div className="gridItem1 flexActiveEnd">
                <div>
                    <label htmlFor="nextClass">Next Class</label><br />
                    <input id="nextClass" name="nextClass" className={`normalInputForm ${(activeStatus) ? "" : "inactiveForm"}`} type="date" value={nextClass} disabled={!activeStatus} onChange={(e) => nextClassHandler(e)} />
                </div>
            </div>
        </div>
    );
};

export default StudyGroupItem;