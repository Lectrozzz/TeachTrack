// Import react
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';

// Import context
import { getGroupData } from "../context/groupData.js";

// Import assets
import "../assets/style/home.css";

// Import component
import StudyGroupItem from "../component/StudyGroupItem";

const Home=()=>{
    const navigate=useNavigate();

    const [activeArray, setActiveArray] = useState([]);
    const [inactiveArray, setInactiveArray] = useState([]);

    const fetchData = useCallback(async ()=>{
        const [newActiveArray, newInactiveArray]= await getGroupData();
        setActiveArray(newActiveArray);
        setInactiveArray(newInactiveArray);
    },[activeArray, inactiveArray]);

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
            <div className="headerContainer">
                <div className="headerItem">
                    <h1>All Groups</h1>
                </div>
                <div className="headerItem">
                    <button className="btn blueButton" onClick={()=>{navigate("/newgroup")}}>New</button>
                </div>
            </div>
            <div>
                {activeArray.map((item)=> <li key={item.groupId} className="listedItem" ><StudyGroupItem id={item.groupId} obj={item} fetchData={fetchData} /></li>)}
                {inactiveArray.map((item)=> <li key={item.groupId} className="listedItem"><StudyGroupItem id={item.groupId} obj={item} fetchData={fetchData} /></li>)}
            </div>
        </>
    );
}

export default Home;