import React from 'react'
import classes from './SinglePost.module.css'


const SinglePost = (props) => {
    return <div className={classes.Card}>


        <div className='col s12 m4 l4'>
            <div className="card">
                <div className="card-image">
                    <img className = {classes.CardImg} src={props.postData.photo} />

                </div>
                <div className="card-content">
                    <h5>{props.postData.title}</h5>
                </div>
                <div className="card-action">
                    <span>Author Name: | </span> <span>Comments: </span>
                </div>
            </div>

        </div>
    </div>

}

export default SinglePost