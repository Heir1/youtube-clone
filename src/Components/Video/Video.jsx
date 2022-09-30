import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai';

export const Video = () => {
  return (
    // div.video>div.video__top+div.video__title+div.video__details
    <div className="video">
      <div className='video__top'>
        <img src='https://i.ytimg.com/vi/t3w7OCDbmnc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD88nK39e_NkUip7Af6k6OwxYnUqg' alt='video' />
        <span>05:43</span>
      </div>
      <div className='video__title'>
        Create app in 5 minutes #made by Heir
      </div>
      <div className='video__details'>
        <span>
          <AiFillEye/> 5m Views • 
        </span>
        <span> 5 days age</span>
      </div>
      <div className='video__channel'>
        <img src='https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s68-c-k-c0x00ffffff-no-rj' alt='videocannel'/>
        <p>Rainbow Hat Jr</p>
      </div>
    </div>

  )
}




