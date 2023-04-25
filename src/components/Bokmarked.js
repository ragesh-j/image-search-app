import { useContext } from "react";
import { imageContext } from "../App";
import "../styles/Bookmarked.css"
function Bookmarked(){
    const {bookmarked}=useContext(imageContext)

    return <div id="bookmarked-main-head">
        <div id="head-div">
        <h2>Bookmarked Images</h2>
        </div>
        
    
    <div id="main-div-bookmarked">
        
        
        {
            bookmarked && bookmarked.map(image=>{
               return<div className="bookmarked-img">
                <img src={image.urls.raw} />
                </div>
            })
        }
    </div>
    </div>
}
export default Bookmarked;