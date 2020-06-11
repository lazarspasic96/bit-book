import * as actionTypes from '../actionTypes'
import http from '../../../services/axios'


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

