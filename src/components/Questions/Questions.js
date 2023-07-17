import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import HomeMainbar from '../HomeMainbar/HomeMainbar'
import RightSightBar from '../RightSidebar/RightSightBar'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSightBar />
      </div>
    </div>
  )
}

export default Questions