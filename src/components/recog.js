import React from "react"
import { isBrowser, BrowserView, MobileView } from "react-device-detect";

const ReCard = ({event, date, details}) => {

	return(
		<div class="grid w-80 centre ma3"  style={{backgroundColor: "#4BB069"}}>
			<div class="pa2 mb0">
				<img src="https://i.ibb.co/nL69P9F/Sportify-Lakshya-Shashwat-Shobhit.jpg" style={{marginBottom: "0", paddingBottom:"0", height: "auto", width: "500px"}}/>
			</div>
			<div class="ph3 pt3 pb0 white">
				<p class="f2 pa3 pt5 avenir mb0 pb0">{event}</p>
				<p class="f3 pa3 mt3 pt0 avenir">{date}</p>
				<p class="f4 pa3 w-80 avenir mb0 pb0">{details}</p>
			</div>
		</div>
		)
}

export default ReCard;