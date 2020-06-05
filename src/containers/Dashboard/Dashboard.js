import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import classes from './DashBoard.module.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <main className = {[classes.DashBoard, 'flex-container'].join(' ')}>
            <div>
                <Sidebar />
            </div>


           
                <div className = {classes.ContentWrapper}>
                           {this.props.children}
                </div>
        </main>
    }
}

export default Dashboard