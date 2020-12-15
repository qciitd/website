import React from "react"
import "./modal.css"

const Modal = ({ handleClose, show, link, caption }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClosing = (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName != "IMG") {
      handleClose()
    }
  }

  return (
    <div onClick={(e)=>handleClosing(e)} className={showHideClassName}>
      <section onClick={(e)=>handleClosing(e)} className="modal-main tc">
        <div onClick={(e)=>handleClosing(e)} class="center tc">
        	<img onClick={(e)=>handleClosing(e)} src={link} style={{"z-index": "-1", maxHeight:"90vh", margin: "auto"}}/>
        	<div onClick={(e)=>handleClosing(e)} class="w-100 tc" style={{height:"10px"}}>
        		<p onClick={(e)=>handleClosing(e)} class="f6 avenir br3 ph3 pv2 mt1 dib white" style={{background: "#4bb069"}}>{caption}</p>
        	</div>
        </div>
      </section>
    </div>
  );
};

export default Modal