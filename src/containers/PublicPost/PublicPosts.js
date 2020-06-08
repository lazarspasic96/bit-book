import React from 'react'
import http from '../../services/axios'
import Post from '../../entities/Post'
import Postcard from '../../components/PostLayout/PostCard/PostCard'
import classes from './PublicPost.module.css'


class PublicPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            favourite: []
        }

    }
  
    componentDidMount() {
        http.get('posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data.map(post => new Post(post))
                })
            })
    }

    render() {

        const posts = this.state.posts.map(post => <Postcard  favouriteHandler = {(postData) => this.postHandler(postData)} postData = {post} />)
        return <>
            <div className = {classes.PostWrapper}>
                <h3>Public Posts</h3>
                {posts}
            </div>
        </>
    }
}

export default PublicPosts