import React from 'react'
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './styles/App.css'

const App = () => {
  return (
    <div className="app">
        <NavigationBar /> 
        <div className='page'>
            <SideBar />
            <Content />
        </div>
    </div>
  )
}

export default App;