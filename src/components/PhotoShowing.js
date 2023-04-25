import React, { useContext, useEffect, useState } from "react"
import "../styles/Style.css"
import { imageContext } from "../App"
import { useNavigate } from "react-router-dom"
function PhotoShowing(){
    const [photos,setPhotos]=useState("")
    const [searchText,setSearchText]=useState("")
    const[searchBtnClick,setSearchBtnClick]=useState("")
    const[hover,setHover]=useState(false)
    const {setBookmarked}=useContext(imageContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if(searchBtnClick){
        fetch(`https://api.unsplash.com/photos/?client_id=zoS6jP7Txxj3HQt6Xq_DWzeCXoYu65yHxi_VAkb3oh0`)
        .then(res=>res.json()).then(data=>setPhotos(data))
        }
    },[searchBtnClick])

let filteredData
if(photos){ 
          filteredData=photos.filter(image=>{
            const searchWord=searchBtnClick.toLocaleLowerCase()
            const imgDescription=image.alt_description
            
            return(imgDescription.includes(searchWord))
        })
    }

    return <div id="main-div">
        <div className="head-div">
        <h2>React Photo Search</h2>
        <button onClick={()=>{
            navigate("/bookmark")
        }}>Bookmark</button>
        </div>
        <div className="search-div">
            <input type="text" onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
                setSearchBtnClick(searchText)
                setSearchText("")
            }}>Search</button>
        </div>
        <div className="img-div">
            {
                filteredData &&  filteredData.map(image=>{
                    return <div id="img-size-div"  onMouseEnter={()=>{setHover(true)}} 
                    onMouseLeave={()=>{setHover(false)}}>
                        <img src={image.urls.raw} className={hover===true ? "hover" :""} />
                       { hover && <button id="add-bookmark" onClick={()=>{
                        setBookmarked(data=>[...data,image])
                       }}>Add to Bookmark</button>}
                     </div>   
                })
            }
        </div>
        
        
    </div>
}
export default PhotoShowing