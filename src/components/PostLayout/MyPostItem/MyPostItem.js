import React from 'react'
import classes from './MyPostItem.module.css'

const MyPostItem = (props) => {
    return (
        <div className = {classes.MyPostItem}>
            <p>{props.text}</p>
        </div>
    );
}

export default MyPostItem