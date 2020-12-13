import React from "react"

const ReCard = ({event, date, details}) => {
	return(
		<article class="center br3 pa3 grow mv3 ba b--black-10" style={{background: "#4bb069", width: "280px", height: "320px"}}>
		  <div class="tc">
		    <h1 class="f4 white">{event}</h1>
		    <h2 class="f5 white">{date}</h2>
		    <hr class="mw3 bb bw1 b--black-10"/>
		  </div>
		  <p class="lh-copy center f6 white-90 ph3 tc">
		    {details}
		  </p>
		</article>

		)
}

export default ReCard;