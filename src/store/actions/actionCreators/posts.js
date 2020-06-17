import * as actionTypes from '../actionTypes'
import http from '../../../services/axios'
import { Redirect } from 'react-router-dom'


export const fetchPostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        posts: posts
    }
}

export const onFetchPost = () => {
    return dispatch => {
         http.get('posts')
         .then(res => {
             console.log(res.data)
            dispatch(fetchPostSuccess(res.data))
         })
 
    }
}

export const favouritePost = (postId, favourite) => {
    return {
        type: actionTypes.FAVOURITE_POSTS,
        postId: postId,
        favourite: favourite
    }
}

export const newPostSucces = () => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        loading: false,
    }
}
export const newPostFail = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAIL,
        loading: false,
        error: error
    }
}

export const newPostStart = () => {
    return {
        type: actionTypes.NEW_POST_START,
        loading: true
    }
}

export const newPost = (postData) => {
    return dispatch => {
        dispatch(newPostStart())

        http.post('posts', postData)
        
        .then(res => {
            dispatch(newPostSucces())
        
        })
        .catch(error => {
            dispatch(newPostFail(error))
        })
    }
}

export const fetchMyPost = (myPosts) => {
    return {
        type: actionTypes.FETCH_MYPOSTS_SUCCESS,
        myPosts: myPosts
    }
}

export const getMyPost = () => {
    return dispatch => {
        const id = localStorage.getItem('userId')
        if(true) {
            http.get(`users/${id}/posts`)
            .then(res => {
               dispatch(fetchMyPost(res.data))
            })
        }
    }
}





