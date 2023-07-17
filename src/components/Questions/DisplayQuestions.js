import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSightBar from '../RightSidebar/RightSightBar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <QuestionDetails />
        <RightSightBar />
      </div>
    </div>
  )
}

export default DisplayQuestions