import React from 'react'
import "./header.css"
import { NotificationsNone, Settings } from '@material-ui/icons';
// import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <header>
      <div className='top_left'>
        <a href='#'>Admin Pannel Dashboard </a>
      </div>
      <div className='top_right'>
        <div className='top_right_icons'>
          <NotificationsNone/>
          <span className='top_right_icons_badge'>5</span>
        </div>
        <div className='top_right_icons'>
          <Settings/>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9L7AvRP4F8Gzzewp2YVujrlZNjSq91l8LJ_WXwVc&s" className='top_avatar' alt=""></img>
      </div>
    </header>
  )
}
