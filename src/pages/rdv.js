import React from "react";
import { isBrowser } from "react-device-detect";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import RDVCard from "../components/rdv_card.js";
import "../components/style.css";
import "./rdv.css"

const Rdv = ({ data }) => {
  var rdvData = data.allRdvSheet1.edges;
  var output = rdvData.map((node) => (
    <RDVCard
      image={node.node.image}
      qm={node.node.qm}
      teamsize={node.node.teamsize}
      event={node.node.event}
      date={node.node.date}
      time={node.node.time}
	  link={node.node.link}
    />
  ));
  return (
    <div style={{ fontFamily: "Raleway" }}>
      <Nav />
      <div class="w-100 pt2 pb3" style={{ background: "#4bb069" }}>
        <div className="flex">
          <img className="rdv_banner_qc" src={"../../logo.jpg"} />
        <h1 class="f1-ns f3 lh-title white tc">Rendezvous' 23</h1>
        <img className="rdv_banner_logo" src={"../../rdv-sm.png"} /></div>
        
        <h2 class="f3-ns f5 mt0 lh-title tc white">The Cultural Fest of IIT Delhi</h2>
        
      </div>
      
      <div>
        <p class="f4 mb0 lh-title tc black">
          This year at Rendezvous '23, QC IIT Delhi brings to you
        </p>
        
        <p class="f2 mt2 lh-title tc black i fw5 avenir dark-blue">
          {" "}
          The Great Wave of Quizzes{" "}
        </p>
       
	<a href="http://linktr.ee/qciitdelhi" target="_blank">
	<p class="f2 mt2 lh-title tc black i fw5 avenir dark-blue">
		{" "}
		Register here{" "}
	</p>
	</a>
      </div>
      <div class={`grid ${isBrowser ? "w-80" : "w-100"}`} style={{ margin: "auto" }}>
        {output}
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query RdvData {
    allRdvSheet1 {
      edges {
        node {
          event
          qm
          date
          time
          teamsize
          link
          image
        }
      }
    }
  }
`;

export default Rdv;
