import React from "react"
import './flipposter.css'

const FlipPoster = ({name,data, image}) => {
	return(
		<div className="flip-poster">
				<div className="flip-poster-inner">
					<div className="flip-poster-front" style={{backgroundImage: `url("${image}")`}}>
					</div>
					<div className="flip-poster-back">
						<p style={{"text-transform": "uppercase"}}>{name}</p>
						<p>{data} </p>
					</div>
				</div>
		</div>

		)
}

export default FlipPoster;