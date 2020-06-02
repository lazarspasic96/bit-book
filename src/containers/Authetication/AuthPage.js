import React from 'react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'


class AuthPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            switchLog: false
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


        return <div>{auth}</div>
    }
}

export default AuthPage;