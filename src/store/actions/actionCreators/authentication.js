import * as actionTypes from '../actionTypes'
import http from '../../../services/axios'

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}
export const loginSucces = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart())

        const loginData = {
            email: email,
            password: password
        }

        http.post('auth/login', loginData)
            .then(res => {
                console.log(res.data)
                dispatch(loginSucces(res.data.accessToken))
            })
            .catch(error => {
                console.log('eeee', error.response.data.message)
                dispatch(loginFail(error.response.data.message))
            })
    }
}