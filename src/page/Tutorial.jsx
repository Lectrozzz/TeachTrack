//Import assets
import "../assets/style/tutorial.css";
import newGroupFormImage from "../assets/image/New_Group_Form.jpg";
import activeGroupItemImage from "../assets/image/Active_Group_Item.jpg";
import inactiveGroupItemImage from "../assets/image/Inactive_Group_Item.jpg";
import editGroupFormImage from "../assets/image/Edit_Group_Form.jpg";
import summaryPageImage from "../assets/image/Summary_Page.jpg";

const Tutorial = () =>{
    return(
        <>
            <h1>Tutorial</h1>
            <div className="tutorialContainer" >
                <div className="tutorialSection" >
                    <div className="tutorialHeaderContainer" >
                        <h2>1.Create a new study group</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>Click the "New" button on the top right corner of the home page. It will navigate to the "New Group" page.</p>
                        <div className="tutorialMediaContainer" >
                            <button className="btn blueButton">New</button>
                        </div>
                        <p>Enter your study group information on the "New Group" form. ( only Group ID is required, the rest are optional )</p>
                        <div className="tutorialMediaContainer">
                            <img src={newGroupFormImage} alt="New Group Form" className="fitImage" />
                            <p className="imageDescription" >New Group Form</p>
                        </div>
                        <p>Click "Create" button if you want to save the group information or click "Cancel" button if you don't want to save.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>2.Track your group progress</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>You can check your group list on the home page. Each item contains round count, previous class content,
                        next class date and current status ( active / inactive ) which you can easily edit by yourself after you finish your class.</p>
                        <div className="tutorialMediaContainer">
                            <img src={activeGroupItemImage} alt="Active Group Item" className="fitImage" />
                            <p className="imageDescription" >Active Group Item</p>
                        </div>
                        <div className="tutorialMediaContainer">
                            <img src={inactiveGroupItemImage} alt="Inactive Group Item" className="fitImage" />
                            <p className="imageDescription" >Inactive Group Item</p>
                        </div>
                        <p>When you change the group status the order of the item will be reordered automatically.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>3.Edit and delete your group</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>Click on the group ID inside group item to enter "Edit Group" page which you can edit and delete your group details.</p>
                        <div className="tutorialMediaContainer">
                            <img src={editGroupFormImage} alt="Edit Group Page" className="fitImage" />
                            <p className="imageDescription" >Edit Group Form</p>
                        </div>
                        <p>Click "Save" button if you want to save the group detail or click "Delete" button if you want to delete this study group.</p>
                    </div>
                </div>
                <div className="tutorialSection">
                    <div className="tutorialHeaderContainer" >
                        <h2>4.Check your teaching fee summary</h2>
                    </div>
                    <hr />
                    <div className="tutorialContentContainer" >
                        <p>You can check your teaching fee and round count of each group along with total amount of them combined from "Summary page".</p>
                        <div className="tutorialMediaContainer">
                            <img src={summaryPageImage} alt="Summary Page" className="fitImage" />
                            <p className="imageDescription" >Summary Page</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutorial;