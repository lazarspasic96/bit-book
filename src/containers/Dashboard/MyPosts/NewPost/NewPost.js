import React from 'react'
import Switcher from '../../../../components/UI/Switcher/Switcher'
import Input from '../../../../components/UI/Input/Input'
import classes from './NewPost.module.css'
import http from '../../../../services/axios'
import {connect} from 'react-redux'
import * as action from '../../../../store/index'
import Button from '../../../../components/UI/Button/Button'
import { Redirect } from 'react-router-dom'


class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPostForm: {
                title: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Post Title'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,

                },
                subTitle: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Post Subtitle'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                },
                image: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Input URL of image'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                },
                text: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',
                        placeholder: 'This is place for your new post!'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }

            },
            isPublic: true,
            formIsValid: false
        }
    }

    inputHandler = (event, inputIdentifier) => {

        const updatedNewPostForm = {
            ...this.state.newPostForm,
            [inputIdentifier]: {
                ...this.state.newPostForm[inputIdentifier],
                touched: true,
                valid: this.checkValidity(inputIdentifier, event.target.value),
                value: event.target.value
            }
        }

        let formIsValid = true;

        for(let key in updatedNewPostForm) {
            formIsValid = updatedNewPostForm[key].valid && true
        }


        this.setState({newPostForm: updatedNewPostForm, formIsValid: formIsValid})

    

    }

    checkValidity = (inputIdentifier, value) => {
        let isValid = true
        if(inputIdentifier === 'title') {
            isValid = value.length > 10 && isValid
        }

        if(inputIdentifier === 'subTitle') {
            isValid = value.length > 5 && isValid
        }

        if(inputIdentifier === 'image') {
            isValid = (value.includes('.jpg') || value.includes('.png') 
            || value.includes('.jpeg') || value.includes('.gif')) && isValid
        }

        if(inputIdentifier === 'text') {
            isValid = value.trim().length > 40 && isValid
        }

        return isValid

    }

    isPublic () {
        this.setState(prevState => {
            return {
                isPublic: !prevState.isPublic
            }
        })
    }

    onSubmitForm = (event) =>{
        event.preventDefault()

        const postData = {
            title: this.state.newPostForm.title.value,
            subtitle: this.state.newPostForm.subTitle.value,
            imageUrl: this.state.newPostForm.image.value,
            text: this.state.newPostForm.text.value,
            isPublic: this.state.isPublic
        }
        this.props.sendNewPost(postData)

        this.props.history.push('/my-posts')
       
    }


    render() {

        const updatedForm = []
        for (let key in this.state.newPostForm) {
            updatedForm.push({
                id: key,
                config: this.state.newPostForm[key]
            })

        }
        const newPost = updatedForm.map(newPostElement => {
            return <Input
                key={newPostElement.id}
                elementType = {newPostElement.config.elementType}
                elementConfig={newPostElement.config.elementConfig}
                value={newPostElement.config.value}
                isValid={!newPostElement.config.valid}
                touched={newPostElement.config.touched}
                valueType={newPostElement.id}
                changed={(event) => this.inputHandler(event, newPostElement.id)}
            />
          
        })


        return (
            <>
                <h1 style={{ textAlign: 'center' }}>New Post</h1>
                <div className={classes.NewPostForm}>
                    <Switcher oN={'Public'} oF={'Private'} clicked = {this.isPublic} />
                    <form className={classes.FormInput} onSubmit = {this.onSubmitForm}>
                        {newPost}
                        <Button disabled = {!this.state.formIsValid} clicked = {this.onSubmitForm}>Save</Button>
                    </form>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendNewPost: (postData) => dispatch(action.newPost(postData))
    }
}
export default connect(null, mapDispatchToProps)(NewPost)