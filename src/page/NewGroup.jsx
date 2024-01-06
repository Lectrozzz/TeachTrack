// Import react
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useToast, Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

// Import context
import {createGroup, addGroupData, getAllGroupData} from "../context/groupData.js";
import {validateAllData} from "../context/checkData.js";

// Import assets
import "../assets/style/groupForm.css";
import "../assets/style/button.css";

const NewGroup = ()=>{
    const navigate=useNavigate();
    const toast = useToast();
    const tooltipText = "The ID must be unique and can only include English letters, Thai letters, numbers, and certain special characters. No spaces are allowed."

    // Input data
    const [groupId, setGroupId]=useState("");
    const [studentCount, setStudentCount]=useState(1);
    const [groupLanguage, setGroupLanguage]=useState("Thai");
    const [groupDuration, setGroupDuration]=useState("90");
    const [groupCourse, setGroupCourse]=useState("");
    const [groupType, setGroupType]=useState("");
    const [groupLocation, setGroupLocation]=useState("");
    const [note, setNote]=useState("");

    // Submit data
    const insertData= async (e)=>{
        e.preventDefault();
        const newGroupItem = createGroup(groupId, studentCount, groupLanguage, groupDuration, groupCourse, groupType, groupLocation, note);
        
        const allDataArray = await getAllGroupData();
        const [errorMessage] = validateAllData(groupId, newGroupItem, allDataArray);
        if(errorMessage.length > 0){
            for(let message of errorMessage){
                toast({
                    title: "Error",
                    description: message,
                    status: "error",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                });
            }
        }
        else{
            await addGroupData(groupId, newGroupItem);
            toast({
                title: "Complete",
                description: "New study group has been added.",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const cancelHandler=()=>{
        navigate("/");
    }

    return(
        <>
            <h1>New Group</h1>
            <form onSubmit={insertData}>
                <div className="groupFormGrid">
                    <div className="gridFormRowItem3">
                        <label htmlFor="groupId">ID <span className="required">*  </span></label>
                        <Tooltip label={tooltipText} closeOnClick={false} placement="right" >
                            <InfoOutlineIcon />
                        </Tooltip>
                        <br />
                        <input id="groupId" name="groupId" className="partialTextForm" type="text" value={groupId} onChange={(e)=>setGroupId(e.target.value)} required/>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="studentCount">Student <span className="required">*</span></label><br />
                        <input id="studentCount" name="studentCount" className="normalInputForm" type="number" min="1" value={studentCount} onChange={(e)=>setStudentCount(parseInt(e.target.value))}/>
                    </div>
                    <div className="gridFormRowItem1"> 
                        <label htmlFor="groupLanguage">Language <span className="required">*</span></label><br />
                        <select name="groupLanguage" id="groupLanguage" className="normalInputForm" value={groupLanguage} onChange={(e)=>setGroupLanguage(e.target.value)}>
                            <option value="Thai">Thai</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="groupDuration">Duration (hours) <span className="required">*</span></label><br />
                        <select name="groupDuration" id="groupDuration" className="normalInputForm" value={groupDuration} onChange={(e)=>setGroupDuration(e.target.value)}>
                            <option value="60">1 hour</option>
                            <option value="90">1.30 hours</option>
                            <option value="120">2 hours</option>
                            <option value="180">3 hours</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="groupCourse">Course</label><br />
                        <select name="groupCourse" id="groupCourse" className="normalInputForm" value={groupCourse} onChange={(e)=>setGroupCourse(e.target.value)}>
                            <option value="" disabled hidden>Select course</option>
                            <option value="Python Start Year1">Python start Y1</option>
                            <option value="Python Start Year2">Python start Y2</option>
                            <option value="Python Pro Year1">Python pro Y1</option>
                            <option value="Python Pro Year2">Python pro Y2</option>
                            <option value="Mars Academy">Mars Academy</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="groupType">Type</label><br />
                        <select name="groupType" id="groupType" className="normalInputForm" value={groupType} onChange={(e)=>setGroupType(e.target.value)}>
                            <option value="" disabled hidden>Select type</option>
                            <option value="Introductory Lesson">Introductory Lesson</option>
                            <option value="Group Class">Group Class</option>
                            <option value="Private Class">Private Class</option>
                            <option value="Make-up Class">Make-up Class</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="groupLocation">Location</label><br />
                        <select name="groupLocation" id="groupLocation" className="normalInputForm" value={groupLocation} onChange={(e)=>setGroupLocation(e.target.value)}>
                            <option value="" disabled hidden>Select location</option>
                            <option value="Im Park Samyan">Impark Samyan</option>
                            <option value="Online">Online</option>
                            <option value="Gateway Ekkamai">Gateway Ekamai</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem3">
                        <label htmlFor="note">Note</label><br />
                        <input id="note" name="note" type="text" className="fullTextForm" value={note} onChange={(e)=>setNote(e.target.value)}/>
                    </div>
                    <div className="gridFormRowItem3 buttonRow">
                        <button className="btn grayButton" onClick={cancelHandler}>Cancel</button>
                        <input type="submit" className="btn blueButton leftMost" value="Create" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default NewGroup;