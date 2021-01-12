import React from "react"
import './calendar_card.css'

const CalendarCard = ({event, name,poster,org,date,time,audience,fees,platform, teams, link}) => {
	if (fees != null) {
		var fee = <p className="f4 ph3 mv1">Fees: {fees}</p>
	} else {
		var fee;
	}
	if (time != null) {
		var timetext = <p className="f4 pt4 mv1 ph3">When: {date} at {time}</p>
	} else if (time == null) {
		var timetext = <p className="f4 pt4 mv1 ph3">When: {date}</p>
	}
	if (date == null) {
		date = "TBD"
	}
	if (platform == null) {
		platform = "TBA"
	}
	if (teams != null) {
		var teamsize = <p className="f4 ph3 mv1">Teams of {teams}</p>
	}
	if (link != null) {
		var linkbutton = <a class="f5 ph3 pt3 white dim" href={link}>Add to your calendar</a>
	}

	if (event != "past") {
		var output = (
			<div className="calendar-card-back tl">
				<p className="f2 ph3 mv0 pv0">{name}</p>
				<p className="f4 ph3 mv1 pv1">{org}</p>
				{timetext}
				<p className="f4 ph3 mv1">Where: {platform}</p>
				{fee}
				<p className="f4 ph3 mv1">Eligibility: {audience}</p>
				{teamsize}	
				<div class="pt4">
					{linkbutton}
				</div>
			</div>
		)
	} else {
		var output = (
			<div className="calendar-card-back tl">
				<p className="f2 ph3 mv0 pv0">{name}</p>
				<p className="f4 ph3 mv1 pv1">{org}</p>
				{timetext}
				<p className="f4 ph3 mv1">Eligibility: {audience}</p>
			</div>
		)
	}


	return(
		<div className="calendar-card" style={{height: "480px", width: "320px"}}>
				<div className="calendar-card-inner">
					<div className="calendar-card-front" style={{backgroundImage: `url("${poster}")`}}>
					</div>
					{output}
				</div>
		</div>

		)
}

export default CalendarCard;