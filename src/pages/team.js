import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from '../components/Nav'
import Footer from '../components/footer'
import FlipPoster from '../components/flipposter'
import ProfileCard from '../components/profilecard'

import './team.css'
import TeamSection from "../components/team/team_section"

const Team = () => (
    <div>
    <SEO title="QC IIT Delhi. Team Members" />
    <Nav/>
    <div>
      <div className="vh-50 bg-green dtc v-mid tc">
        <img className='team-collage v-mid' src={'./team.png'} />
        <h3 className="tc cream-text">QC Team, 2020-21</h3>
      </div>
      <div className="bg-cream vh-50">
        <h1 class="f2 lh-copy tc">What we do</h1>
          <div className="fl w-100 w-40-ns tc">
            <FlipPoster name={'MasterMind'} data={'MasterMind'} />
            <FlipPoster name={"Occam's Razor"} data={"Occam's Razor"} />
            <FlipPoster name={'64 Blocks'} data={'64 blocks'} />
            <FlipPoster name={'Anything you like'} data={'...'} />
          </div>
          <div className="fl w-100 w-60-ns ">
            <h1 class="f4 lh-copy v-mid pl3 pr3 tc pt6-ns">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Metus vulputate eu scelerisque felis. Curabitur gravida arcu ac tortor dignissim convallis aenean. Aenean et tortor at risus. Turpis in eu mi bibendum neque egestas congue quisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>
      </div>
      <TeamSection />
    </div>
    <Footer/>
  </div>
)

export default Team
