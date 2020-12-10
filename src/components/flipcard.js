import React from "react"
import './flipcard.css'

const FlipCard = ({name,data}) => {
	return(
		<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<p>{name}</p>
					</div>
					<div className="flip-card-back">
						<p>{data} </p>
					</div>
				</div>
		</div>

		)
}

export default FlipCard;