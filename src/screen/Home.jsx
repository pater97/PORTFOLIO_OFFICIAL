// icons
import {HiMail} from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
// react
import React from 'react'
// scss
import '../styles/home.scss'
// assets
const HEROIMG = require('../assets/hero-image.png')

function Home() {
  return (
    <main id='home' className='font-medium'>
        {/* herosection */}
        <section className='heroSection'>
            <div className='hsl'>
                <div className='callToAction'>
                    <a className="actionButton"><HiMail/></a>
                    <a href="https://www.linkedin.com/in/giuseppe-paternostro/" target="_blank" className="actionButton"><FaLinkedinIn/></a>
                    <a href="https://github.com/pater97" target="_blank" className="actionButton"><FaGithubAlt/></a>
                </div>
                <div className='heroImage'>
                    <img className="heroimg" src={HEROIMG} alt="heroimg" />
                </div>
            </div>
            <div className='hsr'>
                <h2 className="herotext">
                <span className="brand-text">HELLO</span> WORLD!<br />
                        I'M  <span className="brand-text">GIUSEPPE</span><br /><span className="brand-text big-text">PATERNOSTRO.</span>
                </h2>
                <h4 className="subtext"><span className="brand-text">FRONT END</span> DEVELOPER</h4>
            </div>
        </section>
    </main>
  )
}

export default Home