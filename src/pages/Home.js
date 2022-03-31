import Header from '../components/Header'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import React from 'react'

//<Link to='../pages/Drive'> <Button text='Drive' color='green'/> </Link>
function Home() {

  const onClick = (e) =>{
    console.log('Clicked' + e.text)
  }

  return (
    <div className="Unter">
      <Header />
      <h2>
        Welcome
      </h2>
      <Link to='/Drive'><Button text='Drive' color='green'/></Link>
      <Link to='/Ride'><Button text='Ride' color='orange' onClick={onClick}/></Link>
      <Link to='/Admin'><Button text='Admin' color='red' onClick={onClick}/></Link>
    </div>
  );
}

export default Home;