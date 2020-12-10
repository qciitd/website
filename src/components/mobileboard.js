import React from "react"
import "tachyons"
import { graphql } from 'gatsby'

import LeagueStandings from "../components/leaguestandings.js"
import IndivStandings from "../components/indivstandings.js"

class MobileBoard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			route: "league",
		}
	}

	onButtonClick = (route) => {
		this.setState({route: route});
	}

	render() {
		const {data_league, data_indiv} = this.props

		let output;
		if (this.state.route == "league") {
			output = <LeagueStandings data= {data_league} />
		} else {
			output = <IndivStandings data= {data_indiv} />
		}

		return(
			<div>
				<div class = "w-100 pa2 tc">
					<p onClick = {()=>this.onButtonClick("indiv")} class="f6 grow no-underline br-pill ph3 pv2 mb2 mr3 dib white bg-dark-green">Individual Standings</p>
					<p onClick = {()=>this.onButtonClick("league")} class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue">League Standings</p>
				</div>
				<div>
					{output}
				</div>
			</div>
		)
	}
}

export default MobileBoard;