import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../../store/index'



class MyPosts extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return <p>my posts</p>
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