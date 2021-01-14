import React from 'react';
import Gallery from 'react-grid-gallery';

const NewGallery = ({data}) => {
        var imagesData = [];
        for (var i in data) {
                let x = {src: data[i].node.image, thumbnail: data[i].node.image, caption: data[i].node.caption}
                imagesData.push(x)
        }
        console.log(imagesData)
	return(
		<div>
			<div class="ph5" style={{margin: "auto", marginTop: "20px", marginBottom: "30px"}}>
				<Gallery margin={4} images={imagesData} enableImageSelection={false}/>
			</div>
			<div class=""></div>
		</div>
	)
}




export default NewGallery;