import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import ImageGallery from "../components/gallery.js"
import NewGallery from "../components/gallery_new.js"

const HallOfFame = () => {
	return(
		<div>
			<Nav />
			<div class="w-100 pa3 mb2" style={{backgroundColor: "#4BB069", fontFamily: "Raleway"}}>
				<h1 class="f2-ns f3 white lh-title tc">Hall of Fame</h1>
				<p class="pa3 pt0 mt0 white tc">caption</p>
			</div>
			<div style={{height:"70vh" ,"overflow-y": "scroll"}}>
				<NewGallery/>
			</div>
			<Footer />
		</div>
	)
}

export default HallOfFame;