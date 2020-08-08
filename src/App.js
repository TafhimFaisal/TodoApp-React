import React from 'react';
import ToDo from './controller-component/ToDo';
import NavBar from './ui-component/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './controller-component/AboutUs';
import ContuctUs from './controller-component/ContuctUs';
import Blogs from './controller-component/Blogs';

function App() {
  return (
      <Router >
        <div className="App">
            <NavBar />
            <Route exact path="/"     component = {ToDo} />
            <Route path="/aboutUs"    component = {AboutUs} />
            <Route path="/contactUs"  component = {ContuctUs} />
            <Route path="/blogs"      component = {Blogs} />
        </div>
      </Router>
  );
}

export default App;
