import React from 'react';
import ToDo from './controller-component/ToDo';
import NavBar from './ui-component/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './controller-component/AboutUs';
import ContuctUs from './controller-component/ContuctUs';
import Blogs from './controller-component/Blogs';
import Blog from './controller-component/Blog';
import Weather from './controller-component/Weather';

function App() {
  return (
      <Router >
        <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/"             component = {ToDo} />
              <Route path="/aboutUs"            component = {AboutUs} />
              <Route path="/contactUs"          component = {ContuctUs} />
              <Route path="/blogs"              component = {Blogs} />
              <Route path="/blog/:post_id"      component = {Blog} />
              <Route path="/weather"            component = {Weather} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
