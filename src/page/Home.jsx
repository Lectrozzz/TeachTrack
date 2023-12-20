// Import react
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

// Import context
import { getGroupData, initializeData } from "../context/groupData.js";

// Import assets
import "../assets/style/home.css";

// Import component
import StudyGroupItem from "../component/StudyGroupItem";

const Home=()=>{
    const navigate=useNavigate();

    const [activeArray, setActiveArray] = useState([]);
    const [inactiveArray, setInactiveArray] = useState([]);

    const fetchData = async ()=>{
        await initializeData();
        const [newActiveArray, newInactiveArray]= getGroupData();
        setActiveArray(newActiveArray);
        setInactiveArray(newInactiveArray);
    }

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
                {activeArray.map((item)=> <StudyGroupItem id={item.groupId} key={item.groupId} obj={item} fetchData={fetchData} />)}
                {inactiveArray.map((item)=> <StudyGroupItem id={item.groupId} key={item.groupId} obj={item} fetchData={fetchData} />)}
            </div>
        </>
    );
}

export default Home;