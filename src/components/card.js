import React from "react"

const Card = () => {
	return(
		<section class="tc pa3 pa5-ns">
		  <article class="ba b--black-20 mw5 center grow">
		    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="db pb0 mb0" alt="Photo of Jesse Grant" />
		    <div class="pa2 bt mt0 b--black-20">
		      <p class="f5 db dark-blue mv2">Event Name</p>
		      <p class="f6 gray mt2 mb3">Date and Time</p>
		      <a class="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br-pill w-70" style={{margin:"auto"}} href="#">Register Now!</a>
		    </div>
		  </article>
		</section>

		)
}

export default Card;