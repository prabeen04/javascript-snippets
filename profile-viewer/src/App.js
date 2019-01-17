import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
const Navbar = lazy(() => import('./Components/Navbar'))
class App extends Component {
  render() {
    return (
      <Suspense fallback='loading...'>
        <Navbar/>
      </Suspense>
    );
  }
}

export default App;
