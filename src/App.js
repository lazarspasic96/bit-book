import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom'
import PublicPosts from './containers/PublicPost/PublicPosts'
import AuthPage from './containers/Authetication/AuthPage';
import Dashboard from './containers/Dashboard/Dashboard';
import NewPost from './containers/Dashboard/MyPosts/NewPost/NewPost';
import { connect } from 'react-redux'
import { render } from '@testing-library/react';
import Favourite from './containers/Dashboard/Favourite/FavouritePosts';




class App extends React.Component {

  render() {
    let routes = <Switch >
      <Route exact path='/' component={AuthPage} />
      <Route path='/posts' component={PublicPosts} />
    </Switch>

    if (true) {
      routes = (

        <Dashboard>  
          <Route exact path='/posts' component={PublicPosts} />
          <Route path='/new-post' component={NewPost} />
          <Route path = '/favourite' component = {Favourite} />
        </Dashboard>)
    }

    return <>
      <Layout>
        {routes}
      </Layout>
    </>

  }

}




const mapStateToProps = state => {
  return {
    isAuth: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
