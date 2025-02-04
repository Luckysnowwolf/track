import React from "react"
import "./card.css"

export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    buttonText2,
    buttonText3,
}) => {
    return <div className="container">
        {imgSrc && <img src ={imgSrc} alt ={imgAlt}/>}
        
        {title && <h1 className="title"><input className="title-input" placeholder="your title here"
          value={Card.title}
          onChange={handleChange}
        /></h1>}

        {description && <p className="description"><input className="title-input" placeholder="your text here"
          value={Card.description}
          onChange={handleChange}
        /></p>}
        {buttonText && <button className="start">{buttonText}</button>}
        {buttonText2 && <button  className="inprogress">{buttonText2}</button>}
        {buttonText3 && <button className="completed">{buttonText3}</button>}
        <script>
        </script>
    </div>
    
}
function handleChange(e) {
    Card({
      ...title,
      title: e.target.value
    });
  }