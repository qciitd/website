import React from "react"
import { Link } from "gatsby"
import "tachyons"
import { SocialIcon } from 'react-social-icons';


import Nav from "../components/Nav.js"
import Footer from '../components/footer.js'
import FlipCard from '../components/flipcard.js'
import Card from "../components/card.js"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import './main.css'


const IndexPage = () => (
	<div>
  		<Nav/>
		<div className="vh-75 bg-green banner">
			<div className>
				<div className="fl w-100 w-40-ns garamond ph5 pv5">
					<div className="f1 fw7 measure lh-title cream-text">QC IITD IS NOW ONLINE</div>
					<div className="f3 fw5 pv3 cream-text">(Almost)<br/> For months we've been thinking of building a website. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					<div className="pt4 tl">
					<a className="link blue dib mr4 tc grow " href="https://www.facebook.com/iitd.qc/" title="Facebook">
						<svg className="dib h2 w2 bg-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
					</a>
					<a className="link pink dib mr4 tc grow" href="https://www.instagram.com/iitdqc/" title="Instagram">
						<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
					</a>
					
					</div>
				</div>
				<div className="fl w-100 w-60-ns">
					<div className="outline ma5 pa6 tc cream-text grow">imagine a slideshow</div>
				</div>
			</div>
		</div>
		<div className="fl w-100 tc">
			<div className="tc"><h1>We Quiz</h1></div>
			<FlipCard name={"GENERAL"} data={"ABCDEF"}/>
			<FlipCard name={"MELA"} data={"Music, Entertainment, Literature, Arts"} />
			<FlipCard name={"SPORTS"} data={"Sports"} />
		</div>
		<div className="fl w-100 tc">
			<FlipCard name={"INDIA"} data={"India"}/>
			<FlipCard name={"BIZ"} data={"Biz"} />
			<FlipCard name={"SCITECH"} data={"Scitech"} />
		</div>
		<Footer/>
  	</div>
)

export default IndexPage
