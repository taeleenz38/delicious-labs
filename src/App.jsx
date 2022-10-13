import React from "react"
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

export default function App() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="inline-page ">
          <Navbar />
          <div className="marquee">
            <p>Delicious <img src="/images/vector.png" alt="logo" /> Labs</p>
          </div>
          <Footer />
        </div>
        <div className="inline-page ">
          <Navbar2 />
          <Footer2 />
        </div>

        <div className="inline-page ">
          <h1>labs</h1>
          <Footer2 />
        </div>

        <div className="inline-page ">
          <h1>labs</h1>
          <Footer2 />
        </div>
      </div >
    </div >
  )
}
