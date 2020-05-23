import React from 'react'
import Input from '../../../components/UI/Input/Input'
import classes from './SignIn.module.css';
import signInLogo from '../../../assets/images/userLogo.png'
import Button from '../../../components/UI/Button/Buttons';


class SignIn extends React.Component {

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


                <Button className = {'waves-effect waves-light btn-small'}>Sign in</Button>
            </form>

        </div>
    }
}

export default SignIn