import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/Nav.js"
import Footer from '../components/footer.js'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <Nav/>
      <div className="vh-75 bg-green tc pa5 v-mid h-mid cream-text">
        <h1 className="tc f-subheadline-l ">Ugh.</h1>
      </div>
    
    <Footer/>
  </div>
)

export default NotFoundPage
