import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import ImageGallery from "../components/gallery.js"

const HallOfFame = () => {
	return(
		<div>
			<Nav />
			<ImageGallery/>
			<Footer />
		</div>
	)
}

export default HallOfFame;