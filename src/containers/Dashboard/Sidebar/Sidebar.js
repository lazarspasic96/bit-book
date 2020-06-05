import React from 'react'
import classes from './Sidebar.module.css'
import userProfile from '../../../assets/images/userProfile.png'
import { NavLink } from 'react-router-dom'

class Sidebar extends React.Component {


    render() {
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Navbar}>
                    <div className={classes.ProfileWrapp}>
                        <div className={classes.ProfileImg} >
                            <img src={userProfile} />
                        </div>
                        <h2 className={classes.WelcomeMsg}>Lazar Spasic</h2>
                    </div>


                    <ul className={classes.Menu} >
               
                    <li>
                        <NavLink className = {classes.NavLink} to='eee'>
                            <span class={classes.Icon}><i class="fas fa-tachometer-alt"></i></span>
                            <span class={classes.Title}>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className = {classes.NavLink} to='my-posts'>
                            <span className={classes.Icon}><i class="fas fa-pen"></i></span>
                            <span className={classes.Title}>New Post</span>
                            
                        </NavLink>

                    </li>

                    <li> 
                        <NavLink className = {classes.NavLink} to='e'>
                        <span className={classes.Icon}> <i class="fas fa-heart"></i></span>
                        <span className={classes.Title}>Favourite</span> 
                    </NavLink>

                    </li>

                    <li>
                        <NavLink className = {classes.NavLink} to='o'>
                            <span className={classes.Icon}><i class="fas fa-newspaper"></i></span>
                            <span className={classes.Title}>My Posts</span>
                            
                        </NavLink>
                    </li>



                    <li>
                        <NavLink className = {classes.NavLink} to='help'>
                            <span className={classes.Icon}><i class="far fa-question-circle"></i></span>
                            <span className={classes.Title}>Help</span>
                        </NavLink>
                    </li>
                    </ul>






                </div>
            </div>
        )

    }
}

export default Sidebar