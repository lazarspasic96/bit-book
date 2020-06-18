import React from 'react'
import classes from './PostCard.module.css'
import { NavLink } from 'react-router-dom'
import background from '../../../assets/images/background.jpg'
import {connect} from 'react-redux'
import * as action from '../../../store/index'
class PostCard extends React.Component {
 

    render() {
        return (
            <div className={classes.PostCard}>
                <div className={classes.PostCardNavigation}>
                    <ul>
                        <li className className={classes.Active}>
                            <NavLink to='/'><i className={["ion-eye", classes.Icon].join(' ')}></i></NavLink>
                        </li>
                        <li>
                            {this.props.isAuth ? <NavLink to='/'>   <i className={["fas fa-pen", classes.Icon].join(' ')}></i></NavLink> : <NavLink to='/'>   <i className={["ion-person", classes.Icon].join(' ')}></i></NavLink>}
                            
                        </li>
                        <li onClick = {() => this.props.onFavourite(this.props.postData.id, this.props.postData.fav)}>
                       
                                 <i className={["ion-heart", classes.Icon].join(' ')}></i>
                        </li>
                    </ul>
                </div>

                <div className={classes.PostCardContent}>
                    <div className={classes.PostCardInfo}>
                        <h1>{this.props.postData.title}</h1>
                        <p>{this.props.postData.text}</p>
                        <NavLink className={classes.NavLink} to='/readmore'>
                            Read More
                                </NavLink>

                    </div>
                </div>

                <div className={classes.PostCardImage} >
                    <img className={classes.PostImg} src={this.props.postData.photo} />
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
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFavourite: (postId, favourite) => dispatch(action.favouritePost(postId, favourite))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)