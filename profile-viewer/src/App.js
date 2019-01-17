import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
const Navbar = lazy(() => import('./Components/Navbar'))
const UserList = lazy(() => import('./Components/UserList'))
const UserDetail = lazy(() => import('./Components/UserDetail'))
class App extends Component {
  render() {
    return (
      <Suspense fallback='loading...'>
        <Navbar />
        <div className='flex-container'>
          <div className='user-list'>
            <UserList />
          </div>
          <div className='user-detail'>
            <UserDetail />
          </div>
        </div>
      </Suspense>
    );
  }
}

export default App;
