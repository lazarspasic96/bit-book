import React from 'react'
import http from '../../../services/axios';

class MyPosts extends React.Component {

componentDidMount () {
    http.get('users').then(res => console.log(res.data))
}
    render () {
        return <p>my posts</p>
    }
}

export default MyPosts;