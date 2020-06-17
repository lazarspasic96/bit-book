import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import classes from './DashBoard.module.css'
import {connect} from 'react-redux'
import * as action from '../../store/index'
import http from '../../services/axios'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: null
        }
    }

    componentDidMount () {
        http.get('https://crud-api.hypetech.xyz/v1/users')
        .then(res => {
            console.log(res.data)
            }
        )

    }



    render() {
        return <main className={[classes.DashBoard, 'flex-container'].join(' ')}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.ContentWrapper}>
                {this.props.children}
            </div>
        </main>
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.userEmail
    }
}

export default connect(mapStateToProps)(Dashboard)