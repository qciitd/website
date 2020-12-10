import React from "react"
import { isBrowser, isMobile } from "react-device-detect";
import Leaderboard from "../components/leaderboard.js"

let random_data = [
	    {
	      name: "Omi Baba",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 25,
	    },
	    {
	      name: "Rehan",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 20,
	    },
	    
	    {
	      name: "Rehan1",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 15,
	    },
	    {
	      name: "Omi Baba1",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 10,
	    },
	    {
	      name: "Rehan2",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 5,
	    },
	    {
	      name: "Omi Baba2",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 0,
	    },
]

const LeagueStandings = ({data}) => (
	<div class={`ma3 mr2`} style={{width:"600px"}}>
		
		<h2 class={`mt4 mb2 pa2 ${(isBrowser) ? "tc" : "tl ml5 mb4"}`}>League Standings</h2>
  		<div class={`${(isBrowser) ? "flex" : "dib"} w-100`}>
  		  <div class="grow mh2 dib" style={{width:(isBrowser)?"150px":"100px"}}>
		  	<img src={random_data[1].url} class="grow br-100 ba b--gray mh2 mb2" style={{borderWidth: "5px", height:(isBrowser)?"150px":"100px", width:(isBrowser)?"150px":"100px", marginTop:"25px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{data[1].node.name}</p>
		  </div>
		  <div class="grow mh2 dib" style={{width:(isBrowser)?"180px":"120px"}}>
		  	<img src={random_data[0].url} class="grow br-100 ba b--gold mh2 mb2" style={{borderWidth: "5px", height:(isBrowser)?"180px":"120px", width:(isBrowser)?"180px":"120px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{data[0].node.name}</p>
		  </div>
		  <div class="grow mh2 dib" style={{width:(isBrowser)?"130px":"80px"}}>
		  	<img src={random_data[2].url} class="br-100 ba grow mh2 mb2" style={{borderWidth: "5px", borderColor: "#B1560F", height:(isBrowser)?"130px":"80px", width:(isBrowser)?"130px":"80px", marginTop:"35px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{data[2].node.name}</p>
		  </div>
		</div>
	
		<Leaderboard data = {data} />
	</div>

)

export default LeagueStandings;