import React from "react"
import "./card.css"

export const Card = ({
}) => {
    return <div className="container">
        {imgSrc && <img src ={imgSrc} alt ={imgAlt}/>}
</div>
  }