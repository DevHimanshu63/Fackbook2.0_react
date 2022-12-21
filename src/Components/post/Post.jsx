import React from 'react'
import {MoreVert} from '@mui/icons-material'
import "./post.css"
export default function Post() {
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="posttopLeft">
            <img src="/Assets/img.jpg" alt="" className="postprofile" />
            <span className="postUser">Himanshu singh </span>
            <span className='postDate'>05 oct</span>
          </div>
          <div className="postTopright">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postcontent">Hey! it's my first post ):</span>
          <img className='postImg' src="/Assets/img.jpg" alt="" />
        </div>

        <div className="postBottom">
            <div className="postbottomLeft">
              <img className='likeIcon' src="/Assets/like.png" alt=""/>
              <img  className='likeIcon' src="/Assets/heart.png" alt=""/>
              <span className="likeCounter">1 people likes</span>
            </div>
            <div className="postbottomright">
                <span className='postcommentText'> 9 Comments</span>
            </div>
        </div>
      </div>
      
    </div>
  )
}
