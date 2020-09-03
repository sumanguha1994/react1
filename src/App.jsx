import React, { Component, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { render } from 'react-dom';   
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import ReactTable from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';  

const useDocTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
function CustomeCountApp()
{
  const [count, setCount] = useState(0);
  const incCount = () => setCount(count + 1);
  useDocTitle(`You clicked ${count} times`);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incCount}>Click me</button>
    </div>
  );
}
export default CustomeCountApp;
/*
Hook state is the new way of declaring a state in React app. 
Hook uses useState() functional component for setting and retrieving state. 
Let us understand Hook state with the following example.
*/

/*
In the above example, useState is the Hook which needs to call inside a 
function component to add some local state to it. The useState returns a 
pair where the first element is the current state value/initial value, 
and the second one is a function which allows us to update it. After that, 
we will call this function from an event handler or somewhere else. 
The useState is similar to this.setState in class. 
The equivalent code without Hooks looks like as below.
*/

/**
Basic Hooks

useState
useEffect
useContext
----------------------------
Additional Hooks

useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue
*/


