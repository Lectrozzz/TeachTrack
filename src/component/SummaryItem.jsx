// Import assests
import "../assets/style/summaryItem.css";

const SummaryItem = (props)=>{
    const tag = props.tag;
    const data = props.data;
    const count = props.count;

    return(
        <div className={`summaryItemContainer ${(tag === "header") ? "summaryHeaderContainer": (tag=== "footer") ? "summaryFooterContainer" : (count%2===0) ? "evenContainerItem" : "oddContainerItem" }`} >
            <div className="summaryLongItem" >{data.groupId}</div>
            <div className="summaryShortItem" >{data.roundCount}</div>
            <div className="summaryShortItem" >{data.teachingFee}</div>
        </div>
    );
}

export default SummaryItem;