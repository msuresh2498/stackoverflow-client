import React from 'react'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import HomeMainbar from './HomeMainbar/HomeMainbar'
import RightSightBar from './RightSidebar/RightSightBar'

const Home = () => {
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

export default Home


//  export const  questionList = [
//   {
//     questionTitle: "What is ReactJS",
//     questionBody: "Explain about ReactJS?",
//     noOfAnswers: 0,
//     upVote: 5,
//     downVote : 0,
//     userPosted: "suresh",
//     askedOn : "2023-07-10T06:04:22.099Z"
//   },
//   {
//     questionTitle: "What is NodeJs",
//     questionBody: "Explain about NodeJs?",
//     noOfAnswers: 0,
//     upVote: 5,
//     downVote : 0,
//     userPosted: "kamal",
//     askedOn : "2023-07-10T06:05:15.611Z"
//   }
// ]