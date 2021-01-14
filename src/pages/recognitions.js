import React from "react";
import {isBrowser} from "react-device-detect"

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import ReCard from "../components/recog.js"
import "../components/style.css"


const sample_data = [
	{
		event: "Name of the Event",
		date: "Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of the Event",
		date: "Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of the Event",
		date: "Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of Another Event",
		date: "Iski Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of Another Event",
		date: "Iski Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of the Event",
		date: "Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},
	{
		event: "Name of Another Event",
		date: "Iski Date",
		details: `Rankings and positions\nMore Rankings\nAh yes, rankings!`,
	},

]


const Recognitions = ({data}) => {
	var recogData = data.allRecognitionsSheet1.edges;
	let output = recogData.map((node) => <ReCard details = {node.node.details} event = {node.node.event} date = {node.node.date}/>)

	return(
		<div style={{fontFamily: "Raleway"}}>
			<Nav />
			<h1 class="f1-ns f2 lh-title tc">Recognitions</h1>
			<div class={`grid ${(isBrowser) ? "w-80" : ""}`} style={{margin:"auto"}}>
				{output}
			</div>
			<Footer />
		</div>
	)
}

export const query = graphql` 
  query RecognitionData {
    allRecognitionsSheet1 {
      edges {
        node {
          event
          date
          details
        }
      }
    }
  }
`;

export default Recognitions;