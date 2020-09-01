import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { render } from 'react-dom';   
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import ReactTable from 'react-table';
// import "react-table/react-table.css";

class App extends React.Component {
  render() {
    const tbldata = [
      {name: "test1", age: "23"}, 
      {name: "test2", age: "24"}, 
      {name: "test3", age: "25"}, 
      {name: "test4", age: "26"}, 
      {name: "test5", age: "27"}, 
      {name: "test6", age: "28"}, 
      {name: "test7", age: "29"}, 
      {name: "test8", age: "30"}, 
      {name: "test9", age: "40"}, 
      {name: "test10", age: "45"}
    ]
    const columns = [
      {Header: "NAME", accessor: "name"}, 
      {Header: "AGE", accessor: "age"}
    ]
    return (
      <div>
        <ReactTable data={tbldata} columns={columns} defaultPageSize={2} pageSizeOption={[2, 4, 6, 8]}/>
      </div>
    )
  }
}
export default App;
/*
The react-table is a lightweight, fast, fully customizable (JSX, templates, state, styles, callbacks), 
and extendable Datagrid built for React. It is fully controllable via optional props and callbacks. 
*/


