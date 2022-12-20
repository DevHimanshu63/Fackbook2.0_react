import { Chat, RssFeed ,Event,PlayCircle,Group,Work, Bookmark,QuestionAnswer, School} from '@mui/icons-material'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <RssFeed className='sidebaricon'/>
            <span className="sidebarlistItemtext">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <Chat className='sidebaricon'/>
            <span className="sidebarlistItemtext">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircle className='sidebaricon'/>
            <span className="sidebarlistItemtext">Videos</span>
          </li>
          <li className="sidebarlistItem">
            <Group className='sidebaricon'/>
            <span className="sidebarlistItemtext">Group</span>
          </li>
          <li className="sidebarlistItem">
            <Bookmark className='sidebaricon'/>
            <span className="sidebarlistItemtext">Bookmark</span>
          </li>
          <li className="sidebarlistItem">
            <QuestionAnswer className='sidebaricon'/>
            <span className="sidebarlistItemtext">QuestionAnswer</span>
          </li>
          <li className="sidebarlistItem">
            <Work className='sidebaricon'/>
            <span className="sidebarlistItemtext">Job</span>
          </li>
          <li className="sidebarlistItem">
            <Event className='sidebaricon'/>
            <span className="sidebarlistItemtext">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <School className='sidebaricon'/>
            <span className="sidebarlistItemtext">Feed</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
          <li className="sidebarFriend">
            <img src="/Assets/img.jpg" className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">Himanshu singh</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
