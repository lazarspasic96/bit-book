import React from 'react'
import classes from './SinglePost.module.css'
import {NavLink} from 'react-router-dom'


const SinglePost = (props) => {
    return (
        <div className='col s12 m4 l4'>
            <div className={classes.PostCard}>
                <div className={classes.PostCardNavigation}>
                    <ul>
                        <li>
                            
                            <a href="#" class="active"><i class="ion ion-ios-eye"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="ion ion-ios-location"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="ion ion-android-star"></i></a>
                        </li>
                    </ul>

                </div>




            </div>
        </div>
    )




}

export default SinglePost