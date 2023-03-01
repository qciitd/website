import React from "react"
import './calendar_card.css'

const RDVCard = ({event, qm, date, time, teamsize, link, image}) => {

	var output = (
		<div className="calendar-card-back tl" style={{fontFamily: "Raleway", paddingTop:"20%", paddingLeft:"0.25rem"}}>
			<p className="f2 ph3 mv0 pv0">{event}</p>
			<p className="f4 ph3 mt3 mb0">QM: {qm}</p>
			<p className="f4 ph3 mt3 mb0">{date}, at {time}</p>
			<p className="f4 ph3 mt4">Cash prizes worth <span class="f3">48K</span></p>
			<p className="f4 ph3 mv1">Teams of {teamsize}</p>
			<p className="f5 w-70 ph3 mt1 mb4">All participants must be under 25 years of age</p>
			<a class="f5 ph3 white underline pointer dim" href={link} target='_blank'>Register Now!</a>
		</div>
	)

	return(
		<div className="calendar-card" style={{height: "480px"}}>
				<div className="calendar-card-inner">
					<div className="calendar-card-front" style={{backgroundImage: `url("${image}")`}}>
					</div>
					{output}
				</div>
		</div>

		)
}


export default RDVCard;
