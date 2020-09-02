import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { render } from 'react-dom';   
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import ReactTable from 'react-table';
import styles from './myStyles.module.css';

//##################     3.CSS Module         ###########################//
/*
class App extends React.Component {
  render() {
    return (
      <div>  
        <h1 className={styles.mystyle}>Hello JavaTpoint</h1>  
        <p className={styles.parastyle}>It provides great CS tutorials.</p>  
      </div>
    )
  }
}*/
/*---------- -----------------*/
//##################     2.CSS Stylesheet       #########################//
/*
class App extends React.Component {
  render() {
    const h1s = {
      color: "Green",
      backgroundColor: "lightBlue",  
      padding: "10px",  
      fontFamily: "Arial"  
    };
    return (
      <div>
        <h1 style={h1s}>Welcome Here!!</h1>
        <p>Here, you can find all CS tutorials.</p> 
      </div>
    )
  }
}*/
/*----------- --------------------*/
//##################      1.Inline Styling       ########################//
/*
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: "Green"}}>Hello JavaTpoint!</h1>  
        <p style={{backgroundColor: "lightgreen"}}>Here, you can find all CS tutorials.</p>  
      </div>
    )
  }
}*/
export default App;
/*
CSS in React is used to style the React App or Component. 
The style attribute is the most used attribute for styling in React applications, 
which adds dynamically-computed styles at render time. It accepts a JavaScript 
object in camelCased properties rather than a CSS string. 
There are many ways available to add styling to your React App or Component with CSS. 
Here, we are going to discuss mainly four ways to style React Components, which are given below: 
*/


