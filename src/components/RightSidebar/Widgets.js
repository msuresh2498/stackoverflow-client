import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './RightSidebar.css'

const Widgets = () => {
    return (
        <div className='widgets'>
            <h4 className='widgets-h4'>The Overflow Blog</h4>
            <div className='right-sidebar-div1'>
                <div className='right-sidebar-div2'>
                    <EditIcon style={{ width: "18px" }} />
                    <p>Observability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div2'>
                    <EditIcon style={{ width: "18px" }} />
                    <p>Podcast 374: how valuable is your screen name?</p>
                </div>
            </div>
            <h4 className='widgets-h4'>Featured on Meta</h4>
            <div className='right-sidebar-div1'>
                <div className='right-sidebar-div2'>
                    <ChatBubbleIcon style={{ width: "18px" }} />
                    <p>Review queue workflows- Final release..</p>
                </div>
                <div className='right-sidebar-div2'>
                    <ChatBubbleIcon style={{ width: "18px" }} />
                    <p>Please welcome Valued Associates- #958-V2Blast #959 - SpencerG</p>
                </div>
                <div className='right-sidebar-div2'>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/stack-overflow-3771074-3147691.png?f=avif&w=256' alt='overflow icon' style={{ width: "18px" }} />
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <h4 className='widgets-h4'>Hot Meta Posts</h4>
            <div className='right-sidebar-div1'>
                <div className='right-sidebar-div2'>
                    <p>38</p>
                    <p>why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className='right-sidebar-div2'>
                    <p>20</p>
                    <p>What is the best course of action whrn a use has high enough rep to </p>
                </div>
                <div className='right-sidebar-div2'>
                    <p>14</p>
                    <p>Is alink to the  "How to ask" help page a useful comment?</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets