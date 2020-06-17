import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../../store/index'
import MyPostItem from '../../../components/PostLayout/MyPostItem/MyPostItem'
import classes from './MyPosts.module.css'



class MyPosts extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const postList = this.props.myPosts.map(post => <MyPostItem postData={post} />)

        return (
            <div className = {classes.MyPostContent}>
                {postList}
            </div>

        )

    }
}

const mapStateToProps = state => {
    return {
        myPosts: state.post.myPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(action.getMyPost())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);