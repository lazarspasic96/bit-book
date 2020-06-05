import React from 'react'
import Switcher from '../../../../components/UI/Switcher/Switcher'
import Input from '../../../../components/UI/Input/Input'
import classes from './NewPost.module.css'


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
            isPublic: true
        }
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
                isValid={newPostElement.config.value}
                touched={newPostElement.config.touched}
                valueType={newPostElement.id}
                changed={this.inputHandler}
            />
          


        })


        return (
            <>
                <h1 style={{ textAlign: 'center' }}>New Post</h1>
                <div className={classes.NewPostForm}>
                    <Switcher oN={'Public'} oF={'Private'} />
                    <form className={classes.FormInput}>
                        {newPost}
                    </form>
                </div>
            </>
        )
    }
}

export default NewPost