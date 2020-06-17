import React from 'react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'


class AuthPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            switchLog: false,
            isAuth: true
        }
    }

    switchLogger = () => {
        this.setState(prevState => {
            return {
                switchLog: !prevState.switchLog
            }
        })
    }



    render() {
        let auth = null
        if (this.state.switchLog) {
            auth = <SignUp onSwitch={this.switchLogger} />
        }

        else {
            auth = <Login onSwitch={this.switchLogger} />
        }

        let redirecting = null
        if (this.props.isAuth) {
            console.log('uso jeee')
           return redirecting = <Redirect to='/dashboard' />
        }


        return <div>
            {redirecting}
            {auth}</div>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    }
}


export default withRouter(connect(mapStateToProps)(AuthPage));