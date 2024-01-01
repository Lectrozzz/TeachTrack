import { getAllGroupData } from "./groupData";

const basicRounding = (num) => {
    return num - num%10 + 10;

}

const calculateFee = (item) => {
    //baseline for normal class (90 minutes)
    const baseLine=parseInt(import.meta.env.VITE_REACT_APP_BASELINE);
    //baseline for introductory lesson class (always 60 minutes)
    const ilBaseLine=parseInt(import.meta.env.VITE_REACT_APP_IL_BASELINE);
    //additional for class with extra condition (Extra student, english language, etc.)
    const additionalFee=parseInt(import.meta.env.VITE_REACT_APP_ADDITIONAL_FEE);
    
    let teachingFee= (item.groupType==="Introductory Lesson") ? ilBaseLine : baseLine;
    if(item.groupLanguage==="English"){
        teachingFee+=additionalFee;
    }
    if(item.studentCount>=3){
        teachingFee+=additionalFee;
    }
    if(item.groupDuration!=="90" && item.groupType!=="Introductory Lesson"){
        switch(item.groupDuration){
            case "60":
                teachingFee = parseInt(teachingFee/3*2)
                break;
            case "120":
                teachingFee = parseInt(teachingFee/3*4);
                if(teachingFee%10!==0){
                    teachingFee = basicRounding(teachingFee);
                }
                break;
            case "180":
                teachingFee = parseInt(teachingFee*2);
                break;
        }
    }
    return teachingFee*item.roundCount;
}

const summarizeData = async () => {
    const allDataArray = await getAllGroupData();

    const summaryArray = [];
    let totalRound = 0, totalFee=0;
    for(let item of allDataArray){
        // console.log(item);
        let teachingFee = calculateFee(item);
        totalRound+=item.roundCount;
        totalFee+=teachingFee;
        summaryArray.push({groupId:item.groupId, roundCount:item.roundCount, teachingFee:teachingFee});
    }
    return {summaryArray, totalRound, totalFee};
}

export { summarizeData };