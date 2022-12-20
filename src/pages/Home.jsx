import React from 'react'
import './home.css'
import Feed from '../Components/topbar/feed/Feed'
import Rightbar from '../Components/topbar/rightbar/Rightbar'
import Topbar from '../Components/topbar/Topbar'
import Sidebar from '../Components/topbar/sidebar/Sidebar'
function Home() {
  return (
    <div>
        <Topbar/>
        <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
    </div>
  )
}

export default Home