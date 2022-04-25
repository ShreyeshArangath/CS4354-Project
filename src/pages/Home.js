import Header from '../components/Header'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

//<Link to='../pages/Drive'> <Button text='Drive' color='green'/> </Link>
function getMainButtonStyle(color){
  const style = {
    borderRadius: 10,
    backgroundColor: color,
  }
  return style 
}
function Home() {

  return (
    <div className="Unter">
      <Header />
      <h2>
        Welcome
      </h2>
      <div className="main-btn">
        <Link style={{textDecoration:'none'}} to='/Drive'>
          <Button style={getMainButtonStyle('green')} variant='contained' className="drive-btn"> Drive </Button>
          </Link>
        <Link style={{textDecoration:'none'}} to='/Ride'>
          <Button style={getMainButtonStyle('orange')} variant='contained'className="ride-btn">Ride </Button>
        </Link>
        <Link style={{textDecoration:'none'}} to='/Admin'>
          <Button style={getMainButtonStyle('red')} variant='contained' className="admin-btn">Admin</Button>
        </Link>
      </div>
     
    </div>
  );
}

export default Home;