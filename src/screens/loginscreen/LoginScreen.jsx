import React from 'react'
import './_loginscreen.scss';

const LoginScreen = () => {
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='connection'/>
            <button>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen