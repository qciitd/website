import React from "react"

import Gallery from 'react-grid-gallery';

const images = [
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	},
	{
		src: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnail: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
		thumbnailHeight: 240,
		thumbnailWidth: 382,
		caption: "Quiz Name - Position - Details",
	}
]

const ImageGallery = () => {
	return(
		<div>
			<div class = "pa3 white" style={{background: "#4bb069"}}>
				<h1 class = "tc avenir f2">Hall of Fame</h1>
				<p class = "tc avenir f4 w-60 pb3" style={{margin:"auto"}}>Members of IITD QC represent the institute in several external quizzes and have bagged many wins. Some of these events are listed below.</p>
			</div>
			<div class = "pa2 w-80 tc" style={{display: "block", overflow:"auto", margin:"auto", marginTop: "30px"}}>
				<Gallery images={images} enableImageSelection={false} backdropClosesModal={true} />
			</div>
		</div>
		)
}

export default ImageGallery;


