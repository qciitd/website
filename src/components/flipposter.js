import React from "react"
import './flipposter.css'

const FlipPoster = ({name,data}) => {
	return(
		<div className="flip-poster">
				<div className="flip-poster-inner">
					<div className="flip-poster-front">
						<p>{name}</p>
					</div>
					<div className="flip-poster-back">
						<p>{data} </p>
					</div>
				</div>
		</div>

		)
}

export default FlipPoster;