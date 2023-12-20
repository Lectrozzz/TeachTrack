//Import react
import { useState } from 'react';

// Import context
import { summarizeData } from "../context/summaryData.js";

// Import component
import SummaryItem from "../component/SummaryItem.jsx";
import HomeButton from "../component/HomeButton.jsx";

const Summary = ()=>{
    const dataObject = summarizeData();

    // Data state
    const summaryArray = dataObject.summaryArray;
    const totalRound = dataObject.totalRound;
    const totalFee = dataObject.totalFee;

    const headerItem = {groupId:"Group ID", roundCount:"Round", teachingFee:"Fee"};
    const summaryItem = {groupId:"Total", roundCount:totalRound, teachingFee:totalFee};

    return(
        <>
            <h1>Summary</h1>
            <div>
                <SummaryItem data={headerItem} tag="header" />
                {summaryArray.map((item, index)=> <SummaryItem data={item} key={item.groupId} tag="item" count={index} />)}
                <SummaryItem data={summaryItem} tag="footer" />
            </div>
            <div className="homeButtonContainer">
                <HomeButton/>
            </div>
        </>
    );
}

export default Summary;