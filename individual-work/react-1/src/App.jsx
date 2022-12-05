import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/style.css'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <div className="navbar-flex">
          <div className="navs-left">
            <div className="logo">
              <img src="./images/logo.png" />
              <span>Logo</span>
            </div>
            <nav><a href="#">About</a></nav>
            <nav><a href="#">Services</a></nav>
            <nav><a href="#">Portfolio</a></nav>
          </div>
          <div className="navs-right">
            <nav><a href="#">Contact</a></nav>
          </div>
        </div>
      </div>

      <div className="bg-flex">
        <div className="md-flex">
          <div className="heading">
            <h1>Portfolio</h1>
            <h2>Recent Work</h2>
          </div>
          <hr />
          <div className="parent">
            <Article title="ahoj" text="ja nevim co sem dat"/>
          </div>
        </div>
      </div>
      <div className="footer">Copyright © Example.com 2015</div>
    </>
  )
}

export default App
