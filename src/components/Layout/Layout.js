import React from 'react'
import Header from './Header/Header'
import classes from './Layout.module.css'


class Layout extends React.Component {


    render() {
        return <>
            <Header />
            <main className = {classes.Content}>
                {this.props.children}
            </main>
       
        </>
    }
}

export default Layout