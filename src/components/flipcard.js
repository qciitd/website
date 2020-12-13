import React from "react"
import './flipcard.css'

const FlipCard = ({name,data, colour, image}) => {
	return(
		<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front" style={{backgroundImage: `url("${image}")`}}>
						<p class ={colour} >{name}</p>
					</div>
					<div className={`flip-card-back ph2`}>
						<p>{data} </p>
					</div>
				</div>
		</div>

		)
}

export default FlipCard;