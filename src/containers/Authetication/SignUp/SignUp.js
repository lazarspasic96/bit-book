import React from 'react'
import Input from '../../../components/UI/Input/Input'
import classes from './SignUp.module.css';
import signInLogo from '../../../assets/images/userLogo.png'
import Button from '../../../components/UI/Button/Buttons';


class SignUp extends React.Component {

    state = {
        auth: {

            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,

            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,

            },

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

    inputHandler = (event, inputIdentifier) => {
        const updatedAuth = {
            ...this.state.auth,
            [inputIdentifier]: {
                ...this.state.auth[inputIdentifier],
                value: event.target.value,
                touched: true
            }
        }

        this.setState({auth: updatedAuth})
    }



    render() {

        const updatedForm = [];

        for (let key in this.state.auth) {
            updatedForm.push({
                id: key,
                config: this.state.auth[key]
            })
        }

        const form = updatedForm.map(formElement => {
            return <Input
                changed={(event) => this.inputHandler(event, formElement.id)}
                elementType={formElement.config.elementType}
                label={formElement.config.label}
                elementConfig={formElement.config.elementConfig}
                touched={formElement.config.touched}
                value={formElement.config.value}
                shoudBeValidate={formElement.config.validation}

            />

        })

        return <div className={classes.SignIn}>



            <form>
                <img src={signInLogo} className={classes.SignInLogo} />
                <p style={{ textAlign: 'center' }}>Sign Up</p>
                {form}

                <Button className={classes.SignInBtn}>Sign in</Button>
                <p style={{ fontSize: '11px', textAlign: 'center' }}>Alredy have account? Click here to Login</p>
            </form>
        </div>
    }
}

export default SignUp