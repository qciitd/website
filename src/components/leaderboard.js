import React from "react"
import "tachyons"
import { isBrowser, isMobile } from "react-device-detect";

const Leaderboard = ({data}) => {
  let title = "title"
  console.log(data)
  let random_data = data
  const images = ["https://i.ibb.co/F7m3B7q/gold-Medal.png", "https://i.ibb.co/TtsR8L3/silver-Medal.png", "https://i.ibb.co/SdczRTL/bronze-Medal.png","https://i.ibb.co/zsGRrtt/Screenshot-2020-11-13-at-6-24-16-PM.png"]
  let length = random_data.length

  const Ranking = ({data}) => {
    let rank = random_data.indexOf(data)
    let x;
    if (rank < length/6) {
      x = <img src={images[0]} class="db br-100 w2 w3-ns h2 h3-ns" style={{width:"70px", height:"70px"}}/>
    } else if (rank < length/3) {
      x = <img src={images[1]} class="db br-100 w2 w3-ns h2 h3-ns" style={{width:"70px", height:"70px"}}/>
    } else if (rank < length/2) {
      x = <img src={images[2]} class="db br-100 w2 w3-ns h2 h3-ns" style={{width:"70px", height:"70px"}}/>
    } else {
      x = <div></div>
    }

    if (isBrowser) {
      return(
        <article class="dt w-100 bb b--black-05 pb0 mt2" href="#0">
            <div class={`${(isBrowser)?"dtc w2 w3-ns v-mid":"dib pa2"}`}>
              <img src={data.url} class="ba b--black-10 db br-100" style={{height:"70px", width: "70px"}}/>
            </div>
            <div class="ph3 mb0">
              <h2 class="f4 pt2 mb0"> {data.node.name} </h2>
              <p class="f5 pt1"> Points: {data.node.points}</p>
            </div>
            <div class={`${(isBrowser) ? "dtc w2 w3-ns v-mid" : "dib ml2"} `}>
              {x}
            </div>
        </article>
      )
    } else if (isMobile) {
      return(
        <div>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: "0px", width:"100vw"}}>
            <img src = {data.url} class = "pr2 pl0 ml0 br-100 ba b--black-10" style={{height:"70px", width:"70px"}} />
            <div class = "ml3 mr0 w-40">
              <p class="f4 pt2 ph2 mb0">{data.node.name}</p>
              <p class="f5 pa2">{data.node.points} points</p>
            </div>
            <div class="ml0 pl0">
              {x}
            </div>
          </div>
        </div>
      )
    }
  }

  let output = random_data.map((item) => <Ranking data = {item}/>)

  return(
      <main class="mw6 center mt4">
       {output} 
      </main>
  )
}

export default Leaderboard