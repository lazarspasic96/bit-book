import React from 'react'
import classes from './SinglePost.module.css'


const SinglePost = (props) => {
    return <div className = {classes.Card}>


        <div className='col s12 m4 l4'>
            <div className="card">
                <div className="card-image">
                    <img src='' />
              
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>

        </div>
    </div>

}

export default SinglePost