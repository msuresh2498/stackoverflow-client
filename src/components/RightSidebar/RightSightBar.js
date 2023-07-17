import React from 'react'
import Widgets from './Widgets'
import WidgetTags from './WidgetTags'
import './RightSidebar.css'

const RightSightBar = () => {
  return (
    <aside className='right-sidebar'>
      <Widgets />
      <WidgetTags />
    </aside>
  )
}

export default RightSightBar