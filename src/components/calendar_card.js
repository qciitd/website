import React from "react"
import './calendar_card.css'

const CalendarCard = ({name,poster,org,date,time,fees,platform}) => {
	return(
		<div className="calendar-card" style={{height: "480px", width: "320px"}}>
				<div className="calendar-card-inner">
					<div className="calendar-card-front" style={{backgroundImage: `url("${poster}")`}}>
					</div>
					<div className="calendar-card-back tl">
						<p className="f2 ph3 mv0 pv0">{name}</p>
						<p className="f4 ph3 mv1 pv1">{org}</p>
						<p className="f4 pt4 mv1 ph3">When: {date} at {time}</p>
						<p className="f4 ph3 mv1">Where: {platform}</p>
						<p className="f4 ph3 mv1">Fees: {fees}</p>
					</div>
				</div>
		</div>

		)
}

export default CalendarCard;