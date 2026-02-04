import React from 'react'
import NavBar from "../../components/NavBar/NavBar"
import "./Home.css"
import hero from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className='Home'>
      <NavBar></NavBar>
      <div className='hero'>
        <img src={hero} className='banner-image'></img>
        <div className="hero-caption">
          <img src={hero_title} className='caption-img'></img>
          <p>Dicovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to sasve the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon}></img>More Info</button>
          </div>
          <TitleCard title={"Popular on Netflix"}></TitleCard>
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"}></TitleCard>
        <TitleCard title={"Only on Netflix"}></TitleCard>
        <TitleCard title={"Upcoming"}></TitleCard>
        <TitleCard title={"Top Picks for you"}></TitleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home