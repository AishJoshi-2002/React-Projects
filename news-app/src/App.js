import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 15
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category='general'/>} />
          <Route exact path='/business' element={<News key="buisness" pageSize={this.pageSize} country="in" category='buisness'/>} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category='entertainment'/>} />
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category='health'/>} />
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category='science'/>} />
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category='sports'/>} />
          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="in" category='technology'/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}

{/* We've replaced the Switch component with Routes.
Each Route now uses the element prop to specify the component to render.
The path prop defines the URL path for each route.
The News component is passed as a JSX element to the element prop. */}

// component not remounting
// unique key prop

// state cannot be modified in render method

