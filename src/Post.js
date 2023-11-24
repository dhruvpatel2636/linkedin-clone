import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

const Post=forwardRef(({name,description,message,photoUrl},ref) =>{
   const displayName = name ? name : "No Name";
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        {/* Conditionally render Avatar based on the availability of photoUrl */}
        {photoUrl ? (
          <Avatar src={photoUrl}>{displayName[0]}</Avatar>
        ) : (
          <Avatar>{displayName[0]}</Avatar>
        )}
        <div className="post_info">
          <h2>{displayName}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={FaRegThumbsUp} title="Like" color="gray" />
        <InputOption Icon={FaRegCommentDots} title="Comment" color="gray" />
        <InputOption Icon={CiShare2} title="Share" color="gray" />
        <InputOption Icon={IoMdSend} title="Send" color="gray" />
      </div>
    </div>
  );

})

export default Post 
