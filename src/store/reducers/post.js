import * as actionTypes from '../actions/actionTypes'
import Post from '../../entities/Post'

const initialState = {
    allPosts: [],
    favourite: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.FETCH_POST_SUCCESS:
        return {
            ...state,
            allPosts: action.posts.map(post => new Post(post))
        }

    default: 
        return state;
}

}


export default reducer