import React from 'react'
import classes from './SinglePost.module.css'
import { NavLink } from 'react-router-dom'


const SinglePost = (props) => {
    return (
        <div className='row'>
            <div className='col s12 m4 l4'>
                <div className={classes.PostCard}>
                    <div className={classes.PostCardNavigation}>
                        <ul>
                            <li>
                                <NavLink to='/'><i class="ion ion-ios-eye"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>   <i class="ion ion-ios-location"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>    <i class="ion ion-android-star"></i></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.PostCardContent}>
                        <div className={classes.PostCardInfo}>
                            <h1>This is going to be a Title</h1>

                            <p>And this is the main content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!</p>
                            <NavLink to='/readmore'>
                                Read More
                 </NavLink>
                        </div>
                    </div>

                    <div className={classes.PostCardImage} id="post-card__img">
                        <div className={classes.PostCardSocial}>
                            <ul>
                                <li>
                                 <i className="ion ion-chatbox"></i><span>736</span>
                                </li>
                                <li>
                                <i className="ion ion-heart"></i><span>1025</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )




}

export default SinglePost