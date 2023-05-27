// library
import { motion } from "framer-motion";
// icons
import { HiMail, HiDocumentDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
// react
import React from "react";
// components
import Button from "../components/ui/Button";
import Carousel from "../components/carousel/Carousel";
import AnimatedButton from "../components/ui/animatedButton/AnimatedButton";
// hook
import { useNavigate } from "react-router-dom";
// scss
import "../styles/home.scss";
// assets
const HEROIMG = require("../assets/heroimage.png");
const ABOUTIMAGE = require("../assets/3dperson.png");
const MEHOODY = require("../assets/me_hoody.png");
const CIRCLEICONS = require("../assets/circle_icons.png");
const CV = require("../assets/CV-GiuseppePaternostro-2023.pdf");

function Home() {
  let navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }
  function goToProject() {
    navigate("/project");
  }
  return (
    <main id="home">
      {/* herosection */}
      <section className="heroSection mx-auto container row personal-section">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -300 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="hsl col-lg-6 col-sm-12"
        >
          <div div className="callToAction">
            <a className="actionButton">
              <HiMail />
            </a>
            <a
              href="https://www.linkedin.com/in/giuseppe-paternostro/"
              target="_blank"
              className="actionButton"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/pater97"
              target="_blank"
              className="actionButton"
            >
              <FaGithubAlt />
            </a>
            <a href={CV} download className="actionButton">
              <HiDocumentDownload />
            </a>
          </div>
          <div className="heroImage">
            <img className="heroimg" src={HEROIMG} alt="heroimg" />
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 300 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="hsr col-lg-6 col-sm-12"
        >
          <h2 className="herotext">
            <span className="brand-text">HELLO</span> WORLD!
            <br />
            I'M <span className="brand-text">GIUSEPPE</span>
            <br />
            <span className="brand-text big-text">PATERNOSTRO.</span>
          </h2>
          <h4 className="subtext">
            <span className="brand-text">FRONT END</span> DEVELOPER
          </h4>
        </motion.div>
      </section>
      {/* aboutsection */}
      <section className="aboutSection personal-section">
        {/* onda viola in movimento */}
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150 purlpe-wave"
        >
          <path
            className="path-0"
            d="M 0,400 C 0,400 0,100 0,100 C 43.46750838133161,94.97646509274006 86.93501676266322,89.9529301854801 122,86 C 157.06498323733678,82.0470698145199 183.72744133067872,79.16474435081965 214,75 C 244.27255866932128,70.83525564918035 278.15521791462197,65.38809241124127 314,69 C 349.84478208537803,72.61190758875873 387.6516870108335,85.28288600421521 426,89 C 464.3483129891665,92.71711399578479 503.238034042044,87.48036357189783 546,96 C 588.761965957956,104.51963642810217 635.3961768209901,126.79565970819354 677,125 C 718.6038231790099,123.20434029180646 755.1772586739952,97.33699759532807 783,96 C 810.8227413260048,94.66300240467193 829.8947884830291,117.85634991049422 871,111 C 912.1052115169709,104.14365008950578 975.2435873938887,67.2376027626951 1014,69 C 1052.7564126061113,70.7623972373049 1067.1308619414167,111.19323903872535 1099,124 C 1130.8691380585833,136.80676096127465 1180.2329648404452,121.98944108240353 1219,124 C 1257.7670351595548,126.01055891759647 1285.937278696803,144.8489966316606 1323,135 C 1360.062721303197,125.1510033683394 1406.0179203723421,86.61457239095412 1427,76 C 1447.9820796276579,65.38542760904588 1443.991039813829,82.69271380452294 1440,100 C 1440,100 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#613dc1"
            fill-opacity="0.4"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            className="path-1"
            d="M 0,400 C 0,400 0,200 0,200 C 42.90322670536236,195.61193647698053 85.80645341072471,191.22387295396103 124,198 C 162.1935465892753,204.77612704603897 195.67741306246353,222.7164446611364 226,221 C 256.32258693753647,219.2835553388636 283.4838943394211,197.9103484014934 315,185 C 346.5161056605789,172.0896515985066 382.3870095798522,167.64216173288997 422,165 C 461.6129904201478,162.35783826711003 504.96806734117035,161.52100466694674 542,162 C 579.0319326588296,162.47899533305326 609.7407210554666,164.27381959932308 654,170 C 698.2592789445334,175.72618040067692 756.0690484369633,185.38371693576093 790,198 C 823.9309515630367,210.61628306423907 833.9830851966803,226.19131265763326 867,223 C 900.0169148033197,219.80868734236674 955.998610776315,197.85103243370597 993,189 C 1030.001389223685,180.14896756629403 1048.0224716980592,184.40455760754287 1087,187 C 1125.9775283019408,189.59544239245713 1185.9115024314483,190.53073713612253 1230,186 C 1274.0884975685517,181.46926286387747 1302.3315185761487,171.472493847967 1336,172 C 1369.6684814238513,172.527506152033 1408.7624232639575,183.5792874720094 1427,190 C 1445.2375767360425,196.4207125279906 1442.6187883680213,198.2103562639953 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#613dc1"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
          <path
            className="path-2"
            d="M 0,400 C 0,400 0,300 0,300 C 43.208148290873325,314.1656774948897 86.41629658174665,328.3313549897794 123,321 C 159.58370341825335,313.6686450102206 189.54296196388668,284.840257535772 224,272 C 258.4570380361133,259.159742464228 297.4118555627064,262.3076148671326 334,274 C 370.5881444372936,285.6923851328674 404.8096157852875,305.92928299569763 443,307 C 481.1903842147125,308.07071700430237 523.3496812961437,289.97525315007664 558,289 C 592.6503187038563,288.02474684992336 619.7916590301378,304.16970440399575 651,313 C 682.2083409698622,321.83029559600425 717.4836825833048,323.34592923394024 761,319 C 804.5163174166952,314.65407076605976 856.2736106366431,304.4465786602433 900,299 C 943.7263893633569,293.5534213397567 979.4218748701221,292.86775612508654 1006,292 C 1032.578125129878,291.13224387491346 1050.038889882868,290.08239683941053 1090,283 C 1129.961110117132,275.91760316058947 1192.4225655984064,262.80265651727143 1235,278 C 1277.5774344015936,293.19734348272857 1300.2708477235062,336.70697709150386 1337,334 C 1373.7291522764938,331.29302290849614 1424.4940435075698,282.3694351167132 1444,269 C 1463.5059564924302,255.6305648832868 1451.7529782462152,277.8152824416434 1440,300 C 1440,300 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#613dc1"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-2"
          ></path>
        </svg>
        {/* container principale about */}
        <div className="main-container row mx-auto container">
          <div  className="aboutText col-lg-6 col-sm-12">
            <motion.div initial={{x:-300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:1}}>
              <h2 className="brand-text aboutTitle">SU DI ME</h2>
              <p className="aboutParag">
                Ciao! sono Giuseppe Paternostro, ho 25 anni e abito in brianza.{" "}
                <br />
                La mia passione per la tecnologia e la grafica mi hanno portato
                fin qui a diventare un frontEnd developer. <br /> Sono solo
                all'inizio del mio percorso, ma noto già benefici sia dal lato
                professionale che personale. <br /> Ho voglia di imparare sempre
                di più e confrontarmi con le tecnologie più innovative per
                migliorarmi giorno dopo giorno.
              </p>
            </motion.div>
            <motion.div initial={{x:-500}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:1,delay:.4}} className="buttonAboutContainer">
              <AnimatedButton

                label={"SCOPRI DI PIÙ"}
                clickButton={goToAbout}
              />
            </motion.div>
          </div>
          <div className="aboutImage col-lg-6 col-sm-12">
            <img className="aboutImg" src={ABOUTIMAGE} alt="person in 3d" />
            {/* da capire se inserire il testone o lasciare l'omino 3d */}
            {/* <img className="aboutImg" src={MEHOODY} alt="person in 3d" /> */}
          </div>
        </div>
      </section>
      {/* sezione  progetti*/}
      <section className="projectSection">
        <div className="personal-section container">
          <h2>PROGETTI</h2>
          <p>
            Durante il corso del mio apprendimento, nel tempo libero e in alcune
            esperienze lavorative ho svolto diversi progetti. <br />I progetti
            svariano da siti web vetrina, gestionali e applicazioni mobile
            passando da puro front end fino al back end con anche l'integrazione
            di database creati da me.
          </p>
          <div className="carouselBox">
            <Carousel />
          </div>
          <div className="buttonBox">
            <Button
              buttonColor={"brand"}
              clickButton={goToProject}
              label={"GUARDA ALTRI PROGETTI"}
            />
          </div>
        </div>
      </section>
      {/* sezione tecnologie utilizzate */}
      <section className="techSection">
        <div className="personal-section container row mx-auto">
          <div className="circleTech col-lg-6 col-sm-12">
            <img src={CIRCLEICONS} alt="circleicons" />
          </div>
          <div className="textTech col-sm-12 col-lg-6"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
