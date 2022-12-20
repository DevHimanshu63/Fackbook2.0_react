import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">Lomosocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search for friends, post and videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarItemBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarItemBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarItemBadge">1</span>
          </div>
        </div>
        <img src="Assets/img.jpg" alt="" className="topbarimg" />
      </div>

    </div>
  )
}

export default Topbar