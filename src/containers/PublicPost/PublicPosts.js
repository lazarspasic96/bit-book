import React from 'react'
import http from '../../services/axios'
import Post from '../../entities/Post'
import Postcard from '../../components/PostLayout/PostCard/PostCard'


class PublicPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
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

        const posts = this.state.posts.map(post => <Postcard postData = {post} />)
        return <>
            <div className='row'>
                {posts}
            </div>
        </>
    }
}

export default PublicPosts