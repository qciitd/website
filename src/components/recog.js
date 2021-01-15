import React from "react"
import { isBrowser, BrowserView, MobileView } from "react-device-detect";

const ReCard = ({event, date, details}) => {
	var rankings = details.split("|");
	var output = rankings.map(x => <p class="f4 pa3 mt0 mb0">{x}</p>)
	return(
		<div class="grow ph3 pt3 pb0 white tc ma3" style={{backgroundColor: "#4BB069", fontFamily: "Raleway"}} >
			<p class="f3 pa3  mb0 pb0">{event}</p>
			<p class="f4 pa3 mt3 pt0 pb1 ">{date}</p>
			{output}
		</div>
		)
}

export default ReCard;