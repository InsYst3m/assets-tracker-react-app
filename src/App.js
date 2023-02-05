import React from 'react'
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './styles/App.css'

const App = () => {
  return (
    <div className="app">
        <div className='navbar'>
            <NavigationBar />
        </div>
        <div className='page'>
            <div className='page-sidebar'>
                <SideBar />
            </div>
            <div className='page-content'>
                <Content />
            </div>
        </div>
    </div>
  )
}

export default App;