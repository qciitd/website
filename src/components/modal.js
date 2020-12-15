import React from "react"
import "./modal.css"

const Modal = ({ handleClose, show, link, caption }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main tc">
        <div class="center tc">
        	<img src={link} style={{"z-index": "-1", maxHeight:"90vh", margin: "auto"}}/>
        	<p class="pointer dim white avenir" style={{position: "fixed", top: "0px", right:"0"}} onClick={()=>handleClose()}>X</p>	
        	<div class="w-100 tc" style={{height:"10px"}}>
        		<p class="f6 avenir br3 ph3 pv2 mt1 dib white" style={{background: "#4bb069"}}>{caption}</p>
        	</div>
        </div>
      </section>
    </div>
  );
};

export default Modal