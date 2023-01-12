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
const ABOUTIMAGE = require('../assets/3dperson.png')

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
        {/* aboutsection */}
        <section className="aboutSection">
            <div className="padding-container">
                <div className="aboutText">
                    <h2 className="brand-text aboutTitle">
                        SU DI ME
                    </h2>
                    <p className="aboutParag">
                    Ciao! sono Giuseppe Paternostro, ho 25 anni e abito in brianza. La mia passione per la tecnologia e la grafica mi hanno portato fin qui a diventare un frontEnd developer.Sono solo all'inizio del mio percorso, ma noto già benefici sia dal lato professionale che personale.Ho voglia di imparare sempre di più e confrontarmi con le tecnologie più innovative per migliorarmi giorno dopo giorno.
                    </p>
                </div>
                <div className="aboutImage">
                    <img className="aboutImg" src={ABOUTIMAGE} alt="person in 3d" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home