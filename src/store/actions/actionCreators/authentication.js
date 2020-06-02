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

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error

    }
}

export const signUpSuccess = (token) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        token: token

    }
}

export const signUp = (signUpData) => {
    return dispatch => { 
              console.log(signUpData)
        dispatch(signUpStart())
        http.post('auth/register', signUpData)
 
        .then(res => {
            console.log()
            dispatch(signUpSuccess(res.data.accessToken))
        })
        .catch(error => {
            dispatch(signUpFail(error.response.data.message))
        })
    }
}