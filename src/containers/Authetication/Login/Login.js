import React from 'react'
import Input from '../../../components/UI/Input/Input';
import classes from './Login.module.css'
import loginLogo from '../../../assets/images/loginLogo.jpg'
import Button from '../../../components/UI/Button/Button'
import http from '../../../services/axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: {

                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email adress'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,

                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Your password'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                }
            },
        }

    }



    inputHandler = (event, inputIdentifier) => {
        const updatedAuth = {
            ...this.state.auth,
            [inputIdentifier]: {
                ...this.state.auth[inputIdentifier],
                touched: true,
                value: event.target.value,


            }
        }
        this.setState({ auth: updatedAuth })
    }

    send = (event) => {
        event.preventDefault()
        let data = {
            email: this.state.auth.email.value,
            password: this.state.auth.password.value
        }
        http.post('auth/login', data)
            .then(res => {
                console.log(res.data)
            })

    }

    render() {
        const updatedAuth = [];
        for (let key in this.state.auth) {
            updatedAuth.push({
                id: key,
                config: this.state.auth[key]
            })

        }

        const form = updatedAuth.map(formElement => {
            return <Input
                changed={(event) => this.inputHandler(event, formElement.id)}
                elementType={formElement.config.elementType}
                label={formElement.config.label}
                elementConfig={formElement.config.elementConfig}
                touched={formElement.config.touched}
                value={formElement.config.value}
                valueType={formElement.id}

            />
        })
        return <div className={classes.Login}>



            <form>
                <img src={loginLogo} className={classes.LoginLogo} />
                <p style={{ textAlign: 'center' }}>Login</p>
                {form}

                <Button clicked = {(event) => this.send(event)}className={classes.LoginBtn}>Login</Button>
                <p className={classes.Switcher} onClick={this.props.onSwitch}>Don't have an account? Click here to Sign Up!</p>
            </form>
        </div>
    }

}

export default Login