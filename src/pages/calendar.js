import React from "react"
import "tachyons"
import {isBrowser, BrowserView, MobileView} from "react-device-detect"

import Nav from "../components/Nav.js";
import CalendarCard from "../components/calendar_card.js";
import "../components/style.css"

let output;
let data = ["https://s3-us-west-1.amazonaws.com/tachyonsio/img/watchmen.jpg", "https://i.pinimg.com/originals/0a/da/86/0ada86ce3ed52a6f8848aafc3fc1c40b.jpg", "https://images-na.ssl-images-amazon.com/images/I/71tUSFn3W0L._AC_SL1000_.jpg"]
let poster_group;

class Calendar extends React.Component {
	constructor() {
		super();
		this.state = {
			route: "current",
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route})
	}

	render() {
		if (this.state.route == "current") {
			output = (
				<div>
					<BrowserView>
						<div class="flex items-center justify-center ph4 pt0">
							<p onClick = {() => this.onRouteChange("old")} class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
								<svg class="w1 hover" data-icon="chevronLeft" viewBox="0 0 32 32">
									<title>chevronLeft icon</title>
									<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
								</svg>
								<span class="pl1"></span>
							</p>
							<p class={`pa2 mr4 ${(isBrowser) ? "f2" : "f3"} avenir green`}>Events this Month</p>
							<p onClick = {() => this.onRouteChange("new")} class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box">
							    <span class="pr1"></span>
							    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
							      <title>chevronRight icon</title>
							      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
							    </svg>
							</p>
						</div>
					</BrowserView>
					<MobileView>
						<div class="flex items-center justify-center ph2 pt0">
							<p onClick = {() => this.onRouteChange("old")} class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white">{`<`}</p>
							<p class="f3 pa2 tc">Events this Month</p>
							<p onClick = {() => this.onRouteChange("new")} class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white">{`>`}</p>
						</div>
					</MobileView>
				</div>
			)
			poster_group = (
				<div class="slider w-90 pt3">
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
					<CalendarCard poster = {data[0]} name = "Quiz Name" org = "IITD QC" date = "31st Dec" time = "8 pm" fees = "Free" platform = "Discord"/>
				</div>
			)
				

		} else if (this.state.route == "new") {
			output = (
				<div>
					<BrowserView>
						<div class="flex items-center justify-center ph4 pt0">
							<p onClick = {() => this.onRouteChange("current")} class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
								<svg class="w1 hover" data-icon="chevronLeft" viewBox="0 0 32 32">
									<title>chevronLeft icon</title>
									<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
								</svg>
								<span class="pl1"></span>
							</p>
							<p class={`pa2 mr4 ${(isBrowser) ? "f2" : "f3"} avenir green`}>Upcoming Events</p>
						</div>
					</BrowserView>
					<MobileView>
						<div class="flex items-center justify-center ph2 pt0">
							<p onClick = {() => this.onRouteChange("current")} class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white">{`<`}</p>
							<p class="f3 pa2 tc">Upcoming Events</p>
						</div>
					</MobileView>
				</div>
			)
			poster_group = (
				<div class="slider w-90 pt3">
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
					<CalendarCard poster = {data[1]} name = "Quiz Name" org = "Not IITD QC" date = "3rd Jan" time = "8 pm" fees = "17 crores" platform = "Google Meet"/>
				</div>
			)

		} else if (this.state.route == "old") {
			output = (
				<div>
					<BrowserView>
						<div class="flex items-center justify-center ph4 pt0">
							<p class={`pa2 mr4 ${(isBrowser) ? "f2" : "f3"} avenir green`}>Past Events</p>
							<p onClick = {() => this.onRouteChange("current")} class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box">
							    <span class="pr1"></span>
							    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
							      <title>chevronRight icon</title>
							      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
							    </svg>
							</p>
						</div>
					</BrowserView>
					<MobileView>
						<div class="flex items-center justify-center ph2 pt0">
							<p class="f3 pa2 tc">Past Events</p>
							<p onClick = {() => this.onRouteChange("current")} class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white">{`>`}</p>
						</div>
					</MobileView>
				</div>

			)

			poster_group = (
				<div class="slider w-90 pt3">
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
					<CalendarCard poster = {data[2]} name = "Quiz Name" org = "IITD QC" date = "3rd Nov" time = "8 pm" fees = "12 aana" platform = "Google Meet"/>
				</div>
			)
		}

		return(
			<div>
				<Nav/>
				<div class="flex items-center justify-center ph4 pv0 mt0">
					{output}
				</div>
				{poster_group}
			</div>
		)
	}
}

export default Calendar