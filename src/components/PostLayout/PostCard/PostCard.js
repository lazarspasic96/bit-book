import React from 'react'
import classes from './PostCard.module.css'
import { NavLink } from 'react-router-dom'
import background from '../../../assets/images/background.jpg'

const PostCard = (props) => {
    return (
        <div className={classes.PostCard}>
            <div className={classes.PostCardNavigation}>
                <ul>
                    <li className className={classes.Active}>
                        <NavLink to='/'><i className={["ion-eye", classes.Icon].join(' ')}></i></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>   <i className={["ion-person", classes.Icon].join(' ')}></i></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>    <i className={["ion-heart", classes.Icon].join(' ')}></i></NavLink>
                    </li>
                </ul>
            </div>

            <div className={classes.PostCardContent}>
                <div className={classes.PostCardInfo}>
                    <h1>This is going to be a Title</h1>
                    <p>And this is the main content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!</p>
                    <NavLink className={classes.NavLink} to='/readmore'>
                        Read More
                            </NavLink>

                </div>
            </div>

            <div className={classes.PostCardImage} >
                <img className={classes.PostImg} src={background} />
                <div className={classes.PostCardSocial}>
                    <ul>
                        <li>
                            <i className={["ion-chatbox", classes.Icon].join(' ')}></i><span>736</span>
                        </li>
                        <li>
                            <i className={["ion-heart", classes.Icon].join(' ')}></i><span>1025</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostCard