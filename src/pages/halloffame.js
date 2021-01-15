import React from "react";

import { graphql } from "gatsby";
import { node } from "prop-types";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import ImageGallery from "../components/gallery.js"
import NewGallery from "../components/gallery_new.js"

const HallOfFame = ({data}) => {
	var galleryData = data.allGallery2019Xx2020.edges;
    
	return(
		<div>
			<Nav />
			<div class="w-100 pa3 mb2" style={{backgroundColor: "#4BB069", fontFamily: "Raleway"}}>
				<h1 class="f2-ns f3 white lh-title tc">Hall of Fame</h1>
				<p class="pa3 pt0 mt0 white tc">We aren't much compared to our peers in PFC IITD, but we try :)</p>
			</div>
			<div style={{height:"70vh" ,"overflow-y": "scroll"}}>
				<NewGallery data={galleryData}/>
			</div>
			<Footer />
		</div>
	)
}

export const query = graphql`
  query GalleryQuery {
    allGallery2019Xx2020 {
      edges {
        node {
          caption
          image
        }
      }
    }
  }
`;

export default HallOfFame;