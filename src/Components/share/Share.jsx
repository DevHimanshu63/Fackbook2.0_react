import './share.css'
import {PermMedia,Label,Room, EmojiEmotions} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/Assets/img.jpg" className='shreprofileImg' alt="" />
                <input className='shareInput' placeholder="what's in your mind" type="text" />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareoptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className='shareoptionIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className='shareoptionIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className='shareoptionIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="golden" className='shareoptionIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="sharebtn">Share</button>
            </div>
        </div>
    </div>
  )
}
