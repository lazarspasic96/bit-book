import React from 'react'
import { connect } from 'react-redux'
import classes from './FavouritePosts.module.css'
import PostCard from '../../../components/PostLayout/PostCard/PostCard'


class Favourite extends React.Component {
    render() {

        const favPosts = JSON.parse(localStorage.getItem('savedFavPosts')) || [];

        return <>
            <p>eee</p>
            <div className={classes.FavouritePosts}>
                {favPosts.map(post => <PostCard postData={post} />)}
            </div>

        </>

    }
    componentDidMount() {


    }
}

const mapStateToProps = state => {
    return {
        favouritePosts: state.post.allPosts
    }
}
export default connect(mapStateToProps)(Favourite)