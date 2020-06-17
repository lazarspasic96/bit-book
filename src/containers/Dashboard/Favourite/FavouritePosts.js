import React from 'react'
import {connect} from 'react-redux'
import PostCard from '../../../components/PostLayout/PostCard/PostCard'
import classes from './FavouritePosts.module.css'

class Favourite extends React.Component {
    render () {
        const favouritePosts = this.props.favouritePosts.filter(post => post.fav).map(post => <PostCard postData = {post}/>)
        return <>
        <p>eee</p>
        <div className = {classes.FavouritePosts}>
                  {favouritePosts}
        </div>
  
         </>

    }
componentDidMount () {

}
}

const mapStateToProps = state => {
    return {
        favouritePosts: state.post.allPosts
    }
}
export default connect(mapStateToProps)(Favourite)