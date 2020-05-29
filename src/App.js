import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom'
import PublicPosts from './containers/PublicPost/PublicPosts'
import SignUp from './containers/Authetication/SignUp/SignUp'

function App() {
  return (
    <Layout>
      <Switch >
        <Route exact path='/posts' component={PublicPosts} />
        <Route exact path='/about' component={PublicPosts} />
        <Route exact path='/' component={SignUp} />
      </Switch>


    </Layout>
  );
}

export default App;
