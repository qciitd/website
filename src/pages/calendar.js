import React from "react";
import "tachyons";
import { isBrowser, BrowserView, MobileView } from "react-device-detect";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import CalendarCard from "../components/calendar_card.js";
import "../components/style.css";
import "./main.css";

let output;
let data = [
  "https://s3-us-west-1.amazonaws.com/tachyonsio/img/watchmen.jpg",
  "https://i.pinimg.com/originals/0a/da/86/0ada86ce3ed52a6f8848aafc3fc1c40b.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71tUSFn3W0L._AC_SL1000_.jpg",
];
let poster_group;

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "current",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    var allData = this.props.data.allCalendarSheet1.edges;
    allData.map((node) => console.log(node.node));
    var oldData = allData.filter((node) => node.node.class == "Past Events");
    var currentData = allData.filter((node) => node.node.class == "This Month");
    var newData = allData.filter((node) => node.node.class == "Upcoming");

    if (this.state.route == "current") {
      output = (
        <div>
          <BrowserView>
            <div
              class="flex items-center justify-center ph4 pt0"
              style={{ marginTop: "-45px", fontFamily: "Raleway" }}
            >
              {/* <p
                onClick={() => this.onRouteChange("old")}
                class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"
              >
                <span
                  class="pl1"
                  style={{ fontWeight: "1000", fontSize: "20px" }}
                >
                  &#60;
                </span>
              </p> */}
              <p
                onClick={() => this.onRouteChange("old")}
                className="left-arrow"
              >
                &#60;
              </p>
              <p class={`pa2 ${isBrowser ? "f2" : "f3"} avenir green`}>
                Events this Month
              </p>
              <p
                onClick={() => this.onRouteChange("new")}
                className="left-arrow"
              >
                &#62;
              </p>
              {/* <p
                onClick={() => this.onRouteChange("new")}
                class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box"
              >
                <span class="pr1"></span>
                <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
                  <title>chevronRight icon</title>
                  <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                </svg>
              </p> */}
            </div>
          </BrowserView>
          <MobileView>
            <div
              class="flex items-center justify-center ph2 pt0"
              style={{
                fontFamily: "Raleway",
                color: "#4bb069",
                marginTop: "0",
              }}
            >
              {/* <p
                onClick={() => this.onRouteChange("old")}
                class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white"
              >{`<`}</p> */}
              <p
                onClick={() => this.onRouteChange("old")}
                className="left-arrow"
              >
                &#60;
              </p>
              <p class="f3 pa2 tc">Events this Month</p>
              <p
                onClick={() => this.onRouteChange("new")}
                className="left-arrow"
              >
                &#62;
              </p>
              {/* <p
                onClick={() => this.onRouteChange("new")}
                class="pv3 ph3 pointer br-100 black bg-animate hover-bg-green hover-white"
              >{`>`}</p> */}
            </div>
          </MobileView>
        </div>
      );
      poster_group = (
        <div class="slider w-80 pt0 mt0 pl3">
          {currentData.map((node) => (
            <CalendarCard
              name={node.node.name}
              poster={node.node.poster}
              platform={node.node.platform}
              org={node.node.host}
              date={node.node.date}
              time={node.node.time}
              fees={node.node.fees}
              teams={node.node.team}
              audience={node.node.audience}
              event="current"
              link={node.node.schedule}
              info={node.node.info}
              register={node.node.register}
            />
          ))}
        </div>
      );
    } else if (this.state.route == "new") {
      output = (
        <div>
          <BrowserView>
            <div
              class="flex items-center justify-center ph4 pt0"
              style={{ marginTop: "-45px", fontFamily: "Raleway" }}
            >
              <p
                onClick={() => this.onRouteChange("current")}
                className="left-arrow"
              >
                &#60;
              </p>
              <p class={`pa2 mr4 ${isBrowser ? "f2" : "f3"} avenir green`}>
                Upcoming Events
              </p>
            </div>
          </BrowserView>
          <MobileView>
            <div
              class="flex items-center justify-center ph2 pt0"
              style={{
                fontFamily: "Raleway",
                color: "#4bb069",
                marginTop: "0",
              }}
            >
              <p
                onClick={() => this.onRouteChange("current")}
                className="left-arrow"
              >
                &#60;
              </p>
              <p class="f3 pa2 tc">Upcoming Events</p>
            </div>
          </MobileView>
        </div>
      );
      poster_group = (
        <div class="slider w-80 pt0 pl3 mt0">
          {newData.map((node) => (
            <CalendarCard
              name={node.node.name}
              poster={node.node.poster}
              platform={node.node.platform}
              org={node.node.host}
              date={node.node.date}
              time={node.node.time}
              fees={node.node.fees}
              teams={node.node.team}
              audience={node.node.audience}
              link={node.node.schedule}
              event="new"
              info={node.node.info}
              register={node.node.register}
            />
          ))}
        </div>
      );
    } else if (this.state.route == "old") {
      output = (
        <div>
          <BrowserView>
            <div
              class="flex items-center justify-center ph4 pt0"
              style={{ marginTop: "04x", fontFamily: "Raleway" }}
            >
              <p class={`pa2 mr4 ${isBrowser ? "f2" : "f3"} avenir green`}>
                Past Events
              </p>
              <p
                onClick={() => this.onRouteChange("current")}
                className="left-arrow"
              >
                &#62;
              </p>
            </div>
          </BrowserView>
          <MobileView>
            <div
              class="flex items-center justify-center ph2 pt0"
              style={{
                fontFamily: "Raleway",
                color: "#4bb069",
                marginTop: "0",
              }}
            >
              <p class="f3 pa2 tc">Past Events</p>
              <p
                onClick={() => this.onRouteChange("current")}
                className="left-arrow"
              >
                &#62;
              </p>
            </div>
          </MobileView>
        </div>
      );

      poster_group = (
        <div class="slider w-80 pt0 pl3 mt0">
          {oldData.map((node) => (
            <CalendarCard
              name={node.node.name}
              poster={node.node.poster}
              platform={node.node.platform}
              org={node.node.host}
              date={node.node.date}
              time={node.node.time}
              fees={node.node.fees}
              teams={node.node.team}
              audience={node.node.audience}
              event="past"
              info={node.node.info}
              register={node.node.register}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        <Nav />
        <div class="flex items-center justify-center ph4 pv0 mt0">{output}</div>
        {poster_group}
        <div class="tc pa3 mb2">
          <a
            class="f4 dim blue avenir"
            href="https://calendar.google.com/calendar/u/4?cid=cWNpaXRkZWxoaUBnbWFpbC5jb20"
          >
            Add calendar to your account
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export const query = graphql`
  query CalendarQuery {
    allCalendarSheet1 {
      edges {
        node {
          class
          poster
          name
          host
          audience
          date
          time
          platform
          schedule
          team
          info
          register
        }
      }
    }
  }
`;

export default Calendar;
