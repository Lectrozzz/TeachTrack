// Import react
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast, useDisclosure } from '@chakra-ui/react'

// Import components
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from '@chakra-ui/react'

// Import context
import {getGroupDataById, updateGroupData, deleteGroupData } from "../context/groupData.js";

// Import assets
import "../assets/style/editGroup.css";

const EditGroup = () =>{
    const param=useParams();
    const navigate=useNavigate();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const fetchData = async ()=>{
        const selectedItem= await getGroupDataById(param.selectedId);
        setGroupId(selectedItem.groupId);
        setGroupLanguage(selectedItem.groupLanguage);
        setGroupDuration(selectedItem.groupDuration);
        setStudentCount(selectedItem.studentCount);
        setGroupCourse(selectedItem.groupCourse);
        setGroupType(selectedItem.groupType);
        setGroupLocation(selectedItem.groupLocation);
        setNote(selectedItem.note);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Input data
    const [groupId, setGroupId]=useState("");
    const [studentCount, setStudentCount]=useState(1);
    const [groupLanguage, setGroupLanguage]=useState("Thai");
    const [groupDuration, setGroupDuration]=useState("90");
    const [groupCourse, setGroupCourse]=useState("");
    const [groupType, setGroupType]=useState("");
    const [groupLocation, setGroupLocation]=useState("");
    const [note, setNote]=useState("");

    const saveDataHandler=()=>{
        updateGroupData(groupId, "studentCount", studentCount)
        updateGroupData(groupId, "groupLanguage", groupLanguage)
        updateGroupData(groupId, "groupDuration", groupDuration)
        updateGroupData(groupId, "groupCourse", groupCourse)
        updateGroupData(groupId, "groupType", groupType)
        updateGroupData(groupId, "groupLocation", groupLocation)
        updateGroupData(groupId, "note", note)
        
        toast({
            title: "Complete",
            description: "Study group data has been updated.",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
        });

        navigate("/");
    }

    const deleteGroupHandler = ()=>{
        const deleteGroupPromise = deleteGroupData(groupId)
        toast.promise(deleteGroupPromise, {
            loading: {title: "Deleting...", description: "This might take a while", position: "top", duration: 5000, isClosable: true,},
            success: {title: "Complete", description: "Study group has been deleted.", position: "top", duration: 5000, isClosable: true,},
            error: (err) => {
                return "Something went wrong";
            }
        })

        deleteGroupPromise.then(()=>{
            navigate("/");
        })
    }

    return(
        <>
            <div className="editGroupIdContainer">
                <h2>{groupId}</h2>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} >
                <div className="groupFormGrid">
                    <div className="gridFormRowItem3">
                        <label htmlFor="groupId">ID</label><br />
                        <input id="groupId" name="groupId" className="partialTextForm" type="text" value={groupId} onChange={(e)=>setGroupId(e.target.value)} disabled />
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="studentCount">Student</label><br />
                        <input id="studentCount" name="studentCount" className="normalInputForm" type="number" min="1" value={studentCount} onChange={(e)=>setStudentCount(parseInt(e.target.value))}/>
                    </div>
                    <div className="gridFormRowItem1"> 
                        <label htmlFor="groupLanguage">Language</label><br />
                        <select name="groupLanguage" id="groupLanguage" className="normalInputForm" value={groupLanguage} onChange={(e)=>setGroupLanguage(e.target.value)}>
                            <option value="Thai">Thai</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="gridFormRowItem1">
                        <label htmlFor="groupDuration">Duration (hours)</label><br />
                        <select name="groupDuration" id="groupDuration" className="normalInputForm" value={groupDuration} onChange={(e)=>setGroupDuration(e.target.value)}>
                            <option value="60">1 hour</option>
                            <option value="90">1.30 hours</option>
                            <option value="120">2 hours</option>
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
                        <button className="btn redButton" onClick={onOpen}>Delete</button>
                        <button className="btn blueButton leftMost" onClick={saveDataHandler}>Save</button>
                    </div>
                </div>
            </form>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} motionPreset='slideInBottom' >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold' bg="primary.white" borderTopRadius="10" >
                            Delete study group
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter borderBottomRadius="10" >
                            <Button ref={cancelRef} onClick={onClose} >
                                Cancel
                            </Button>
                            <Button onClick={deleteGroupHandler} colorScheme='red' ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default EditGroup;