import React from 'react'
import http from '../../services/axios'
import Post from '../../entities/Post'
import Postcard from '../../components/PostLayout/PostCard/PostCard'
import classes from './PublicPost.module.css'
import {connect} from 'react-redux'
import * as action from '../../store/index'


class PublicPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

    }



    componentDidMount () {
        this.props.fetchPosts()
    }


    render() {
        const posts = this.props.fetchedPosts.map(post => <Postcard postData = {post} />)
      
        return <>
            
            <div className={classes.PostWrapper}>
                <h3>Public Posts</h3>
                {posts}
                    
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        fetchedPosts: state.post.allPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(action.onFetchPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicPosts)