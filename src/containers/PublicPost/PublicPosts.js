import React from 'react'
import http from '../../services/axios'
import Post from '../../entities/Post'
import Postcard from '../../components/PostLayout/PostCard/PostCard'
import classes from './PublicPost.module.css'


class PublicPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

    }

    postHandler = (id, favourite) => {
        console.log(id, favourite)
     this.state.posts.forEach(post => {
            if(post.id === id) {
                post.fav = favourite
            }
        } )
    }

    componentDidMount() {
        http.get('posts')
            .then(res => {
         
            

                this.setState({
                    posts: res.data.map(post => new Post(post)),
                })
            })
    }



    render() {
    console.log(this.state.posts)
        const posts = this.state.posts.map(post => <Postcard favouriteHandler={(id, favourite) => this.postHandler(id, favourite)} postData={post} />)
        return <>
            <div className={classes.PostWrapper}>
                <h3>Public Posts</h3>
                {posts}
            </div>
        </>
    }
}

export default PublicPosts