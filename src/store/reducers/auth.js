import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    loading: false,
    error: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false

            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;

    }


}

export default reducer

