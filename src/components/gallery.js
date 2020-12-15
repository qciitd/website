import React from "react"

import { isBrowser } from "react-device-detect";
import Modal from "../components/modal.js"

class ImageGallery extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			link: "",
			show: false,
			caption: "",
		}
	}

	showModal = (e) => {
		this.setState({show: true})
		this.setState({link: e.target.src})
		this.setState({caption: e.target.alt})
	}

	hideModal = () => {
		this.setState({show: false})
	}

	render() {
		console.log(this.state)
		return(
			<div>
				<main class="cf pa2">
				    <div class="fl w-80 w-40-ns ph2 tc">
				    	<p class="pv2 grow db no-underline black pointer"><img onClick={(e)=>this.showModal(e)} alt="hello1" class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg"/></p>
					    <p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello2" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg"/></p>
					    <p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello3" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg"/></p>
				    </div>
				    <div class="fl w-60 w-30-ns ph2 tc">
				    	<p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello2" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg"/></p>
					    <p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello3" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg"/></p>
				    	<p class="pv2 grow db no-underline black pointer"><img onClick={(e)=>this.showModal(e)} alt="hello1" class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg"/></p>
					    <p class="pv2 grow db no-underline black pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello4" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg"/></p>
				    </div>
				    <div class="fl w-60 w-30-ns ph2 tc">
				    	<p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello3" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg"/></p>
					    <p class="pv2 grow db no-underline black pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello4" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg"/></p>
				    	<p class="pv2 grow db no-underline black pointer"><img onClick={(e)=>this.showModal(e)} alt="hello1" class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg"/></p>
					    <p class="no-underline pv2 grow db pointer"><img onClick={(e)=>this.showModal(e)} class="db w-100" alt="hello2" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg"/></p>
				    </div>
				</main>
				<Modal show={this.state.show} handleClose={this.hideModal} link={this.state.link} caption = {this.state.caption}>
		          <p>Modal</p>
		          <p>Data</p>
		        </Modal>
	        </div>
		)
	}
}

export default ImageGallery;


