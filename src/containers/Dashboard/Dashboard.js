import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import classes from './Dashboard.module.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <main className = {classes.DashBoard}>
            <Sidebar />

            {this.props.children}
        </main>
    }
}

export default Dashboard