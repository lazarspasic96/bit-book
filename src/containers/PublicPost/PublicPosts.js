import React from 'react' 
import SinglePost from '../../components/PostLayout/SinglePost'


class PublicPosts extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return <>
    <div className='row'>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
    </div>
        </>
    }
}

export default PublicPosts