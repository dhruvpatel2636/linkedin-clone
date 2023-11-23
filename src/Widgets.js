import React from 'react'
import './Widgets.css'
import { FaInfoCircle } from "react-icons/fa";
import { MdFiberManualRecord } from "react-icons/md";

function Widgets() {
    const newsArticle=(heading,title)=>{
        return(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                    <MdFiberManualRecord className='record_icon'/>
            </div>
            <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{title}</p>
            </div>
        </div>
        )
    }
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <FaInfoCircle />
      </div>
      {newsArticle("Dhruv", "Top news -9099 readers")}
      {newsArticle("corona", "corona virus is massive ")}
      {newsArticle("tb", "dwjdhbwjodbwqohdow")}
      {newsArticle("Dhruwwdv", "egergregrgregrgrgregr")}
      {newsArticle("fewfefwef", "Top news -rththt readers")}
      {newsArticle("trhtrht", "ergregergregregergrerger gregreg")}
    </div>
  );
}

export default Widgets
